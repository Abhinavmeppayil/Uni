import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 
function CreateUsers() {


    const [task , setTask] = useState()
    const [email , setEmail] = useState()

    const [description , setDescription] = useState()
    const [date , setDate] = useState()
    const navigate = useNavigate()

    // const [date , setDate] = useState()



    const submit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/createUser', {task, email, description, date})
        .then(result => console.log(result))
        navigate('/')
        .catch(err => console.log(err))
    }


  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={submit}>
                <h2>Add Task</h2>
                <div className='mb-3'>
                    <label htmlFor=''>Task Name</label>
                    <input type='text' placeholder='Enter Task Name' className='form-control' onChange={(e)=> setTask(e.target.value)}/>

                </div>
                <div className='mb-3'>
                    <label htmlFor=''>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control' onChange={(e)=> setEmail(e.target.value)}/>
                    
                </div>
                <div className='mb-3'>
                    <label htmlFor='' >Description</label>
                    <input type='text' placeholder='Enter the Description' className='form-control' onChange={(e)=> setDescription(e.target.value)}/>
                    
                </div>
                <div className='mb-3'>
                    <label htmlFor='' >Date</label>
                    <input type='date'  className='form-control' onChange={(e)=> setDate(e.target.value)}/>
                    
                </div>
                {/* <div className='mb-3'>
                    <label htmlFor=''>Deadline</label>
                    <input type='date' placeholder='Enter Name' className='form-control' onChange={(e)=> setDate(e.target.value)}/>
                    
                </div> */}
                <button style={{color:'white', background:'black', borderRadius:'10px'}} type='submit' >Submit</button>
            </form>

        </div>

    </div>
  )
}

export default CreateUsers