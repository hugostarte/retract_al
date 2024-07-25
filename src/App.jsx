import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home/Home';
import Contact from './Page/Contact/Contact';
import Header from './Component/Header/Header';
import Catalogue from './Page/Catalogue/Catalogue';



function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Catalogue" element={<Catalogue />} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
