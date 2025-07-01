import { View, TouchableOpacity, StyleSheet, ViewStyle  } from 'react-native';
import { TextPressStart2P } from "../components/TextPressStart2P";
import { colors } from '../../assets/theme/colors';

type TEstandarButton = {
    title: string;
    icon?: React.ReactNode;
    onPress?: () => void;
    style?: ViewStyle;
    borderTopColor?: string;
    borderLeftColor?: string;
    borderBottomColor?: string;
    borderRightColor?: string;
    backgroundColor?: string;
};

export function EstandarButton({
    title,
    icon,
    onPress,
    style,
    borderTopColor,
    borderLeftColor,
    borderBottomColor,
    borderRightColor,
    backgroundColor,
}: TEstandarButton) {
    return (
        <TouchableOpacity
            style={[
                styles.buttonContainer,
                style,
                {
                    backgroundColor: backgroundColor ?? colors.purpura,
                    borderTopColor: borderTopColor ?? colors.purpuraClaro,
                    borderLeftColor: borderLeftColor ?? colors.purpuraClaro,
                    borderBottomColor: borderBottomColor ?? colors.purpuraOscuro,
                    borderRightColor: borderRightColor ?? colors.purpuraOscuro,
                }
            ]}
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
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 1,
        padding: 8,
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

