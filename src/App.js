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
      <h1>Todo App</h1>
    <Todos />
    <DisplayTodos />
    <BrowserRouter>

  <Routes>
    <Route path ="/Fetchapi" element={<Fetchapi/>} />
  </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
