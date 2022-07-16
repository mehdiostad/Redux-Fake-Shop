import Navbar from "./container/navbar/Navbar";
import ProductComponent from "./container/products/ProductComponent";
import ProductListing from "./container/products/ProductListing";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductDetailes from "./container/products/ProductDetailes";
function App() {
  return <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element= {<ProductListing/>}></Route>
      <Route path="/product/:productId" element= {<ProductDetailes/>}></Route>
    </Routes>
 </Router>
  </>;
}

export default App;
