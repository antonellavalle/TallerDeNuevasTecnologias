import { Platform } from 'react-native';

const LOCAL_IP = process.env.EXPO_PUBLIC_API_URL || "http://192.168.0.107:8081";

export const API_URL = Platform.select({
  web: "http://localhost:8081", // Web
  default: LOCAL_IP // celular
});