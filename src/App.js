import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./views/login/Login";
import Dashboard from "./views/dashboard/Dashboard";
import Cart from "./views/cart/Cart";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
