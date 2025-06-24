import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import pic1 from "./../assets/pic1.jpg"
import pic12 from "./../assets/pic12.jpg"
import pic18 from "./../assets/pic18.jpg"
import pic16 from "./../assets/Pic16.jpg"
import pic29 from "./../assets/Pic29.jpg"
import pic13 from "./../assets/Pic13.jpg"

function Detailed() {
const images = [pic1, pic12, pic18,pic13, pic16,pic29];


  return (
    <div className='Detailed'>

      <div className='caroussel'>
        <Carousel className='consel'
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={3000}
          transitionTime={500}
        >
          {images.map((imgSrc, index) => (
            <div key={index}>
              <img className='Detail-img' src={imgSrc} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>

      </div> 
<div className='Lens'>
       <div className='Landlord'>
        <Link className='stay' to="/Detail/Landlord ">
         Landlord
        </Link>
      </div>
       

      <div className='description' to="/Detail/Show-more">
      </div>
      <div className='stray'>
        <h2>Facilities and Aminities</h2>
        <p>2 Rooms</p>
        <p>Shared Kitchen</p>
        <p>Shared Bathroom</p>
        <p>Shared Tiolet</p>
        <p>Electricity</p>
       <Link className='tay' to={"/Showmore"}>More details</Link>
   </div>
    
    </div>
    </div>                      
  )
}

export default Detailed