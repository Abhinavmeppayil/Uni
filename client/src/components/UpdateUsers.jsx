import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function UpdateUsers() {
    const {id} = useParams()
    const [task , setTask] = useState()
    const [email , setEmail] = useState()

    const [description , setDescription] = useState()
    const [date , setDate] = useState()
    const [user , setUser]= useState()
    const navigate = useNavigate()

    // useEffect(() => {
    //     async function fetchUsers() {
    //       try {
    //         const response = await fetch('http://localhost:3001/getUser/' +id);
    //         const data = await response.json();
    //         // console.log(data.user, 'dataresponse')
    //         // setUser(data.user)
            
    //         // setUsers(data.users);
    //       } catch (error) {
    //         console.error(error);
    //       } finally {
    //         // setLoading(false);
            
    //       }
    //     }
    
    //     fetchUsers();
    //   }, []);


    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result =>{console.log(result)
            setTask(result.data.task)
            setEmail(result.data.email)
            setDescription(result.data.description)
            setDate(result.data.date)
        })
    })
    const update = (e)=>{
        e.preventDefault()
        axios.put('http://localhost:3001/updateUser'+id, {task, email, description, date})
        .then(result => console.log(result))
        navigate('/')
        .catch(err => console.log(err))


    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={update}>
                <h2>Update</h2>
                <div className='mb-3'>
                    <label htmlFor=''>Task Name</label>
                    <input type='text'  placeholder='Enter Task Name' className='form-control'
                    value={task} 
                    
                    onChange={e=> setTask(e.target.value)}
                    />
                    

                </div>
                <div className='mb-3'>
                    <label htmlFor=''>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control'
                    value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    
                </div>
                <div className='mb-3'>
                    <label htmlFor=''>Description</label>
                    <input type='text' placeholder='Enter the Description' className='form-control'
                    value={description} onChange={(e)=> setDescription(e.target.value)}/>
                    
                </div>
                {/* <div className='mb-3'>
                    <label htmlFor=''>Deadline</label>
                    <input type='date' placeholder='Enter Name' className='form-control'
                    value={date} onChange={(e)=> setDescription(e.target.value)}/>
                    
                </div> */}
                
                <div className='mb-3'>
                    <label htmlFor='' >Date</label>
                    <input type='date'  className='form-control' onChange={(e)=> setDate(e.target.value)}
                    value={date}/>
                    
                </div>
                <button className='btn-btn-success'>Update</button>
            </form>

        </div>

    </div>
  )
}

export default UpdateUsers