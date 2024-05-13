import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import { Shop } from "./pages/Shop"
import { Item } from "./pages/Item"
import { FunkosHeader } from "./components/FunkosHeader"
import { FunkosFooter } from "./components/FunkosFooter"
function App() {

  return (
    <BrowserRouter>
      <FunkosHeader/>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop/item/:product_id" element={<Item />} />
      </Routes>
      <FunkosFooter/>
    </BrowserRouter>
  )
}

export default App

