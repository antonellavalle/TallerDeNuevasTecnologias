import { ScrollView, StyleSheet, View } from "react-native";
import { Header } from "@/src/components/HomeScreen/Header"
import { colors } from '../../../assets/theme/colors';
import { GameSectionBox } from "@/src/components/HomeScreen/GameSectionBox"
import { CategoriesSectionBox } from "@/src/components/HomeScreen/CategoriesSectionBox"
import { FilterModal } from "@/src/components/HomeScreen/FilterModal";
import { useState } from "react";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import { useAudiovisuales } from "@/src/context/AudiovisualesContext";

export function HomeScreen() {
      const { contenidos, tipos, generos, loading } = useAudiovisuales(); // ✅ CAMBIO

      const [selectedTipos, setSelectedTipos] = useState<number[]>([]);
      const [selectedGeneros, setSelectedGeneros] = useState<number[]>([]);
      const [modalVisible, setModalVisible] = useState(false);

      const handleApply = (tipos: number[], generos: number[]) => {
        setSelectedTipos(tipos);
        setSelectedGeneros(generos);
        setModalVisible(false);
      };

      const handleReset = () => {
        setSelectedTipos([]);
        setSelectedGeneros([]);
      };

      if (loading) {
        return (
          <View style={styles.emptyGlobalContainer}>
            <TextPressStart2P style={styles.emptyGlobalText}>Cargando...</TextPressStart2P>
          </View>
        );
      }

      const hayResultados = tipos.some((tipo) => {
        const tipoId = tipo.id;
        return contenidos.some((contenido) => {
          const coincideTipo = contenido.tipoId === tipoId;
          const coincideFiltroTipo = selectedTipos.length === 0 || selectedTipos.includes(tipoId);
          const coincideFiltroGenero =
            selectedGeneros.length === 0 ||
            contenido.generos.some((g) => selectedGeneros.includes(g));
          return coincideTipo && coincideFiltroTipo && coincideFiltroGenero;
        });
      });
  return(
  <View style={styles.screenContainer}>
      <Header onFilterPress={() => setModalVisible(true)} />
      <GameSectionBox />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {tipos.map((tipo) => (
          <CategoriesSectionBox
            key={tipo.id}
            tipo={tipo.singular}
            selectedTipos={selectedTipos}
            selectedGeneros={selectedGeneros}
          />
        ))}
        {!hayResultados && (
          <View style={styles.emptyGlobalContainer}>
            <TextPressStart2P style={styles.emptyGlobalText}>
              No se encontraron resultados para los filtros aplicados
            </TextPressStart2P>
          </View>
        )}
        <View style={styles.bottomSpacing} />
      </ScrollView>
      <FilterModal
        visible={modalVisible}
        selectedTipos={selectedTipos}
        selectedGeneros={selectedGeneros}
        onApply={handleApply}
        onReset={handleReset}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: { 
    flex: 1, 
    backgroundColor: colors.fondo 
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.fondo,
  },
  scrollContent: {
    padding: 10,
    flexGrow: 1,
  },
  bottomSpacing: {
    height: 1,
  },
  emptyGlobalContainer: {
    paddingVertical: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyGlobalText: {
    color: colors.purpura,
    fontSize: 30,
    textAlign: 'center',
  },
});