import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./app.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainLayout from "./pages/MainLayout";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signUp" element={<Signup />}></Route>
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
