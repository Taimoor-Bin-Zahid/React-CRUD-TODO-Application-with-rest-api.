import './App.css';
import {
  BrowserRouter,Route, Routes

} from "react-router-dom";
import Fetchapi from './Fetchapi';
import Todos from './components/Todos';

function App() {

  return (
    <div>
      <Todos />
    <BrowserRouter>
  <Routes>
    <Route path ="/Fetchapi" element={<Fetchapi/>} />
  </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
