import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Header } from "@/src/components/HomeScreen/Header"
import { colors } from '../../../assets/theme/colors';
import { GameSectionBox } from "@/src/components/HomeScreen/GameSectionBox"
import { CategoriesSectionBox } from "@/src/components/HomeScreen/CategoriesSectionBox"
import { tiposContenidoAudiovisual } from "@/src/data/tiposContenidoAudiovisual";


export function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Header />
      <GameSectionBox />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {tiposContenidoAudiovisual.map((tipo) => (
          <CategoriesSectionBox key={tipo.id} tipo={tipo.singular} />
        ))}
        <View style={styles.bottomSpacing} />
      </ScrollView>
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