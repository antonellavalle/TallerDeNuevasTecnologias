import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { EstandarModal } from "../EstandarModal";
import { TextPressStart2P } from "../TextPressStart2P";
import { EstandarButton } from "../EstandarButton";
import { colors } from "@/assets/theme/colors";

interface GameOverModalProps {
    visible: boolean;
    score: number;
    onHome: () => void;
}

export function GameOverModal({ visible, score, onHome }: GameOverModalProps) {
    return (
        <EstandarModal visible={visible} onClose={onHome} dismissOnTouchOutside={false}>
        <TextPressStart2P style={styles.title}>Game Over</TextPressStart2P>
        <Text style={styles.score}>Puntaje final: {score}</Text>
        <EstandarButton title="Home" onPress={onHome} />
        </EstandarModal>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'red',
        fontSize: 24,
        marginBottom: 10,
    },
    score: {
        fontSize: 18,
        color: colors.blanco,
        marginBottom: 10,
    },
});