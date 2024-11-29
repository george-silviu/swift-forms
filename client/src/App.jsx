import { Routes, Route } from "react-router-dom";

import Login from "./pages/login/login.page.jsx";
import Register from "./pages/register/register.page";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
