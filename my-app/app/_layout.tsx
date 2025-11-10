import { Stack } from "expo-router";
import { CarritoProvider } from "../contexts/carritoContext";

export default function RootLayout() {
  return (
    <CarritoProvider>
      <Stack>
        <Stack.Screen name="detallesItem/[id]" options={{headerTitle:"Detalles del producto"}}/>
    </Stack>
    </CarritoProvider>
  );
}
