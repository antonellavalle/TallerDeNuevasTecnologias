import { useEffect, useState } from 'react';
import { Modal, View, StyleSheet, ScrollView, Text } from 'react-native';
import { TextPressStart2P } from '../TextPressStart2P';
import { EstandarButton } from '../EstandarButton';
import { colors } from '@/assets/theme/colors';
import { CustomCheckbox } from '../CustomCheckbox';
import { useAudiovisuales } from '@/src/context/AudiovisualesContext';

interface FilterModalProps {
    visible: boolean;
    selectedTipos: number[];
    selectedGeneros: number[];
    onApply: (tipos: number[], generos: number[]) => void;
    onReset: () => void;
    onClose: () => void;
}

export function FilterModal({
    visible,
    selectedTipos,
    selectedGeneros,
    onApply,
    onReset,
    onClose,
}: FilterModalProps) {
    const [tipos, setTipos] = useState<number[]>(selectedTipos);
    const [generos, setGeneros] = useState<number[]>(selectedGeneros);

    const { tipos: tiposApi, generos: generosApi } = useAudiovisuales();

    useEffect(() => {
        setTipos(selectedTipos);
    }, [selectedTipos]);

    useEffect(() => {
        setGeneros(selectedGeneros);
    }, [selectedGeneros]);

    const toggleTipo = (id: number) => {
        setTipos((prev) =>
            prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
        );
    };

    const toggleGenero = (id: number) => {
        setGeneros((prev) =>
            prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
        );
    };

    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <ScrollView>
                        <TextPressStart2P style={styles.title}>Filter Content</TextPressStart2P>

                        <TextPressStart2P style={styles.sectionTitle}>Content Types</TextPressStart2P>
                        {tiposApi.map((tipo) => (
                            <View key={tipo.id} style={styles.checkboxRow}>
                                <CustomCheckbox
                                    checked={tipos.includes(tipo.id)}
                                    onPress={() => toggleTipo(tipo.id)}
                                />
                                <Text style={styles.label}>{tipo.singular}</Text>
                            </View>
                        ))}

                        <TextPressStart2P style={[styles.sectionTitle, { marginTop: 10 }]}>Genres</TextPressStart2P>
                        <View style={styles.checkboxGrid}>
                            {generosApi.map((genero) => (
                                <View key={genero.id} style={styles.checkboxColumn}>
                                    <View style={styles.checkboxRow}>
                                        <CustomCheckbox
                                            checked={generos.includes(genero.id)}
                                            onPress={() => toggleGenero(genero.id)}
                                        />
                                        <Text style={styles.label}>{genero.nombre}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </ScrollView>

                    <View style={styles.buttonsContainer}>
                        <EstandarButton
                            title="APPLY FILTERS"
                            onPress={() => onApply(tipos, generos)}
                            borderBottomColor={colors.verde}
                            borderLeftColor={colors.verde}
                            borderTopColor={colors.verde}
                            borderRightColor={colors.verde}
                            backgroundColor={colors.purpura}
                            style={{ flex: 1, marginRight: 5 }}
                        />
                        <EstandarButton
                            title="RESET"
                            onPress={() => {
                                setTipos([]);
                                setGeneros([]);
                                onReset();
                            }}
                            borderBottomColor={colors.grisOscuro}
                            borderLeftColor={colors.grisOscuro}
                            borderTopColor={colors.grisOscuro}
                            borderRightColor={colors.grisOscuro}
                            backgroundColor={colors.fondo}
                            style={{ flex: 1, marginRight: 5 }}
                        />
                        <EstandarButton
                            title="CANCEL"
                            onPress={onClose}
                            borderBottomColor={colors.grisOscuro}
                            borderLeftColor={colors.grisOscuro}
                            borderTopColor={colors.grisOscuro}
                            borderRightColor={colors.grisOscuro}
                            backgroundColor={colors.fondo}
                            style={{ flex: 1, marginRight: 5 }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
    },
    container: {
        backgroundColor: colors.fondo,
        padding: 20,
        borderWidth: 1,
        borderColor: colors.grisOscuro,
        width: '85%',
        maxHeight: '85%',
    },
    sectionTitle: {
        color: colors.verde,
        fontSize: 12,
        marginBottom: 8,
    },
    title: {
        color: colors.blanco,
        fontSize: 16,
        marginBottom: 15,
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    label: {
        color: 'white',
        fontSize: 14,
        marginLeft: 3,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        alignItems: 'center',
        gap: 5,
        flexWrap: 'wrap',
    },
    checkboxGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    checkboxColumn: {
        width: '48%', // dos columnas
        marginBottom: 8,
    },
});

export default FilterModal;
