import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarrinhoProvider } from './Context/CarrinhoContext';

import PaginaPrincipal from './pages/PaginaPrincipal';
import Cardapio from './pages/Cardapio';
import Carrinho from './pages/Carrinho';
import Compras from './pages/Compras';


function App() {
  return (
    <CarrinhoProvider>
      <Router>
        <Routes>
          <Route path='/coffee_shops' element={<PaginaPrincipal />} />
          <Route path='/cardapio/coffee_shops' element={<Cardapio />} />
          <Route path='/carrinho/coffee_shops' element={<Carrinho />} />
          <Route path='/compras/coffee_shops' element={<Compras /> } />
        </Routes>
      </Router>
    </CarrinhoProvider>

  );
}

export default App;


