import React from 'react'
import "../App.css";
import {Link} from "react-router-dom"
import './Town.css'
import pic1 from "./../assets/pic1.jpg"
import pic2 from "./../assets/pic2.jpg"
import pic3 from "./../assets/pic3.jpg"
import pic4 from "./../assets/pic4.jpg"
import pic5 from "./../assets/pic5.jpg"
import pic6 from "./../assets/pic6.jpg"
import pic7 from "./../assets/pic7.jpg"
import pic8 from "./../assets/pic8.jpg"
import pic10 from "./../assets/pic10.jpg"
import pic30 from "./../assets/pic30.jpg"
import pic11 from "./../assets/pic11.jpg"

function Town() {
  return (
    <div className='Room1'>

      <Link   to="/Detail" className='house-card'>
            <img className='pic' src={pic1} alt="pic1" />
            <br></br>
            <p>Fully furnished 2 Bedroom room apartment availabLe -Bonduma Gate</p>
            <p>70,000FCFA / 80mm<sup>2</sup></p>
            </Link>
           
            <Link to="/Detail" className='house-card'>
            <img className='pic' src={pic2} alt="pic2" />
            <br></br>
            <p>Shared apartment avaiLabLe -Sosoliso</p>
            <p>100,000FCFA / 75mm<sup>2</sup></p>
            
            </Link>

             <Link to="/Detail" className='house-card'>
            <img className='pic' src={pic5} alt="pic5" />
            <p>SingLe room apartment avaiLabLe-dirty-south, Molyko</p>
            <p>30,000FCFA / 40mm<sup>2</sup></p>
            </Link>

             <Link to="/Detail" className='house-card'>
            <img className='pic' src={pic3} alt="pic3" />
             <p>Single room apartment available-untarred malingo</p>
            <p>40,000FCFA / 40mm<sup>2</sup> </p>
            </Link>
 

             <Link to="/Detail" className='house-card'>
            <img className='pic' src={pic4} alt="pic4" />
            <p>Fully furnished SingLe room apartment availabLe- Tarred Malingo</p>
            <p>60,000FCFA / 40mm <sup>2</sup></p>
             </Link>

           
             <Link to="/Detail" className='house-card'>
            <img className='pic' src={pic7} alt="pic7" />
             <p>Fully furnished 2 bedroom apartment avaiLable-Class quater</p>
            <p>60,000FCFA / 40mm<sup>2</sup> </p>
             </Link>
           
            
             <Link to="/Detail" className='house-card'>
            <img className='pic' src={pic30} alt="pic30" />
            <p>Fully furnished SingLe room apartment availabLe-Bokwango</p>
            <p>60,000FCFA / 40mm<sup>2</sup></p>
             </Link>
           
             <Link to="/Detail" className='house-card'>
            <img className='pic' src={pic11} alt="pic11" />
            <p>Fully furnished Single room apartment avaiLabLe-Administrative garage</p>
            <p>60,000FCFA / 40mm</p>
             </Link>

              <Link to="/Detail" className='house-card'>
            <img className='pic' src={pic6} alt="pic6" />
            <p>Fully furnished SingLe room apartment availabLe- G R A</p>
            <p>60,000FCFA / 40mm <sup>2</sup></p>
             </Link>

              <Link to="/Detail"className='house-card' >
            <img className='pic' src={pic8} alt="pic8" />
            <p>Fully furnished SingLe room apartment availabLe- UB Junction</p>
            <p>60,000FCFA / 40mm <sup>2</sup></p>
             </Link>
    </div>
  );
}

export default Town;