## UCUtería
### Objetivo

Construir una aplicación mobile donde el usuario:

● Explora un menú de cafetería

● Filtra/busca productos,

● Agrega ítems a un carrito

● Ve el total (con impuestos y cupones)

● Completa un formulario de checkout (sin enviar)

● Puede recuperar su carrito al recargar la aplicación.

### Requisitos funcionales

Ver el menú

Como usuario, quiero ver tarjetas de productos con nombre, precio, categoría (Café, Té, Pastelería, Sándwiches) y una imagen/emoji.

### Filtrado y búsqueda

● Filtrar por categoría con botones/checkbox.

● Buscar por texto (nombre o descripción) con input instantáneo.

### Ordenar

● Orden asc/desc por precio o alfabéticamente.

### Agregar/Quitar

Cada tarjeta tiene “Agregar”. El carrito muestra cantidad por ítem, subtotal por ítem y Total general.

Se puede incrementar/decrementar cantidad desde el carrito y vaciar todo.

### Cupones
Campo “Cupón” que acepte:

DESC10 → 10% sobre subtotal

Impuestos y envío

● IVA 22% (uruguayo) calculado sobre el subtotal luego del cupón.

● Envío: $0 si el subtotal ≥ $600; si no, $120 fijo.

● Formulario de checkout (no se envía)

● Nombre, Email, Teléfono, Dirección, Método de pago (radio), Acepto términos (checkbox).

● Validación en cliente: campos obligatorios, email con patrón, teléfono numérico. Si todo ok, mostrar modal/alert “¡Pedido confirmado!” y vaciar carrito.

### Persistencia

● El carrito y el cupón aplicado se guardan en el storage del dispositivo y se restauran al recargar.

### Esquema de Pantallas / Navegación

● Home page donde se vea los productos (nombre, precio, categoría, imagen/emoji) en una tab, y el carrito en otra tab

● Al hacer press en un producto, ir a una pantalla donde se vea la información del producto, agregando el detalle del mismo y la capacidad de agregar el mismo al
carrito. Si el producto ya se encuentra en el, agregar la posibilidad de modificar la cantidad o removerlo del carrito

● En la tab del carrito, deben estar las funcionalidades mencionadas en la sección

## Agregar / Quitar
salvo el formulario de envío, que debe estar dentro de un Modal de Expo Router. 

Al “enviar” el modal, debe volverse a la página de inicio.
