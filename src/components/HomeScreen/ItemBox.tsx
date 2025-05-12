import { colors } from '../../../assets/theme/colors';
import { TextPressStart2P } from "../TextPressStart2P";
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import {
    IGeneroContenidoAudiovisual,
    generosContenidoAudiovisual,
} from "@/src/data/generosContenidoAudiovisual";
import {
    ITipoContenidoAudiovisual,
    tiposContenidoAudiovisual,
} from "@/src/data/tiposContenidoAudiovisual";
import { GenresTags } from "../GenresTags";
import { useRouter } from 'expo-router'; 

interface IItemBoxProps {
    id: string;
    contenido: string;
    tipoId: number;
    generosId: number[];
    imageUrl: string;
}

export function ItemBox ({ id, contenido, tipoId, generosId, imageUrl}: IItemBoxProps) {
    const router = useRouter();;
    const generos = generosId.map((id) => getGeneroPorId(id));

    return (
        <TouchableOpacity style={itemStyles.container} 
            onPress={() => router.push({ pathname: "/detail/[id]", params: { id } } as any)}>

            <Image source={{ uri: imageUrl }} style={itemStyles.image} />
            <TextPressStart2P style={itemStyles.title}>{contenido}</TextPressStart2P>

            <View style={itemStyles.tagsContainer}>
                {generos.map((genero) => (
                    <GenresTags key={genero.id} nombre={genero.nombre} />
                ))}
            </View>

        </TouchableOpacity>
    );
}

function getTipoPorId(id: number): ITipoContenidoAudiovisual {
    const fallback = { id: id, singular: "-", plural: "-" };
    return (
        tiposContenidoAudiovisual.find((contenido) => contenido.id === id) ??
        fallback
    );
}

function getGeneroPorId(id: number): IGeneroContenidoAudiovisual {
    const fallback = { id: id, nombre: "-" };
    return (
        generosContenidoAudiovisual.find((genero) => genero.id === id) ?? fallback
    );
}

const itemStyles = StyleSheet.create({
    container: {
        borderWidth: 2,
        width: 140,
        borderColor: colors.grisOscuro,
        backgroundColor : colors.fondo,
        color: 'white',
        padding: 10,
        marginRight: 12,
    },
    title: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left',
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        marginTop: 8,
        gap: 2,
    },
    image: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
        marginBottom: 8,
    },
});

export default ItemBox;


//flat list para las categorias
