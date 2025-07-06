import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { EstandarModal } from "../EstandarModal";
import { TextPressStart2P } from "../TextPressStart2P";
import { EstandarButton } from "../EstandarButton";
import { colors } from "@/assets/theme/colors";

interface GuessModalProps {
    visible: boolean;
    guessInput: string;
    setGuessInput: (value: string) => void;
    onSubmit: () => void;
    onCancel: () => void;
    guessError: boolean;
}

export function GuessModal({
    visible,
    guessInput,
    setGuessInput,
    onSubmit,
    onCancel,
    guessError,
    }: GuessModalProps) {
    return (
        <EstandarModal visible={visible} onClose={onCancel}>
            <TextPressStart2P style={styles.title}>Guess the Title</TextPressStart2P>
            <TextInput
                value={guessInput}
                onChangeText={setGuessInput}
                placeholder="Enter complete title"
                style={styles.input}
                placeholderTextColor='white'
            />
            {guessError && <Text style={styles.errorText}>X ERROR</Text>}
            <View style={styles.buttonRow}>
                <EstandarButton title="SUBMIT GUESS" onPress={onSubmit} />
                <EstandarButton title="CANCEL" onPress={onCancel} />
            </View>
        </EstandarModal>
    );
}

const styles = StyleSheet.create({
    title: {
        color: colors.blanco,
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        borderWidth: 2,
        borderColor: colors.purpura,
        padding: 10,
        marginBottom: 10,
        width: "100%",
        color: colors.blanco,
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginBottom: 10,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        width: "100%",
    },
});