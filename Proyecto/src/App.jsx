import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import { Shop } from "./pages/Shop"
import { Item } from "./pages/Item"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop/item/:product_id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

