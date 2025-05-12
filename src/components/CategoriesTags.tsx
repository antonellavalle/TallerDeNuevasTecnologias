import React from "react";
import { View, StyleSheet } from "react-native";
import { TextPressStart2P } from "./TextPressStart2P";
import { colors } from "@/assets/theme/colors";

interface CategoriesTagsProps {
    nombre: string;
}

export default function CategoriesTags({ nombre }: CategoriesTagsProps) {
    return (
        <View style={styles.tag}>
        <TextPressStart2P style={styles.text}>{nombre}</TextPressStart2P>
        </View>
    );
}

const styles = StyleSheet.create({
    tag: {
        alignSelf: 'flex-start',
        backgroundColor: colors.purpura,
        borderColor: colors.purpuraClaro,
        borderWidth: 2,
        padding:5,
        marginTop:-18,
    },
    text: {
        color: "white",
        fontSize: 10,
        fontWeight: "bold",
    },
});