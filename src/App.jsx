import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pokemones from "./pages/Pokemones";
import Detalle from "./pages/Detalle";

function App() {
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content: center p-3">
        <Routes>
          <Route path="/" element={<h1>Bienvenido maestro pokemón</h1>} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<Detalle />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
