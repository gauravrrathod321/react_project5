import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form';

    function Update() {

        const {register,handleSubmit,setValue} = useForm();
        const {userId} = useParams();
        const navi= useNavigate();

        async function fetchData(){
            const result = await axios.get(`http://localhost:5000/users/${userId}`)
            setValue('name',result.data.name);
            setValue('address',result.data.address);
            setValue('mobnumber',result.data.mobnumber);
            setValue('email',result.data.email)
        } 

        function saveData(data){
            axios.put(`http://localhost:5000/users/${userId}`,data)
            navi("/show");
        }

        useEffect(()=>{
            fetchData();
        },[])

  return (
    <>
    <div className='container border border-warning mt-5'>
    <center><h1><u>Rent Update Aplication Form</u></h1>
    <form onSubmit={handleSubmit(saveData)} className='mt-5 '>
      <label htmlFor='n' className='text-primary'><b>Enter your Name:</b></label>
      <input type="text" id="n" className='form-control'{...register('name')}></input>
      <br></br>
      <label htmlFor="a" className='text-primary'><b>Enter your Address</b></label>
      <input type="text" id="a" className='form-control'{...register('address')}></input>
      <br></br>
      <label htmlFor="mo" className='text-primary'><b>Enter Mob number</b></label>
      <input type="number" id="mo" className='form-control'{...register('mobnumber')}></input>
      <br></br>
      <label htmlFor='e' className='text-primary'><b>Enter your email</b></label>
      <input type="email" id="e" className='form-control'{...register('email')}></input>
      <br></br>
      <input type="submit" value="UPDATE STUDENT" className='btn btn-outline-success col-6 btn-lg'></input>
      <input type="reset" value="RESET" className='btn btn-outline-warning col-6 btn-lg'></input>
    </form>
    </center>
    </div>
    </>
  )
}

export default Update