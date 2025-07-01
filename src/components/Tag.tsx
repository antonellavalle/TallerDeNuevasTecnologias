import { colors } from '../../assets/theme/colors';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type TTagsProps = {
    nombre:string;
}
export function Tag ({nombre}:TTagsProps) {
    return (
        <View style = {styles.box}>
            <Text style= {styles.text}>{nombre}</Text>
        </View>
    )
}
//Styles

const styles = StyleSheet.create({
    box: {
        backgroundColor: colors.grisOscuro,
        padding: 5,
        marginBottom: 10,
    },
    text: {
        fontSize: 8,
        color: 'white',
    },
})