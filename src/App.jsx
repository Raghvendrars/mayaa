import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import AboutUs from './pages/AboutUs'
import Policies from './pages/Policies'
import Faqs from './pages/Faqs'
import Cart from './pages/Cart'
import Shop from './pages/shop'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>
    </Router>
  )
}

export default App
