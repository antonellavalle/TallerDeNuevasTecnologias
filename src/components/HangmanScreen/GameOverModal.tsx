import React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import { colors } from "@/assets/theme/colors";
import { TextPressStart2P } from "../TextPressStart2P";
import { EstandarButton } from "../EstandarButton";

interface GameOverModalProps {
    visible: boolean;
    score: number;
    onHome: () => void;
}

export function GameOverModal({ visible, score, onHome }: GameOverModalProps) {
    return (
        <Modal visible={visible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
            <TextPressStart2P style={styles.modalTitle}>Game Over</TextPressStart2P>
            <Text style={styles.scoreText}>Puntaje final: {score}</Text>
            <EstandarButton
                title="Home"
                onPress={onHome}
                backgroundColor={colors.verde}
                borderBottomColor={colors.grisOscuro}
                borderLeftColor={colors.grisOscuro}
                borderTopColor={colors.grisOscuro}
                borderRightColor={colors.grisOscuro}
            />
            </View>
        </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContainer: {
        backgroundColor: colors.fondo,
        borderColor: colors.grisOscuro,
        borderWidth: 3,
        padding: 20,
        width: "80%",
        alignItems: "center",
    },
    modalTitle: {
        color: "red",
        fontSize: 24,
        marginBottom: 10,
    },
    scoreText: {
        fontSize: 18,
        color: "white",
        marginBottom: 10,
    },
});
