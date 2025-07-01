import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/assets/theme/colors';

interface CustomCheckboxProps {
    checked: boolean;
    onPress: () => void;
}

export function CustomCheckbox({ checked, onPress }: CustomCheckboxProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={[styles.outerBox, checked && styles.outerBoxChecked]}>
            <View style={[styles.checkbox, checked && styles.checkedBox]}>
            {checked && (
                <MaterialIcons name="check" size={16} color="white" />
            )}
            </View>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
    },
    outerBox: {
        padding: 2,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    outerBoxChecked: {
        borderColor: colors.purpura,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: colors.purpura,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkedBox: {
        backgroundColor: colors.purpura,
    },
});
