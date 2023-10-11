import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../src/Register.css";
import axios from "axios";

function Register() {

  const [name, setName]= useState()
  const [email, setEmail]= useState()
  const [password, setPassword]= useState()


 const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhos:3001/register',{name, email, password})
    .then(res =>{
      alert("created")
    }).catch(err => console.log('error'))

  }
  return (
    <div class="container-fluid">
      <div class="row main-content bg-success text-center">
        <div class="col-md-4 text-center company__info">
          <span class="company__logo">
            <h2>
              <span class="fa fa-android"></span>
            </h2>
          </span>
          <h4 class="company_title">Your Company Logo</h4>
        </div>
        <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
          <div class="container-fluid">
            <div class="row">
              <h2>Register</h2>
            </div>
            <div class="row">
              <form control="" class="form-group" onSubmit={handleSubmit}>
                <div class="row">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="form__input"
                    placeholder="Username"
                    onChange={(e)=> setName(e.target.value)}
                  />
                </div>
                <div class="row">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="form__input"
                    placeholder="Email"
                    onChange={(e)=> setEmail(e.target.value)}
                  />
                </div>
                <div class="row">
                  <span class="fa fa-lock"></span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="form__input"
                    placeholder="Password"
                    onChange={(e)=> setPassword(e.target.value)}
                  />
                </div>
                <div class="row">
                  <span class="fa fa-lock"></span>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    class="form__input"
                    placeholder="Password"
                    onChange={(e)=> setPassword(e.target.value)}
                  />
                </div>

                {/* <div class="row">
								<input type="checkbox" name="remember_me" id="remember_me" class=""/>
								<label for="remember_me">Remember Me!</label>
							</div> */}
                <div class="row">
                  <Link to="/login">
                    <input type="submit" value="Submit" class="btn" />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
