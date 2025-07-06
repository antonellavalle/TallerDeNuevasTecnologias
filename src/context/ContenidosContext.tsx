import { createContext, useContext, useEffect, useState } from "react";
import { IContenidoAudiovisual } from "@/src/data/contenidosAudiovisuales";
import { getContenidosConDemora } from "@/src/services/servicios-demora";

interface IContenidosContext {
    contenidoActual: IContenidoAudiovisual | null;
    siguienteContenido: () => void;
    loading: boolean;
    juegoTerminado: boolean;
    }

    const ContenidosContext = createContext<IContenidosContext | undefined>(undefined);

    export function ContenidosProvider({ children }: { children: React.ReactNode }) {
    const [contenidosRestantes, setContenidosRestantes] = useState<IContenidoAudiovisual[]>([]);
    const [contenidoActual, setContenidoActual] = useState<IContenidoAudiovisual | null>(null);
    const [loading, setLoading] = useState(true);
    const [juegoTerminado, setJuegoTerminado] = useState(false);

    useEffect(() => {
        const cargarContenidos = async () => {
        setLoading(true);
        const datos = await getContenidosConDemora();
        if (datos.length === 0) {
            setJuegoTerminado(true);
            setContenidoActual(null);
            setLoading(false);
            return;
        }

        const copia = [...datos];
        const indiceAleatorio = Math.floor(Math.random() * copia.length);
        const contenidoInicial = copia.splice(indiceAleatorio, 1)[0];

        setContenidosRestantes(copia);
        setContenidoActual(contenidoInicial);
        setJuegoTerminado(false);
        setLoading(false);
        };

        cargarContenidos();
    }, []);

    const siguienteContenido = () => {
        if (contenidosRestantes.length === 0) {
        setJuegoTerminado(true);
        setContenidoActual(null);
        return;
        }

        const copia = [...contenidosRestantes];
        const indiceAleatorio = Math.floor(Math.random() * copia.length);
        const nuevoContenido = copia.splice(indiceAleatorio, 1)[0];

        setContenidoActual(nuevoContenido);
        setContenidosRestantes(copia);
    };

    return (
        <ContenidosContext.Provider
        value={{ contenidoActual, siguienteContenido, loading, juegoTerminado }}
        >
        {children}
        </ContenidosContext.Provider>
    );
    }

    export function useContenidos() {
    const context = useContext(ContenidosContext);
    if (!context) throw new Error("useContenidos debe usarse dentro de ContenidosProvider");
    return context;
}
