import { Routes, Route } from "react-router-dom";

import SignIn from "./pages/sign-in/sign-in.page.jsx";
import SignUp from "./pages/sign-up/sign-up.page";

import Layout from "./layout/layout.jsx";
import Dashboard from "./pages/dashboard/dashboard.page.jsx";

function App() {
  return (
    <Routes>
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />

      <Route element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
