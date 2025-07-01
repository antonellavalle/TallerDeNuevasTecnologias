import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextPressStart2P } from "../TextPressStart2P";
import { EstandarButton } from "../EstandarButton";
import { colors } from '../../../assets/theme/colors';
import EvilIcons from '@expo/vector-icons/EvilIcons';

interface HeaderProps {
    onFilterPress?: () => void;
}
export function Header({ onFilterPress }: HeaderProps) {
    return (
        <View style={styles.container}>
            <TextPressStart2P style={styles.title}>Pixdex</TextPressStart2P>
            <EstandarButton
                title="FILTER"
                icon={<EvilIcons name="gear" size={15} color="white" />}
                onPress={onFilterPress}
                borderTopColor={colors.purpuraClaro}
                borderLeftColor={colors.purpuraClaro}
                borderBottomColor={colors.purpuraOscuro}
                borderRightColor={colors.purpuraOscuro}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.fondo,
    },
    title: {
        fontSize: 24,
        color: colors.purpura,
    },
})