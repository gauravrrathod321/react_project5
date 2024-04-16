import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
  const {register,handleSubmit}= useForm();
  const navi= useNavigate();

  function saveData(data){ 
    axios.post('http://localhost:5000/users',data);
    // alert('record added');
    navi('/show');

  }
  return (
    <>
    <div className='container border border-warning mt-5'>
    <center><h1><u>Rent Aplication Form</u></h1>
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
      <input type="submit" value="ADD RENT" className='btn btn-outline-success col-6 btn-lg'></input>
      <input type="reset" value="RESET" className='btn btn-outline-warning col-6 btn-lg'></input>
    </form>
    </center>
    </div>
    </>
  )
}

export default Add