import { ThemeProvider } from "@emotion/react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./theme/theme";
import Header from "./components/common/Header";
import LandingPage from "./components/landing/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";
import EmprendimientosAdmin from "./components/microemprendimientos/EmprendimientosAdmin";
import Publicaciones from "./components/publicaciones/Publicaciones";
import Layout_ex from "./components/layouts/Layout_ex";
import Login from "./components/layouts/LoginCard";
import Categoria from "./components/categorias/Categoria";
import Microemprendimientos from "./components/microemprendimientos/Microemprendimientos";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/emprendimientos" element={<EmprendimientosAdmin />} />
            <Route path="/publicaciones" element={<Publicaciones />} />
            <Route path="/layout" element={<Layout_ex />} />
            <Route path="/login" element={<Login />} />
            <Route path="/categorias" element={<Microemprendimientos />} />
            <Route path="/categorias/:id" element={<Categoria />} />
            {/* Agregar rutas necesarias */}
          </Routes>
          {/* <Footer /> */}
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
