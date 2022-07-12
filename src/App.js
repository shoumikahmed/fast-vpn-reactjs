import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Banner from './components/Home/Banner';
import Navbar from './components/Header/Navbar';
import WhyFastVpn from './components/Home/WhyFastVpn';
import WorldMap from './components/Home/WorldMap';
import ProtectIdentity from './components/Home/ProtectIdentity';
import Card from './components/Home/Card';

function App() {
  return (
    <div className='bg-[#05193D]'>
      <Navbar></Navbar>
      <Banner></Banner>
      <WhyFastVpn></WhyFastVpn>
      <WorldMap></WorldMap>
      <ProtectIdentity></ProtectIdentity>
      <Card></Card>
    </div>
  );
}

export default App;
