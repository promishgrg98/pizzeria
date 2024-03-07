import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
       <NavBar />
       <Routes>
        <Route path='/' exact Component={Home} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
