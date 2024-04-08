import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PaginaPrincipal from './pages/PaginaPrincipal';
import Cardapio from './pages/Cardapio';
import Carrinho from './pages/Carrinho';
import Usuario from './pages/Usuario';

function App() {

  return (
    //Rotas
    <Router>
      <Routes>
        <Route path='/' element={<PaginaPrincipal />} />
        <Route path='/cardapio' element={<Cardapio />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/usuario' element={<Usuario />} />
      </Routes>
    </Router>
  );
}

export default App;
