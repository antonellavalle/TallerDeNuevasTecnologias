import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { TextPressStart2P } from "../components/TextPressStart2P";
import { colors } from '../../assets/theme/colors';

type TEstandarButton = {
    title:string;
    icon: React.ReactNode;
    onPress?: () => void;
}
export function EstandarButton({ title, icon, onPress}:TEstandarButton) {
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onPress}
        >
            <View style={styles.buttonContent}>
                <View style={styles.iconWrapper}>
                    {icon}
                </View>
                <TextPressStart2P style={styles.buttonText}>{title}</TextPressStart2P>
            </View>
        </TouchableOpacity>
    );
    };

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.purpura,
        borderWidth: 1,
        borderTopColor: colors.purpuraClaro, 
        borderLeftColor: colors.purpuraClaro,
        borderBottomColor: colors.purpuraOscuro, 
        borderRightColor: colors.purpuraOscuro, 
        padding: 5,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    iconWrapper: {
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default EstandarButton;

