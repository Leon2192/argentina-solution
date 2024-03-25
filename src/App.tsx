import "./App.css";
import Navbar from "./components/shared/Navbar/Navbar";
import Footer from "./components/shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./_root/pages/Home/Home";
import NuestraEmpresa from "./_root/pages/NuestraEmpresa/NuestraEmpresa";
import ProductList from "./_root/pages/ProductosList/ProductList";
import ProductDetail from "./_root/pages/ProductDetail/ProductDetail";
import CodigoDeEtica from "./_root/pages/CodigoDeEtica/CodigoDeEtica";
import ManualDeCumplimiento from "./_root/pages/ManualDeCumplimiento/ManualDeCumplimiento";
import ProcedimientoDeDenuncia from "./_root/pages/ProcedimientoDeDenuncia/ProcedimientoDeDenuncia";
import FormularioDeDenuncia from "./_root/pages/FormularioDeDenuncia/FormularioDeDenuncia";
import Staff from "./_root/pages/Staff/Staff";
import Newsletter from "./_root/pages/Newsletter/Newsletter";
import Presentaciones from "./_root/pages/Presentaciones/Presentaciones";
import HPEngage from "./_root/pages/HPEngage/HPEngage";
import CodigoQR from "./_root/pages/CodigoQR/CodigoQR";
import LegajoImpositivo from "./_root/pages/LegajoImpositivo/LegajoImpositivo";
import CatalogoPanduit from "./_root/pages/CatalogoPanduit/CatalogoPanduit";
import DriversNSX from "./_root/pages/DriversNSX/DriversNSX";
import CatalogoZebra from "./_root/pages/CatalogoZebra/CatalogoZebra";
import Login from "./_auth/forms/Login";
import Register from "./_auth/forms/Register";
import Capacitaciones from "./_root/pages/Capacitaciones/Capacitaciones";
import useGet5Ofertas from "./libs/hooks/useGet5Ofertas";

function App() {
  const { fiveOfertas, loading, error } = useGet5Ofertas();

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(fiveOfertas, "estas son las ofertas");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/*Sesion */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/*Marcas */}
        <Route path="/marcas/:id" element={<ProductList />} />
        <Route path="/:sku/:nombre" element={<ProductDetail />} />
        {/*Empresa */}
        <Route path="/empresa" element={<NuestraEmpresa />} />
        <Route path="/codigo-etica" element={<CodigoDeEtica />} />
        <Route path="/manual-cumplimiento" element={<ManualDeCumplimiento />} />
        <Route
          path="/denuncia-investigacion"
          element={<ProcedimientoDeDenuncia />}
        />
        <Route path="/formulario-denuncia" element={<FormularioDeDenuncia />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/capacitaciones" element={<Capacitaciones />} />

        {/*Herramientas */}
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/configuradores" element={<Presentaciones />} />
        <Route path="/hp-engage" element={<HPEngage />} />
        <Route path="/qr" element={<CodigoQR />} />
        <Route path="/legajo-impositivo" element={<LegajoImpositivo />} />
        <Route path="/catalogo-panduit" element={<CatalogoPanduit />} />
        <Route path="/drivers-nsx" element={<DriversNSX />} />
        <Route path="/catalogo-zebra" element={<CatalogoZebra />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
