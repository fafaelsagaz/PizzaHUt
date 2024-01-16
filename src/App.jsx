import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Cadastro from "./pages/Cadastro";
import Entrar from "./pages/Entrar";
import Cardapio from "./pages/Cardapio";
import Usuario from "./pages/Usuario";
import Posts from "./pages/Posts";
import NovoPosts from "./pages/NovoPosts";
import PopUpForm from './pages/PopUpForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/entrar" element={<Entrar />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/novoposts" element={<NovoPosts />} />
          <Route path="/popup" element={<PopUpForm isOpen={true} onClose={() => {}} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
