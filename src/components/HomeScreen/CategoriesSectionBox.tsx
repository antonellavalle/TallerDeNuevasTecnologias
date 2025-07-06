import { colors } from '@/assets/theme/colors';
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ItemBox } from "@/src/components/HomeScreen/ItemBox";
import { useAudiovisuales } from "@/src/context/AudiovisualesContext";
import { TextPressStart2P } from "../TextPressStart2P";
import CategoriesTags from "../../components/CategoriesTags";

interface ICategoriasSectionBox {
    tipo: string;
    selectedTipos: number[];
    selectedGeneros: number[];
}

export function CategoriesSectionBox({ tipo, selectedTipos, selectedGeneros }: ICategoriasSectionBox) {
    const { contenidos, tipos } = useAudiovisuales(); 

    const tipoId = tipos.find(
        (t) => t.singular.toLowerCase() === tipo.toLowerCase()
    )?.id;

    const contenidosFiltrados = tipoId
        ? contenidos.filter((contenido) => {
            const matchTipo = contenido.tipoId === tipoId;
            const filtroTipo = selectedTipos.length === 0 || selectedTipos.includes(contenido.tipoId);
            const filtroGenero =
                selectedGeneros.length === 0 ||
                contenido.generos.some((g) => selectedGeneros.includes(g));
            return matchTipo && filtroTipo && filtroGenero;
        })
        : [];

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
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        borderWidth: 4,
        borderColor: colors.grisOscuro,
        backgroundColor: colors.fondo,
        marginBottom: 15,
        minHeight: 100,
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

