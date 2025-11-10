import React, { useState } from "react";
import { SafeAreaView,View,Text,StyleSheet,TextInput,TouchableOpacity,ScrollView,KeyboardAvoidingView,Platform,} from "react-native";
import ProductCard from "../components/ProductCard";

export default function HomeScreen() {
  const [categoriaFiltro, setCategoriaFiltro] = useState("");
  const [ordenFiltro, setOrdenFiltro] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80} 
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.titulo}>UCUtería Mobile</Text>

          <TextInput
            style={styles.input}
            placeholder="Búsqueda por palabra"
            placeholderTextColor="#edaed7ff"
            onChangeText={(text) => setCategoriaFiltro(text)}
          />

          {/* Botones de categorías */}
          <View style={styles.botonesContainer}>
            <TouchableOpacity style={styles.boton} onPress={() => setCategoriaFiltro("té")}>
              <Text style={styles.botonTexto}>Tés</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => setCategoriaFiltro("café")}>
              <Text style={styles.botonTexto}>Cafés</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => setCategoriaFiltro("sándwiches")}>
              <Text style={styles.botonTexto}>Sándwiches</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => setCategoriaFiltro("pastelería")}>
              <Text style={styles.botonTexto}>Pastelería</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.boton}
              onPress={() => {
                setCategoriaFiltro("");
                setOrdenFiltro("");
              }}
            >
              <Text style={styles.botonTexto}>Mostrar todo</Text>
            </TouchableOpacity>
          </View>

          {/* Botones de orden */}
          <View style={styles.botonesContainer}>
            <TouchableOpacity style={styles.boton} onPress={() => setOrdenFiltro("precioDesc")}>
              <Text style={styles.botonTexto}>Precio ↓</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => setOrdenFiltro("precioAsc")}>
              <Text style={styles.botonTexto}>Precio ↑</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => setOrdenFiltro("productoDesc")}>
              <Text style={styles.botonTexto}>Producto ↑</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => setOrdenFiltro("productoAsc")}>
              <Text style={styles.botonTexto}>Producto ↓</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitulos}>Menú:</Text>

          {/* Tarjetas de productos */}
          <ProductCard categoriaFiltro={categoriaFiltro} ordenFiltro={ordenFiltro} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7d5efff",
  },
  scrollContainer: {
    paddingTop: 20,
    paddingBottom: 40, 
  },
  titulo: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    color: "#2f011fff",
    fontWeight: "bold",
  },
  subtitulos: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    color: "#2f011fff",
  },
  input: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    color: "#961a6aff",
    fontWeight: "bold",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  botonesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  boton: {
    backgroundColor: "#edaed7ff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    margin: 4,
  },
  botonTexto: {
    color: "#2f011fff",
    fontWeight: "bold",
  },
});
