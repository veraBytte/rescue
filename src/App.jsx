import { ThemeProvider } from "@emotion/react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./theme/theme";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import LandingPage from "./components/landing/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";
import Publicaciones from "./components/publicaciones/Publicaciones";
import Layout_ex from "./components/layouts/Layout_ex";
<<<<<<< HEAD
import Login from "./components/layouts/LoginCard";
=======
import Categoria from "./components/categorias/Categoria";
import Microemprendimientos from "./components/microemprendimientos/Microemprendimientos";
>>>>>>> 9084087b60a5bf0365aa9f35eeee311357ad2291

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/publicaciones" element={<Publicaciones />} />
            <Route path="/layout" element={<Layout_ex />} />
<<<<<<< HEAD
            <Route path="/login" element={<Login />} />
=======
            <Route path="/categorias" element={<Microemprendimientos />} />
            <Route path="/categorias/:id" element={<Categoria />} />
>>>>>>> 9084087b60a5bf0365aa9f35eeee311357ad2291
            {/* Agregar rutas necesarias */}
          </Routes>
          {/* <Footer /> */}
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
