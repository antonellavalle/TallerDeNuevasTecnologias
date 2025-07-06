import { createContext, useContext, useEffect, useState } from "react";
import { IContenidoAudiovisual } from "@/src/data/contenidosAudiovisuales";
import { ITipoContenidoAudiovisual } from "@/src/data/tiposContenidoAudiovisual";
import { IGeneroContenidoAudiovisual } from "@/src/data/generosContenidoAudiovisual";
import {getContenidosConDemora, getGenerosConDemora, getTiposConDemora } from "@/src/services/servicios-demora";

interface IAudiovisualesContext {
    contenidos: IContenidoAudiovisual[];
    tipos: ITipoContenidoAudiovisual[];
    generos: IGeneroContenidoAudiovisual[];
    loading: boolean;
}

const AudiovisualesContext = createContext<IAudiovisualesContext | undefined>(undefined);

export function AudiovisualesProvider({ children }: { children: React.ReactNode }) {
    const [contenidos, setContenidos] = useState<IContenidoAudiovisual[]>([]);
    const [tipos, setTipos] = useState<ITipoContenidoAudiovisual[]>([]);
    const [generos, setGeneros] = useState<IGeneroContenidoAudiovisual[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cargarDatos = async () => {
        setLoading(true);
        const [c, t, g] = await Promise.all([
            getContenidosConDemora(),
            getTiposConDemora(),
            getGenerosConDemora(),
        ]);
        setContenidos(c);
        setTipos(t);
        setGeneros(g);
        setLoading(false);
        };
        cargarDatos();
    }, []);

    return (
        <AudiovisualesContext.Provider value={{ contenidos, tipos, generos, loading }}>
        {children}
        </AudiovisualesContext.Provider>
    );
}

export function useAudiovisuales() {
    const context = useContext(AudiovisualesContext);
    if (!context) throw new Error("useAudiovisuales debe usarse dentro de AudiovisualesProvider");
    return context;
}
