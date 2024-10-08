import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
       <NavBar />
       <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/menu' exact Component={Menu} />
        <Route path='/about' exact Component={About} />
        <Route path='/contact' exact Component={Contact} />
       </Routes>
       <Footer />
      </Router>
    </div>
  );
}

export default App;
