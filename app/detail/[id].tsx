import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { DetailScreen } from '../../src/screens/DetailScreen';

export default function Detail() {
    const { id } = useLocalSearchParams();

    if (!id || Array.isArray(id)) {
        console.log('No se encontró el id');
        return null;
    }

    return < DetailScreen id={id} />;
}
