import { colors } from '@/assets/theme/colors';
import React from 'react';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import { ItemBox } from "@/src/components/HomeScreen/ItemBox"
import { contenidosAudiovisuales } from "@/src/data/contenidosAudiovisuales";
import {
    ITipoContenidoAudiovisual,
    tiposContenidoAudiovisual,
} from "@/src/data/tiposContenidoAudiovisual";

import { TextPressStart2P } from "../TextPressStart2P";

interface ICategoriasSectionBox {
    tipo: string;
}
import CategoriesTags from "../../components/CategoriesTags";

export function CategoriesSectionBox({ tipo }: ICategoriasSectionBox) {
    const tipoId = tiposContenidoAudiovisual.find(
        (t) => t.singular.toLowerCase() === tipo.toLowerCase()
    )?.id; 

    const contenidosFiltrados = tipoId 
        ? contenidosAudiovisuales.filter((contenido) => contenido.tipoId === tipoId)
        : [];

        return (
            <View style={styles.container}>
                <CategoriesTags nombre={tipo} />
                {contenidosFiltrados.length > 0 ? (
                    <FlatList
                        data={contenidosFiltrados}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.scrollContent}
                        renderItem={({ item }) => (
                            <ItemBox
                                id={item.id.toString()}
                                contenido={item.nombre}
                                tipoId={item.tipoId}
                                generosId={item.generos}
                                imageUrl={item.imageUrl}
                            />
                        )}
                    />
                ) : (
                    <View style={styles.emptyContainer}>
                        <TextPressStart2P style={styles.emptyText}>
                            No hay contenidos de tipo {tipo}
                        </TextPressStart2P>
                    </View>
                )}
            </View>
        );  
    
};


const styles = StyleSheet.create({
    container: {
        padding: 5,
        borderWidth: 4,
        borderColor: colors.grisOscuro, 
        backgroundColor: colors.fondo,
        marginBottom: 10,
        flex: 1,
    },
    titleContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.grisOscuro,
        marginBottom: 5,
    },
    title: {
        color: 'white',
        fontSize: 12,
    },
    scrollContent: {
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    emptyContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyText: {
        color: colors.purpura,
        textAlign: 'center',
        fontSize: 10,
    },
});