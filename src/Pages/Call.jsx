import React, {useState} from 'react'
function Call() {
     const [form, setform]= useState({name:"",email:"", password:""});
        const handleChange =(e) =>{
          setform({...form,[e.target.name]: e.target.value});
    
        }
        const handleSubmit = (e)=>{
          e.preventDefault();
          alert("Account created successfuly!");
          console.log("User:", form) ;
        };
  return (
    <div className='Cal'>672941033</div>
  )
}

export default Call