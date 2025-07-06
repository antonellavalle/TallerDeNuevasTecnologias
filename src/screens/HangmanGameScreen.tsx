import { useEffect, useState } from "react";
import { Modal, View, TextInput, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../assets/theme/colors";
import { EstandarButton } from "../components/EstandarButton";
import { TextPressStart2P } from "../components/TextPressStart2P";
import { LivesDisplay } from "../components/HangmanScreen/LivesDisplay";
import { HangmanSectionBox } from "../components/HangmanScreen/HangmanSectionBox";
import { useAudiovisuales } from "@/src/context/AudiovisualesContext";
import { GuessModal } from "../components/HangmanScreen/GuessModal";
import { GameOverModal } from "../components/HangmanScreen/GameOverModal";

export function HangmanGameScreen() {
    const router = useRouter();
    const { contenidos, loading } = useAudiovisuales();

    const [disponibles, setDisponibles] = useState([...contenidos]);
    const [contenidoActual, setContenidoActual] = useState<typeof contenidos[0] | null>(null);
    const [lives, setLives] = useState(5);
    const [score, setScore] = useState(0);
    const [guessModalVisible, setGuessModalVisible] = useState(false);
    const [guessInput, setGuessInput] = useState("");
    const [gameOverVisible, setGameOverVisible] = useState(false);
    const [revealed, setRevealed] = useState(false);
    const [guessError, setGuessError] = useState(false);
    const [gameCompleted, setGameCompleted] = useState(false);

    useEffect(() => {
        if (!loading && contenidos.length > 0) {
            setDisponibles(contenidos);
            setContenidoActual(null); // reinicia el contenido actual
            setGameCompleted(false);
        }
    }, [contenidos, loading]);

    // Elegir siguiente contenido o terminar juego si no quedan
    useEffect(() => {
        if (!contenidoActual && disponibles.length === 0 && !gameCompleted) {
            setGameCompleted(true);
        }

        if (!contenidoActual && disponibles.length > 0) {
            elegirSiguienteContenido();
        }
    }, [disponibles, contenidoActual]);


    const elegirSiguienteContenido = () => {
        if (disponibles.length === 0) {
        setContenidoActual(null);
        return;
        }

        const randomIndex = Math.floor(Math.random() * disponibles.length);
        const siguiente = disponibles[randomIndex];

        setContenidoActual(siguiente);
        setDisponibles(prev => prev.filter(item => item.id !== siguiente.id));
    };

    const handleGuessTitle = () => {
        if (!contenidoActual) return;

        const normalizedGuess = guessInput.trim().toLowerCase();
        const normalizedTitle = contenidoActual.nombre.trim().toLowerCase();

        if (normalizedGuess === normalizedTitle) {
        setRevealed(true);
        setScore(score + 1);
        setGuessModalVisible(false);
        setGuessInput("");
        setGuessError(false);

        setTimeout(() => {
                setRevealed(false);
                setContenidoActual(null);
            }, 2000);
        } else {
        const remainingLives = lives - 1;
        setLives(remainingLives);
        setGuessError(true);

        if (remainingLives <= 0) {
            setGuessModalVisible(false);
            setGameOverVisible(true);
        }
        }
    };

    if (loading || (!contenidoActual && !gameCompleted)) {
        return (
            <TextPressStart2P style={{ color: "white", textAlign: "center" }}>
                Cargando...
            </TextPressStart2P>
        );
    }

    if (gameCompleted) {
        return (
        <View style={styles.screenContainer}>
            <TextPressStart2P style={[styles.modalTitle, { color: colors.verde }]}>
            ¡Juego terminado!
            </TextPressStart2P>
            <Text style={{ color: "white", fontSize: 16 }}>Puntaje final: {score}</Text>
            <EstandarButton
            title="Home"
            onPress={() => router.replace("/" as any)}
            backgroundColor={colors.verde}
            borderTopColor={colors.purpuraClaro}
            borderRightColor={colors.purpuraClaro}
            borderBottomColor={colors.purpuraOscuro}
            borderLeftColor={colors.purpuraOscuro}
            />
        </View>
        );
    }

    return (
        <View style={styles.screenContainer}>
            <View style={styles.topBar}>
                <View style={styles.leftSection}>
                    <EstandarButton
                    title="BACK"
                    onPress={() => router.back()}
                    icon={<AntDesign name="arrowleft" size={15} color="white" />}
                    borderTopColor={colors.purpuraClaro}
                    borderLeftColor={colors.purpuraClaro}
                    borderBottomColor={colors.purpuraOscuro}
                    borderRightColor={colors.purpuraOscuro}
                    />
                </View>

                <LivesDisplay lives={lives} />

                <Text style={styles.scoreText}>Score: {score}</Text>
                </View>

            <HangmanSectionBox
                imageUrl={contenidoActual!.imageUrl}
                onGuessTitlePress={() => setGuessModalVisible(true)}
                word={contenidoActual!.nombre}
                reveal={revealed}
            />

            <GuessModal
                visible={guessModalVisible}
                guessInput={guessInput}
                setGuessInput={setGuessInput}
                onSubmit={handleGuessTitle}
                onCancel={() => {
                    setGuessModalVisible(false);
                    setGuessError(false);
                }}
                guessError={guessError}
            />

            <GameOverModal
                visible={gameOverVisible}
                score={score}
                onHome={() => router.replace("/" as any)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.fondo,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: colors.fondo,
        },

    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        },
        scoreText: {
        color: 'white',
        fontSize: 14,
        },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContainer: {
        backgroundColor: colors.fondo,
        borderColor: colors.grisOscuro,
        borderWidth: 3,
        padding: 20,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    modalInput: {
        borderWidth: 3,
        borderColor: colors.purpura,
        padding: 10,
        marginBottom: 10,
        width: '100%',
        color: colors.grisOscuro,
    }
});
