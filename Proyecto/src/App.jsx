import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import { Shop } from "./pages/Shop"
import { Item } from "./pages/Item"
import { Header } from "./components/FunkosHeader"
import { Footer } from "./components/FunkosFooter"
function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop/item/:product_id" element={<Item />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

