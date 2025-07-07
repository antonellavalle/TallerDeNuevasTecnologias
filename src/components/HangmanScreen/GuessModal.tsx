import React from "react";
import { Modal, View, Text, TextInput, StyleSheet } from "react-native";
import { colors } from "@/assets/theme/colors";
import { EstandarButton } from "../EstandarButton";
import { TextPressStart2P } from "../TextPressStart2P";

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
        <Modal visible={visible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
            <TextPressStart2P style={styles.modalTitle}>Guess the Title</TextPressStart2P>
            <TextInput
                value={guessInput}
                onChangeText={setGuessInput}
                placeholder="Enter complete title"
                style={styles.modalInput}
            />
            <View style={styles.buttonRow}>
                {guessError && (
                <Text style={styles.errorText}>X ERROR</Text>
                )}
                <EstandarButton
                title="SUBMIT GUESS"
                onPress={onSubmit}
                backgroundColor={colors.purpura}
                borderBottomColor={colors.verde}
                borderLeftColor={colors.verde}
                borderTopColor={colors.verde}
                borderRightColor={colors.verde}
                />
                <EstandarButton
                title="CANCEL"
                onPress={onCancel}
                backgroundColor={colors.verde}
                borderBottomColor={colors.grisOscuro}
                borderLeftColor={colors.grisOscuro}
                borderTopColor={colors.grisOscuro}
                borderRightColor={colors.grisOscuro}
                />
            </View>
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
        marginBottom: 10,
        color: "white",
    },
    modalInput: {
        borderWidth: 3,
        borderColor: colors.purpura,
        padding: 10,
        marginBottom: 10,
        width: "100%",
        color: 'white',
    },
    buttonRow: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginRight: "auto",
    },
});
