import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import SliderComponent from "./components/home/SliderComponent";
function App() {
  return (
    <div className="w-10/12 m-auto" >
   
    <Router>
      <Navbar/>
      <SliderComponent/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:id" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
     </Router>
   
    </div>
  );
}

export default App;
