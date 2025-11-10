import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { useCarrito } from "../../contexts/carritoContext";
import { useRouter } from "expo-router";



export default function ProductCard({  categoriaFiltro, ordenFiltro }) {
  const router = useRouter();
  const [productos, setProductos] = useState([]);
  const { agregarProducto } = useCarrito(); 
  const data = require("../../db.json");


  useEffect(() => {
    setProductos(data.products);
  }, []);

  //Filtro por categoría o búsqueda
  let productosFiltrados = categoriaFiltro
    ? productos.filter(
        (item) =>
          item.category.toLowerCase() === categoriaFiltro.toLowerCase() ||
          item.name.toLowerCase().includes(categoriaFiltro.toLowerCase())
      )
    : productos;

// Orden asc o desc
  if (ordenFiltro === "precioAsc") {
    productosFiltrados = [...productosFiltrados].sort((a, b) => a.price - b.price);
  } else if (ordenFiltro === "precioDesc") {
    productosFiltrados = [...productosFiltrados].sort((a, b) => b.price - a.price);
  } else if (ordenFiltro === "productoAsc") {
    productosFiltrados = [...productosFiltrados].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (ordenFiltro === "productoDesc") {
    productosFiltrados = [...productosFiltrados].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }


  return (
    <View>
      <FlatList
        data={productosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.producto}>
            <Text style={styles.imagen}>{item.img}</Text>
            <Text style={styles.nombre}>{item.name}</Text>
            <Button title="Obtener detalles" onPress={() => router.push(`/detallesItem/${item.id}`)}></Button>
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  producto: {
    backgroundColor: "#faecf5ff",
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    alignItems: "center",
    marginLeft: 13,
    width: "45%",
  },
  nombre: {
    fontSize: 16,
    color: "#660740ff",
    fontWeight: "bold",
  },
  precio: {
    fontSize: 18,
    color: "#660740ff",
  },
  categoria: {
    fontSize: 12,
    color: "#660740ff",
  },
  imagen: {
    fontSize: 30,
  },
});
