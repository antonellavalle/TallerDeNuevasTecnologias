import { colors } from '@/assets/theme/colors';
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { EstandarButton } from "../EstandarButton";
import { HiddenWordDisplay } from "./HiddenWordDisplay";
import { TextPressStart2P } from "../TextPressStart2P";

type GameSectionBoxProps = {
    imageUrl: string;
    onGuessTitlePress: () => void;
    word: string;
    reveal: boolean;
};

export function HangmanSectionBox({ imageUrl, onGuessTitlePress, word, reveal }: GameSectionBoxProps) {
    return (
        <View style={styles.container}>
            <TextPressStart2P>{word}</TextPressStart2P>
            <View style={styles.containerButtons}>
                <EstandarButton
                    title="GUESS TITLE"
                    onPress={onGuessTitlePress}
                    borderBottomColor={colors.purpuraOscuro}
                    borderLeftColor={colors.purpuraClaro}
                    borderTopColor={colors.purpuraClaro}
                    borderRightColor={colors.purpuraOscuro}
                    backgroundColor={colors.purpura}
                />
                <EstandarButton
                    title="GUESS LETTER"
                    onPress={() => {}} 
                    borderBottomColor={colors.purpuraOscuro}
                    borderLeftColor={colors.purpuraClaro}
                    borderTopColor={colors.purpuraClaro}
                    borderRightColor={colors.purpuraOscuro}
                    backgroundColor={colors.purpura}
                />
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <HiddenWordDisplay word={word} reveal={reveal} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.fondo,
        borderWidth: 3,
        borderColor: colors.grisOscuro,
        flex: 1,

    },
    containerButtons: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flex: 1,
    },
    image: {
        width: '100%',
        height: '90%',
    },
});
