import './App.css';
import {
  BrowserRouter,Route, Routes

} from "react-router-dom";
import Fetchapi from './Fetchapi';
import Todos from './components/Todos';
import DisplayTodos from './components/DisplayTodos';

function App() {

  return (
    <div>

    <BrowserRouter>
    <Todos />
    <DisplayTodos />
  <Routes>
    <Route path ="/Fetchapi" element={<Fetchapi/>} />
  </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
