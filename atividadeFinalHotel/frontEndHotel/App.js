import { PaginaReserva, Pagina404 } from "./Paginas";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<PaginaReserva/>} />
          <Route path="/reserva" element={<PaginaReserva/>} />
          <Route path="*" element={<Pagina404/>} />
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
