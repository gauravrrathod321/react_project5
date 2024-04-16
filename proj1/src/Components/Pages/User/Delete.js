import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {
    const {userId} = useParams();

    const [user,setuser] = useState({})
    const navi = useNavigate();

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`)
        setuser(result.data);
    } 

    function deleteUser(){
        axios.delete(`http://localhost:5000/users/${userId}`)
        navi("/show")
    }

    useEffect(()=>{
        fetchData();
    },[]);

  return (
    <>
    <center><u><h1>Delete confirmation</h1></u>
    <div className='container'>
        <h3>Do yo want to delete record <span style={{'color':"red"}}>{user.name}-{user.address}-{user.mobnumber}-{user.email}?</span></h3>
        <button onClick={()=>deleteUser()}className='btn btn-outline-danger col-3'>YES</button>
        <NavLink to="/show"><button className='btn btn-outline-warning col-3'>NO</button></NavLink>
    </div>
    </center>
    </>
  )
}

export default Delete