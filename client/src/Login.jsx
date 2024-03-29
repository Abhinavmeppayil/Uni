import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

function Login() {

	const[password , setPassword] = useState()	
	const [email, setEmail] = useState()

  
  return (
    <div class="container-fluid">
		<div class="row main-content bg-success text-center">
			<div class="col-md-4 text-center company__info">
				<span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
				<h4 class="company_title">Your Company Logo</h4>
			</div>
			<div class="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div class="container-fluid">
					<div class="row">
						<h2>Log In</h2>
					</div>
					<div class="row">
						<form control="" class="form-group">
							<div class="row">
								<input type="text" name="username" id="username" class="form__input" placeholder="Username" value={email}
								onChange={(e)=> e.target.value}/>
							</div>
							<div class="row">
								<span class="fa fa-lock"></span> 
								<input type="password" name="password" id="password" class="form__input" placeholder="Password"
								value={password} onChange={(e)=> e.target.value}/>
							</div>
							<div class="row">
								<input type="checkbox" name="remember_me" id="remember_me" class=""/>
								<label for="remember_me">Remember Me!</label>
							</div>
							<div class="row">
								<Link to='/'> 
								<input type="submit" value="Submit" class="btn"/></Link>
							</div>
						</form>
					</div>
					<div class="row">
            
						<p>Don't have an account?</p> <Link to='/register'><a>Register Here</a></Link>
					</div>
				</div>
			</div>
		</div>
	</div> )
}

export default Login