import { colors } from '../../assets/theme/colors';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type TGenresTagsProps = {
    nombre:string;
}
export function GenresTags ({nombre}:TGenresTagsProps) {
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
    },
    text: {
        fontSize: 8,
        color: 'white',
    },
})