import './App.css';

import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./components/About";
import Careers from "./components/Careers";
import Services from './components/Services';
import ContactUS from './components/Contact';
// import LifeCycleComp from './components/ReactLifeCycle/ReactLifeCycle';
function App() {
  return (
      <BrowserRouter>
      <>
        {/* <LifeCycleComp/> */}
      </>
        <div className="App">
          <Navbar/>
       
          <div className='content'>
          <Routes> 
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/careers' element={<Careers/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
            <Route path='/contactus' element={<ContactUS/>}></Route>
          </Routes>
          </div>
      
          <Footer/>
        </div>
      </BrowserRouter>

  );
}

export default App;


