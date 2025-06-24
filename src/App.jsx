import React from 'react'
import {BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from "./Component/Home";
import Town from "./Pages/Town";
import SignIn from './Component/SignIn';
import Login from './Component/Login';
import Detailed from './Pages/Detailed';
import Learnmore from './Component/Learnmore';
import Showmore from './Pages/showmore';
import Call from './Pages/Call';
import Landlord from './Component/Landlord';
function App() {
  return (



    <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Town/:Anything" element={<Town/>}/>
      <Route path="/Signin" element={<SignIn/>}/>
       <Route path="/Signin/Login" element={<Login/>}/>
      <Route path="/Learnmore" element={<Learnmore/>}/>
      <Route path="/Detail" element={<Detailed/>}/>
       <Route path="/Showmore" element={<Showmore/>}/>
        <Route path="/Detail/Call" element={<Call/>}/>
        <Route path="/Detail/Landlord" element={<Landlord/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

