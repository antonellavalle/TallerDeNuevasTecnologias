import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Header } from "@/src/components/HomeScreen/Header"
import { colors } from '../../../assets/theme/colors';
import { GameSectionBox } from "@/src/components/HomeScreen/GameSectionBox"
import { CategoriesSectionBox } from "@/src/components/HomeScreen/CategoriesSectionBox"
import { tiposContenidoAudiovisual } from "@/src/data/tiposContenidoAudiovisual";
import FilterModal from "@/src/components/HomeScreen/FilterModal";
import { useState } from "react";


export function HomeScreen() {
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

  return (
    <View style={styles.screenContainer}>
      <Header onFilterPress={() => setModalVisible(true)} />
      <GameSectionBox />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {tiposContenidoAudiovisual.map((tipo) => (
          <CategoriesSectionBox
            key={tipo.id}
            tipo={tipo.singular}
            selectedTipos={selectedTipos}
            selectedGeneros={selectedGeneros}
          />
        ))}
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
  }
});