import { Tabs } from 'expo-router';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#580b27ff" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="carrito"
        options={{
          title: "Carrito",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="cart-arrow-down" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
