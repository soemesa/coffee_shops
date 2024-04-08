import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PaginaPrincipal from './pages/PaginaPrincipal';

function App() {

  return (
    //Rotas
    <Router>
      <Routes>
        <Route path='/' element={<PaginaPrincipal />} />
      </Routes>
    </Router>
  );
}

export default App;
