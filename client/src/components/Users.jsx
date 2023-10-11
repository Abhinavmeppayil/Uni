import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
   const [users, setUser] = useState([]);
   console.log(users, )

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('http://localhost:3001/getUser');
        const data = await response.json();
        console.log(data.user, 'dataresponse')
        setUser(data.user)
        // setUsers(data.users);
      } catch (error) {
        console.error(error);
      } finally {
        // setLoading(false);
        
      }
    }

    fetchUsers();
  }, []);

  const handleDelete=(id)=>{
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res => console.log(res))
      // window.location.reload()})
    .catch(errr => console.log(errr))


  }
  return (
    // <div>
    //   <Link
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       marginTop: "100px",
    //     }}
    //     to={"/create"}
    //   >
    //     <button>Ass</button>
    //   </Link>

    //   <div className="d-flex vh-100  justify-content-center align-items-center">
    //     <table class="table  w-auto">
    //       <thead class="table-dark">
    //         <tr>
    //           <td>Task Name</td>
    //           <td>Email</td>
    //           <td>Description </td>
    //           <td>Deadline</td>
    //           <td> Status </td> <td>Action </td>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {users.map((user, index) => {
    //           return (
    //             <tr key={index}>
    //               <td>{user.task}</td>
    //               <td>{user.email}</td>
    //               <td>{user.deescription}</td>
    //               {/* <td>{user.Deadline}</td> */}
    //               <td>
    //                 <button className="btn">Pending</button>
    //                 <button>Ongoing</button>
    //                 <button>Completed</button>
    //               </td>
    //               <td>
    //                 <Link to='/update'><button className="btn btn-success">Edit</button></Link>
    //                 <button className="btn btn-danger ms-2">delete</button>
    //               </td>
    //             </tr>
    //           );
    //         })}
    //       </tbody>
    //     </table>
    //     <div></div>
    //   </div>
    // </div>
    <div>
      <Link to='/create'>
      <button style={{margin:'40px', color:'white', background:'black', borderRadius:'5px'}}>Add</button></Link>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>

    <table class="table table-dark  w-50">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Email</th>
      <th scope="col">Description</th>
      <th scope="col">Deadline</th>
      <th scope="col">Action</th>

      {/* <th scope="col"></th> */}
    </tr>
  </thead>
  <tbody>
    {
      users.map((user, index)=>{
        return(
          <tr>
            <td>{user.task}</td>
            <td>{user.email}</td>
            <td>{user.description}</td>
            <td>{user.date}</td>
            {/* <td><button>Pending</button><button>Complete</button></td> */}
            <td>
              <Link to={`/update/${user._id}`}><button style={{borderRadius:'5px'}}>Update</button><button style={{borderRadius:'5px', marginLeft:'10px'}} onClick={(e)=> handleDelete(user._id)}>Delete</button></Link></td>

          </tr>
        )
      })
      
    }
    
  </tbody>
</table>
</div>
</div>
  );
}

export default Users;
