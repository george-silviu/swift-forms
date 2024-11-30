import { Routes, Route } from "react-router-dom";

import Login from "./pages/login/login.page.jsx";
import Register from "./pages/register/register.page";

import Layout from "./layout/layout.jsx";
import Dashboard from "./pages/dashboard/dashboard.page.jsx";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
