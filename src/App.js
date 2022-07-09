import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Banner from './components/Home/Banner';
import Navbar from './components/Header/Navbar';

function App() {
  return (
    <div className='bg-[#05193D]'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
      </Routes>
    </div>
  );
}

export default App;
