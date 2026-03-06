# Raven E-Commerce - Proyecto Final React 🚀

Este es el proyecto final para el curso de React en CoderHouse. Consiste en una aplicación de comercio electrónico (E-commerce) funcional, conectada en tiempo real con **Firebase Firestore** para la gestión de productos y órdenes de compra.

## 🛠️ Tecnologías Utilizadas

*   **React.js** (Vite)
*   **React Router DOM** (Navegación SPA)
*   **Firebase/Firestore** (Base de datos NoSQL y Hosting/Storage)
*   **Bootstrap 5** (Estilos y Grilla Responsiva)
*   **Context API** (Gestión global del carrito)

## 📌 Funcionalidades Implementadas (Rúbrica)

### 1. Navegación y Catálogo
*   **Landing Page:** Visualización de todos los productos de la colección `productos`.
*   **Categorización:** Navegación filtrada por categorías: *Celulares, Notebooks y Sillas Gamer*.
*   **Detalle de Producto:** Vista dinámica (`ItemDetailContainer`) que obtiene datos específicos mediante `itemId`.

### 2. Gestión de Carrito (Context API)
*   **CartContext:** Implementación de un proveedor global para gestionar productos, cantidades, subtotales y total de la compra.
*   **Persistencia:** Uso de `localStorage` para mantener el carrito activo tras recargar la página.
*   **CartWidget:** Contador dinámico de items en el Navbar.

### 3. Finalización de Compra (Checkout)
*   **Formulario de Compra:** Validación de datos del comprador (Nombre, Teléfono, Email).
*   **Firebase Integration:** Generación de órdenes de compra asincrónicas en la colección `orders`.
*   **Feedback:** Visualización del ID único de seguimiento generado por Firestore tras una compra exitosa.

## 📂 Estructura del Proyecto

```text
src/
 ├── components/        # Componentes de UI (Item, ItemList, Navbar, etc.)
 ├── context/           # CartContext y Provider
 ├── services/          # Configuración de Firebase (firebaseConfig.js)
 ├── App.jsx            # Configuración de Rutas
 └── main.jsx           # Punto de entrada de la App


## ✅ Estado del Proyecto
- [x] Conexión a Firestore exitosa.
- [x] Navegación por Categorías funcional.
- [x] Carrito con LocalStorage operativo.
- [x] Checkout y Generación de Orden de Compra.

## 👤 Autor
*   **Alumno:** [Juan Sebastian Campelo]
*   **Comisión:** [#81665-reactjs]
*   **Instituto:** [CoderHouse]
