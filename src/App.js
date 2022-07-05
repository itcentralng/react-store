import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./views/login/Login";
import Dashboard from "./views/dashboard/Dashboard";
import Cart from "./views/cart/Cart";
import Checkout from "./views/cart/Checkout";
import './index.css';
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  if(!isLoggedIn){
    return <Login />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element="404 Not found" />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
