import { colors } from '@/assets/theme/colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GameBox } from "./GameBox";

export function GameSectionBox() {
    return (
        <View style={styles.container}>
            <GameBox 
            tittle="Desafío del Ahorcado"
            description="Adivina los títulos letra por letra. ¿Cuántos puedes identificar?" 
            colorBackground={colors.purpura} />
            <GameBox 
            tittle="Pixel Reveal"
            description="Identifica títulos desde imágenes pixeladas. ¡Pon a prueba tu memoria visual!" 
            colorBackground={colors.verde} />            
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor : colors.fondo,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 10,
        flexDirection: 'row',
    },
    
});