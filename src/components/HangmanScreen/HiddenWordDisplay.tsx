import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/assets/theme/colors';
import { TextPressStart2P } from "../TextPressStart2P";

type HiddenWordDisplayProps = {
    word: string;
    reveal: boolean;
};

export function HiddenWordDisplay({ word, reveal }: HiddenWordDisplayProps) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {word.split('').map((char, index) => {
                    const isSpace = char === ' ';
                    return (
                        <TextPressStart2P
                            key={index}
                            style={[styles.letter, isSpace && styles.space]}
                        >
                            {isSpace ? ' ' : reveal ? char : '_'}
                        </TextPressStart2P>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 15,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.grisOscuro,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexWrap: 'wrap',
    
    },
    letter: {
        fontSize: 24,
        color: 'white',
        marginHorizontal: 6,
    },
    space: {
        marginHorizontal: 12,
    },
});
