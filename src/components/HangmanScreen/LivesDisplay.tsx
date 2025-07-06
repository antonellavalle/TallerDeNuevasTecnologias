import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../../assets/theme/colors';

type LivesDisplayProps = {
    lives: number;
    maxLives?: number;
};

export function LivesDisplay({ lives, maxLives = 5 }: LivesDisplayProps) {
    return (
        <View style={styles.container}>
            {[...Array(maxLives)].map((_, i) => (
                <FontAwesome
                    key={i}
                    name="heart"
                    size={24}
                    color={i < lives ? colors.purpura : colors.grisOscuro} // violeta si tiene vida, gris si no
                    style={styles.icon}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 5,
    },
    icon: {
        marginHorizontal: 4,
    },
});
