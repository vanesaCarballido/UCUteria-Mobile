import React, { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error("useCarrito debe usarse dentro de un CarritoProvider");
  }
  return context;
};

export function CarritoProvider({ children }) {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  const agregarProducto = (producto) => {
    setProductosEnCarrito((prev) => {
      const existente = prev.find((p) => p.id === producto.id);
      if (existente) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarProducto = (id) => {
    setProductosEnCarrito((prev) => {
      return prev
        .map((p) =>
          p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p
        )
        .filter((p) => p.cantidad > 0); 
    });
  };

  const vaciarCarrito = ()=>{
    setProductosEnCarrito([]);
  }

  const precioTotal = productosEnCarrito.reduce(
    (total, p) => total + p.price * p.cantidad,
    0
  );


  return (
    <CarritoContext.Provider
      value={{ productosEnCarrito, agregarProducto, eliminarProducto, precioTotal, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export default CarritoProvider;
