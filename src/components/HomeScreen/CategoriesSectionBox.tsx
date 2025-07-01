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
    selectedTipos: number[];
    selectedGeneros: number[];
}
import CategoriesTags from "../../components/CategoriesTags";

export function CategoriesSectionBox({ tipo, selectedTipos, selectedGeneros }: ICategoriasSectionBox) {
    const tipoId = tiposContenidoAudiovisual.find(
        (t) => t.singular.toLowerCase() === tipo.toLowerCase()
    )?.id; 

    const contenidosFiltrados = tipoId
        ? contenidosAudiovisuales.filter((contenido) => {
            const matchTipo = contenido.tipoId === tipoId;
            const filtroTipo = selectedTipos.length === 0 || selectedTipos.includes(contenido.tipoId);
            const filtroGenero =
                selectedGeneros.length === 0 ||
                contenido.generos.some((g) => selectedGeneros.includes(g));
            return matchTipo && filtroTipo && filtroGenero;
        })
        : [];
        //CAMBIO: Evitar mostrar la categoría si hay filtros activos y no hay contenido
        if (
            (selectedTipos.length > 0 || selectedGeneros.length > 0) &&
            contenidosFiltrados.length === 0
        ) {
            return null;
        }

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
                            {selectedTipos.length > 0 || selectedGeneros.length > 0
                                ? 'Sin resultados para los filtros elegidos'
                                : `No hay contenidos de tipo ${tipo}`}
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
        marginBottom: 15,
        minHeight: 100,
    },
    titleContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.grisOscuro,
        marginBottom: 5,
    },
    scrollContent: {
        paddingHorizontal: 10,
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
