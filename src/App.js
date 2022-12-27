import './App.css';
import Forgot from "./Components/Forget/Forgot"
import Login from './Components/Login/Login';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>}></Route>
  <Route path="/Forgot" element={<Forgot/>}></Route>
  <Route path="/" element={<Login/>}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
