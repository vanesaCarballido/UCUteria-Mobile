import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useCarrito } from "../../contexts/carritoContext";

export default function DetallesItem() {
  const { id } = useLocalSearchParams(); // obtiene el id desde la URL
  const router = useRouter();
  const { agregarProducto } = useCarrito();
  const data = require("../../db.json");

  //Para buscar el producto por id recibido en productCard
  const producto = data.products.find((p) => p.id.toString() === id);

  if (!producto) {
    return (
      <View style={styles.container}>
        <Text>Producto no encontrado</Text>
        <Button title="Volver" onPress={() => router.back()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.img}>{producto.img}</Text>
      <Text style={styles.nombre}>{producto.name}</Text>
      <Text style={styles.precio}>Precio: ${producto.price}</Text>
      <Text style={styles.categoria}>Categoría: {producto.category}</Text>
      <Text style={styles.descripcion}>{producto.description}</Text>

      <Button
        title="Agregar al carrito"
        onPress={() => agregarProducto(producto)}
        color="#660740"
      />

      <View style={{ marginTop: 15 }}>
        <Button title="Volver al inicio" onPress={() => router.back()} color="#aaa" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    padding: 20 
  },
  img: { 
    fontSize: 60 
  },
  nombre: { 
    fontSize: 24, 
    fontWeight: "bold", 
    color: "#660740", 
    marginVertical: 10 
  },
  precio: { 
    fontSize: 18, 
    marginVertical: 4 
  },
  categoria: { 
    fontSize: 14, 
    color: "#660740" 
  },
  descripcion: { 
    fontSize: 16, 
    textAlign: "center", 
    marginVertical: 10 
  }
});
