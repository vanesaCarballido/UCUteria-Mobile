import React, { useState } from "react";
import {View,Text, StyleSheet,FlatList,Button,TextInput,Alert,ScrollView,} from "react-native";
import { useCarrito } from "../../contexts/carritoContext";

export default function Carrito() {
  const { productosEnCarrito, precioTotal, eliminarProducto, vaciarCarrito, agregarProducto } = useCarrito();
  const [cupon, setCupon] = useState("");
  const [descuento, setDescuento] = useState(0);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  // Cupon de 10
  const aplicarCupon = () => {
    if (cupon.toUpperCase() === "DESC10") {
      setDescuento(0.1);
      Alert.alert("Cupón del 10% aplicado");
    } else {
      setDescuento(0);
      Alert.alert("Cupón inválido");
    }
  };

  // precio calculos
  const subtotalConDescuento = precioTotal * (1 - descuento);
  const iva = subtotalConDescuento * 0.22;
  const envio = subtotalConDescuento >= 600 ? 0 : 120;
  const totalFinal = subtotalConDescuento + iva + envio;

  // Validar campos
  const confirmarPedido = () => {
    if (!nombre || !email || !telefono || !direccion || !metodoPago) {
      Alert.alert("Faltan campos por completar");
      return;
    }
  
    if (!aceptaTerminos) {
      Alert.alert("Debe aceptar los términos y condiciones para confirmar.");
      return;
    }

    Alert.alert("Pedido confirmado!");
    vaciarCarrito();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Carrito:</Text>

      <FlatList
        data={productosEnCarrito}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.producto}>
            <Text style={styles.nombre}>{item.name}</Text>
            <Text style={styles.imagen}>{item.img}</Text>
            <Text style={styles.precio}>${item.price}</Text>
            <Button color="#8b0847ff" title="+" onPress={() => agregarProducto(item)} />
            <Button color="#8b0847ff" title="-" onPress={() => eliminarProducto(item.id)} />
            <Text>{item.name} x {item.cantidad}</Text>
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />

      <View style={styles.cuponContainer}>
        <TextInput
          placeholder="Ingrese cupón"
          style={styles.input}
          value={cupon}
          onChangeText={setCupon}
        />
        <Button title="Aplicar" color="#8b0847ff" onPress={aplicarCupon} />
      </View>

      <View style={styles.resumen}>
        <Text>Subtotal: ${precioTotal.toFixed(2)}</Text>
        <Text>Descuento: -{(descuento * 100).toFixed(0)}%</Text>
        <Text>IVA (22%): ${iva.toFixed(2)}</Text>
        <Text>Envío: ${envio}</Text>
        <Text style={styles.totalFinal}>TOTAL: ${totalFinal.toFixed(2)}</Text>
      </View>

      <View style={styles.checkout}>
        <Text style={styles.subtitulo}>Checkout:</Text>
        <TextInput placeholder="Nombre"  placeholderTextColor="#961a6aff"
         style={styles.input} value={nombre} onChangeText={setNombre} />

        <TextInput placeholder="Email" placeholderTextColor="#961a6aff" 
        style={styles.input} value={email} onChangeText={setEmail} />

        <TextInput placeholder="Teléfono" placeholderTextColor="#961a6aff" 
        style={styles.input} keyboardType="numeric" value={telefono} onChangeText={setTelefono} />

        <TextInput placeholder="Dirección" placeholderTextColor="#961a6aff" 
        style={styles.input} value={direccion} onChangeText={setDireccion} />

        <TextInput placeholder="Método de pago" placeholderTextColor="#961a6aff" 
        style={styles.input} value={metodoPago} onChangeText={setMetodoPago} />

        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
          <Button
            title={aceptaTerminos ? "✅ Acepto términos" : "☐ Acepto términos"}
            color={aceptaTerminos ? "#8b0847ff" : "#aaa"}
            onPress={() => setAceptaTerminos(!aceptaTerminos)}
          />
        </View>

        <Button
          title="Confirmar Pedido"
          color="#550634ff"
          onPress={confirmarPedido}
        />
      </View>

      <View style={styles.boton}>
        <Button title="Vaciar carrito" color="#550634ff" onPress={() => vaciarCarrito()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#fff" 
  },
  titulo: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginBottom: 15, 
    color: "#660740" 
  },
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
    fontWeight: "bold" 
  },
  precio: { 
    fontSize: 18, 
    color: "#660740ff" 
  },
  row: { 
    justifyContent: "space-between" 
  },
  cuponContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 10, 
    marginVertical: 10 
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 8,
    flex: 1,
  },
  resumen: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingTop: 10,
    gap: 5,
  },
  totalFinal: { 
    fontWeight: "bold", 
    fontSize: 18, 
    marginTop: 10, 
    color: "#660740" 
  },
  checkout: { 
    marginTop: 20 
  },
  subtitulo: { 
    fontSize: 18, 
    fontWeight: "bold", 
    color: "#660740", 
    marginBottom: 10 
  },
  boton: { 
    marginTop: 20, 
    backgroundColor: "#edaed7ff", 
    borderRadius: 10 
  },
  imagen:{
   fontSize:40
  }
});
