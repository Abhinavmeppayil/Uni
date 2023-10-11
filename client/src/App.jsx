
import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './components/Users'
import CreateUsers from './components/CreateUsers'
import UpdateUsers from './components/UpdateUsers'
import Home from './components/Home'
import Nav from './components/Nav'
import Login from './Login'
import Register from './Register'

function App() {

  return (
    <div>
      
     <Router>
     <Nav/>
      <Routes>
        <Route path='/' element={<Users/>}></Route>
        <Route path='/create' element={<CreateUsers/>}></Route>

        <Route path='/update/:id' element={<UpdateUsers/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/register' element={<Register/>}></Route>

      </Routes>
    </Router>  
    
      
    </div>
  )
}

export default App
