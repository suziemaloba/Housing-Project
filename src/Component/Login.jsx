import React,  { useState } from 'react'

function Login() {
  
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Account created successfully!');
    console.log('User:', form);
  };

  return (
    <form className="Lone" onSubmit={handleSubmit}>
     
     

      Email
      <br />
      <input
        className="In"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <br />

      <div className="In">
        Password
        <br />
        <input
          className="In"
          type="text"
          name="password"
          placeholder="Write something"
          onChange={handleChange}
          required
        />
      </div>
      <br />

      <button className="he" type="submit">Submit</button>
    </form>
  );
}

  


export default Login