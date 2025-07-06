import { Slot } from "expo-router";
import { AudiovisualesProvider } from "@/src/context/AudiovisualesContext";
import { ContenidosProvider } from "@/src/context/ContenidosContext";
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function Layout() {
    return (
        <SafeAreaProvider>
            <AudiovisualesProvider>
                <ContenidosProvider>
                    <Slot />
                </ContenidosProvider>
            </AudiovisualesProvider>
        </SafeAreaProvider>
    );
}

