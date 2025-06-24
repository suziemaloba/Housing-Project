import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(user => user.email === form.email);
    if (userExists) {
      setMessage("Email already registered.");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    setMessage(`Welcome, ${form.name}! Account created successfully!`);
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div className='SignIn-Container'>
      <form className='SignIn-form' onSubmit={handleSubmit}>
        Username
        <br />
        <input
          className='Ins'
          type='text'
          name='name'
          value={form.name}
          placeholder='Username'
          onChange={handleChange}
          required
        />
        <br />
        Email
        <br />
        <input
          className='Ins'
          type='email'
          name='email'
          value={form.email}
          placeholder='Email'
          onChange={handleChange}
          required
        />
        <br />
        Password
        <br />
        <input
          className='Ins'
          type='password'
          name='password'
          value={form.password}
          placeholder='Password'
          onChange={handleChange}
          required
        />
        <br />
        <button className='but' type='submit'>Sign up</button>
      </form>

      {message && (
        <p style={{ color: message.includes("Welcome") ? "green" : "red" }}>
          {message}
        </p>
      )}

      <div className='regi'>
        <h2>Already a member?</h2>
        <Link to="/signin/login">
          <button className='but'>Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;