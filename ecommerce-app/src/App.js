import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home/index.js'
import About from './pages/About/index.js'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path='/' element={<Home />}/>
        <Route exact={true} path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
