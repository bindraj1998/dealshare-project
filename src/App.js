import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Linkpage from './components/Linkpage';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Cleaning from './pages/Cleaning';
import Fruit from './pages/Fruit';
import Kitchen from './pages/Kitchen';
import Personalcare from './pages/Personalcare';
import Drink from './pages/Drink';
import Addtobag from './pages/Addtobag';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Linkpage/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cleaning" element={<Cleaning/>}></Route>
        <Route path="/fruit" element={<Fruit/>}></Route>
        <Route path="/kitchen" element={<Kitchen/>}></Route>
        <Route path="/personalcare" element={<Personalcare/>}></Route>
        <Route path="/drink" element={<Drink/>}></Route>
        <Route path="/addtobag" element={<Addtobag/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
