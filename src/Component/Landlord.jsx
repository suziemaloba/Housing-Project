import React, {useState} from 'react'
import { FaUser } from 'react-icons/fa';

function Landlord({imageUrl}) {
     const [form, setform]= useState({name:"",email:"", password:""});
        const handleChange =(e) =>{
          setform({...form,[e.target.name]: e.target.value});
          
    
        }
        const handleSubmit = async (e)=>{
          e.preventDefault();
          console.log(form)
          try{
            await fetch("http://localhost:4000/email", {
              method: "POST",
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(form)
            })

            alert("Email successfully sent")

          }catch(err){
            console.log(err)
          }


        };
  return (

    <div className='Lof'>
<div className="Kno">
        {imageUrl ? (
          <img src={imageUrl} alt="Landlord" className="For-img" />
        ) : (
          <FaUser className="You" />
        )}
      </div>
    <div className='Go'>
        <form className='Lone' onSubmit={handleSubmit}>
          <div className='tel'>
    <h3>Contact Number:+237 672941033</h3>
</div>
<br></br>
 First Name
 <br></br>
<input className='In' type='text' name="fame" placeholder='Your Name' onChange={handleChange} required/>
<br></br>
Last Name

<br></br>
<input className= "In"   type='text' name="lame" placeholder='Your last name' onChange={handleChange} required/>
<br></br>
Email
<br></br>
<input className= "In"   type='text' name="email" placeholder='Email' onChange={handleChange} required/>
   <br></br>

    
   Subject
   <br></br>
  
   <input className= "In"   type='text' name="message" placeholder='write something' onChange={handleChange} required/>

   <br></br>
   <button className='he'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Landlord;