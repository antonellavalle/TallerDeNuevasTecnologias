import React from "react";
import {
    Modal,
    TouchableWithoutFeedback,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    StyleProp,
    ViewStyle,
} from "react-native";
import { colors } from "@/assets/theme/colors";


interface EstandarModalProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
    dismissOnTouchOutside?: boolean;
}

export const EstandarModal: React.FC<EstandarModalProps> = ({
    visible,
    onClose,
    children,
    containerStyle,
    dismissOnTouchOutside = true,
    }) => {
    const handleOutsidePress = () => {
        if (dismissOnTouchOutside) {
        Keyboard.dismiss();
        onClose();
        }
    };

    return (
        <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onClose}
        >
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
            <View style={styles.overlay}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={styles.keyboardWrapper}
            >
                <TouchableWithoutFeedback>
                <View style={[styles.modalContainer, containerStyle]}>
                    {children}
                </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    keyboardWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "100%",
        backgroundColor: colors.fondo,
        padding: 20,
        borderWidth: 3,
        borderColor: colors.grisOscuro,
    },
});
