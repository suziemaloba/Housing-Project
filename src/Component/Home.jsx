import React from 'react';
import "./Navbar.css"
import {Link} from "react-router-dom"
import Limbe from "./../assets/Alfred_Saker_monument.jpg"
import Buea from "./../assets/Buea_from_Fako.jpg";
import Kumba from "./../assets/Kumba_Fiango.jpg";
import Douala from "./../assets/Douala_bonapriso_bonanjo_akwa_bali.jpg";
import Bamenda from "./../assets/Bamenda_from_mountain_road.jpg"; 
import { FaSearch } from 'react-icons/fa';

function Home() {
  return (

    <div className='Nav-bar'>

      <div className='Login'>
        
 <Link className='hello' to={"/SignIn"}>Sign Up</Link>
 <Link className='hello' to={"/Learnmore"}>About us</Link>
  </div>
      
      <div className='Logo'>
        
         <h1>DwElLnEsT</h1>
      </div>

  <div className='Land'>

  
      <Link className='Lan' to="/Town/Buea">

      <h1>Buea</h1>
     
      </Link>
      </div>
      <div className='Button'>
        <FaSearch /><input  className='Joe'   type='text' placeholder='Search' />
      </div>

<div className='Hi'>
  
 <p className='text'>Better chances of finding your dream home
      
      
    </p>
  
  
    </div>
      
    </div>
  );
}

export default Home;

