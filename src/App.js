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
          <Route path='/' element={<PaginaPrincipal />} />
          <Route path='/cardapio' element={<Cardapio />} />
          <Route path='/carrinho' element={<Carrinho />} />
          <Route path='/compras' element={<Compras /> } />
        </Routes>
      </Router>
    </CarrinhoProvider>

  );
}

export default App;


/*
  
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product ) => {
    const results = allProducts.filter(
      item => item.id != product.id
    );
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    return setAllProducts([...results]);
  };*/