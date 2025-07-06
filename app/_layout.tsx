// app/_layout.tsx
import { Slot } from "expo-router";
import { AudiovisualesProvider } from "@/src/context/AudiovisualesContext";
import { ContenidosProvider } from "@/src/context/ContenidosContext";

export default function Layout() {
    return (
        <AudiovisualesProvider>
        <ContenidosProvider>
            <Slot />
        </ContenidosProvider>
        </AudiovisualesProvider>
    );
}

