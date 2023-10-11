import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

import 'bootstrap/dist/css/bootstrap.css'

function Nav() {
  return (
    <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand fs-1">UNICORD</a>
        <form class="d-flex">
        <Link to='/login'> <button className="log" type="submit">
            Login
          </button></Link>
        <Link to='/register'> <button className="log" type="submit" >
            Register
          </button></Link> 
        </form>
      </div>
    </nav>

    {/* <div className="hero">
        <div class="card bg-dark text-white border-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/697/400/original/white-clipboard-task-management-todo-check-list-efficient-work-on-project-plan-fast-progress-level-up-concept-assignment-and-exam-productivity-solution-icon-3d-render-on-white-background-vector.jpg"
            class="card-img"
            alt="..."
          style={{height:'100vh'}} />
          <div class="card-img-overlay">
            <h1 class="card-title  text-dark" >UNICORD</h1>
            <h3 class="card-text text-dark">
                IT ALWAYS SEEMS IMPOSSIBLE UNTIL IT DONE             
            </h3>
          </div>
          </div>
          </div> */}




    </div>
  )
}

export default Nav