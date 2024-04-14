import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarrinhoProvider } from './Context/CarrinhoContext';

import PaginaPrincipal from './pages/PaginaPrincipal';
import Cardapio from './pages/Cardapio';
import Carrinho from './pages/Carrinho';
import Compras from './pages/Compras';


function App() {
  return (
    <CarrinhoProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<PaginaPrincipal />} />
          <Route path='/cardapio/' element={<Cardapio />} />
          <Route path='/carrinho/' element={<Carrinho />} />
          <Route path='/compras/' element={<Compras /> } />
        </Routes>
      </Router>
    </CarrinhoProvider>

  );
}

export default App;


