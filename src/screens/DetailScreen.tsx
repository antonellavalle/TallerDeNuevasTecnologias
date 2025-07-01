import { StyleSheet, Image, Text, View } from "react-native";
import { colors } from '../../assets/theme/colors';
import { EstandarButton } from "../components/EstandarButton";
import { contenidosAudiovisuales } from "@/src/data/contenidosAudiovisuales";
import { TextPressStart2P } from "../components/TextPressStart2P";
import { useRouter } from 'expo-router';
import { Tag } from "../components/Tag";
import {
    IGeneroContenidoAudiovisual,
    generosContenidoAudiovisual,
} from "@/src/data/generosContenidoAudiovisual";
import { AntDesign } from '@expo/vector-icons';
import { tiposContenidoAudiovisual } from "@/src/data/tiposContenidoAudiovisual";

type TDetailScreenProps = {
    id: string;
};

export function DetailScreen({ id }: TDetailScreenProps) {
    const contenido = contenidosAudiovisuales.find(item => item.id.toString() === id);
    const router = useRouter();

    if (!contenido) {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.text}>Contenido no encontrado</Text>
            </View>
        );
    }

    const generos = contenido.generos.map(getGeneroPorId);

    return (
    <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
        <EstandarButton
            title="BACK"
            icon={<AntDesign name="arrowleft" size={15} color="white" />}
            onPress={() => router.back()}
            borderTopColor={colors.purpuraClaro}
            borderLeftColor={colors.purpuraClaro}
            borderBottomColor={colors.purpuraOscuro}
            borderRightColor={colors.purpuraOscuro}
        />
        </View>

        <View style={styles.content}>
        <Image source={{ uri: contenido.imageUrl }} style={styles.image} />
        <TextPressStart2P style={styles.title}>{contenido.nombre}</TextPressStart2P>
        
        <View style={styles.tagsContainer}>
            <Tag nombre={getTipoPorId(contenido.tipoId)} />
        </View>
        
        <Text style={styles.text}>{contenido.descripcion}</Text>
        <TextPressStart2P style={styles.genres}>Géneros</TextPressStart2P>
        <View style={styles.tagsContainer}>
            <Tag nombre={getTipoPorId(contenido.tipoId)} />
            {generos.map((genero) => (
            <Tag key={genero.id} nombre={genero.nombre} />
            ))}
        </View>
        </View>
    </View>
    );
}

function getGeneroPorId(id: number): IGeneroContenidoAudiovisual {
    const fallback = { id, nombre: "-" };
    return generosContenidoAudiovisual.find((genero) => genero.id === id) ?? fallback;
}
function getTipoPorId(id: number) {
    return tiposContenidoAudiovisual.find((t) => t.id === id)?.singular ?? "-";
}


const styles = StyleSheet.create({
    headerContainer: { 
        padding:10,
        backgroundColor: colors.fondo,
        alignItems: 'flex-start',
    },
    title: {
        color: colors.purpura,
        fontSize: 20,
        marginBottom: 5,
    },
    text: {
        color: 'white',
        fontSize: 14,
        marginBottom: 5,
        marginVertical: 5,
    },
    image: {
        width: '100%', 
        flex:1,
        marginBottom: 10,
    },
    genres: {
        fontSize: 14,
        color: colors.verde,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        marginTop: 8,
        gap: 2,
    },
    content: {
        alignItems: 'flex-start',
        flexGrow: 1,
        padding: 20,
        backgroundColor: colors.fondo,
        borderColor: colors.grisOscuro,
        borderWidth: 3,
    },
    screenContainer: {
        flexGrow: 1,
        padding: 10,
        backgroundColor: colors.fondo,
    },
    });
