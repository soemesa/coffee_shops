import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PaginaPrincipal from './pages/PaginaPrincipal';
import Cardapio from './pages/Cardapio';
import Carrinho from './pages/Carrinho';
import Usuario from './pages/Usuario';
import Compras from './pages/Compras';

function App() {
    
  return (
    //Rotas
    <Router>
      <Routes>
        <Route path='/' element={<PaginaPrincipal />} />
        <Route path='/cardapio' element={<Cardapio />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/usuario' element={<Usuario />} />
        <Route path='/compras' element={<Compras /> } />
      </Routes>
    </Router>
 
  );
}

export default App;
