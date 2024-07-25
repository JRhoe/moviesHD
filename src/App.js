import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieInfo from './pages/MovieInfo';
import Nav from './components/Nav';
import Cert from './components/Cert';
import { useLocation } from "react-router-dom"
import Nav2 from './components/Nav2';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:movieID' element={<MovieInfo/>}/>
        </Routes>
        <Cert/>
      </div>
    </Router>
  );
}

export default App;
