import { useState } from 'react';
import Banner from './components/Banner';
import Body from './components/Body';


function App() {
  const [termoBusca, setTermoBusca] = useState('');

  const realizarBusca = (termo) => {
    setTermoBusca(termo);
    console.log('Termo de busca:', termo)
  }

  return (
    <div className="App">
      < Banner /> 
      < Body /> 
    </div>
  );
}

export default App;
