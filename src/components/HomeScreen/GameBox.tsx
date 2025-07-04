import { colors } from '../../../assets/theme/colors';
import { TextPressStart2P } from "../TextPressStart2P";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type TGameBoxProps = {
    tittle:string;
    description:string;
    colorBackground: string
}
export function GameBox ({tittle, description, colorBackground}:TGameBoxProps) {
    return (
        <View style = {[styles.box, {backgroundColor: colorBackground}]}>
            <TextPressStart2P style={styles.tittle}>{tittle}</TextPressStart2P>
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity
                        style={[styles.buttonContainer, {backgroundColor: colorBackground}]}
                        onPress={() => console.log('Yendo a Jugar')}
                    >
                    <View style={styles.buttonContent}>
                        <TextPressStart2P style={styles.buttonText}>Jugar</TextPressStart2P>
                    </View>
            </TouchableOpacity>
        </View>
    )
}

//Styles

const styles = StyleSheet.create({
    box: {
        color: 'white',
        padding: 10, //espaciado interno
        borderWidth: 4,
        borderColor: colors.grisOscuro, 
        width: '48%', //ancho del contenedor
        justifyContent: 'space-between',
    },
    tittle: {
        fontSize: 14,
        color: 'white',
    },
    description: {
        fontSize: 12,
        color: 'white',
    },
    buttonText: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        alignItems: 'flex-end',
        padding: 5,
    },
});
export default GameBox;