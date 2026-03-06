import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Checkout from './components/Checkout/Checkout' // <--- Importamos el Checkout
import CartPage from './pages/CartPage'

function App() {
  return (
    <>
      <Navbar />
      <div style={{
        background: 'linear-gradient(90deg, #9dc5ee, #09539e)',
        color: 'white',
        padding: '12px',
        textAlign: 'center',
        fontSize: '2rem'
      }}>
        Bienvenido a Raven Store — Informática y Celulares
      </div>

      <div className="text-center py-2 text-muted fs-4 fw-bold">
        Envíos a todo el país — Atención personalizada
      </div>

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          
          {/* Cambié :id por :itemId para que coincida con tu ItemDetailContainer */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          
          <Route path="/cart" element={<CartPage />} />
          
          {/* Nueva ruta para el proceso de compra final */}
          <Route path="/checkout" element={<Checkout />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  )
}

export default App
