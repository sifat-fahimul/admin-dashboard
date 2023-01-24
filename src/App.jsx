import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./app.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainLayout from "./pages/MainLayout";
import Error from "./pages/Error";
import AddCustomer from "./components/AddCustomer";
import CustomerList from "./components/CustomerList";
import OrderList from "./components/OrderList";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signUp" element={<Signup />}></Route>
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/add-customers" element={<AddCustomer />} />
          <Route path="/admin/customers-list" element={<CustomerList />} />
          <Route path="/admin/product-list" element={<ProductList />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/order-list" element={<OrderList />} />
        </Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
