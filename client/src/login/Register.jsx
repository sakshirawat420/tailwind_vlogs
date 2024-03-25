import { Link } from "react-router-dom";
import {useState} from 'react'
import axios from 'axios'

function Register(){
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  }
    return (
<div className="flex justify-center items-center h-screen w-screen bg-blue-900">
<form onSubmit={handleSubmit}>
  <div className="flex flex-col bg-white justify-center items-center p-6 rounded-xl">
    <h1 className="font-semibold text-2xl ">Join us today!</h1>
    <p className="text-gray-700 font-semibold mb-3 mt-1">Sign up now to become a member</p>
    
    <input className="focus:outline-none border-2   border-gray-300 w-[250px] px-2 rounded-sm  my-1 placeholder-gray-500 text-sm" placeholder="Enter Name" type="text" autoComplete="off" name="name" onChange={(e)=>setName(e.target.value)}></input>
    <input className="focus:outline-none border-2 border-gray-300 w-[250px] px-2 rounded-sm  my-1 placeholder-gray-500 text-sm" placeholder="Enter Email" type="email" autoComplete="off" name="email" onChange={(e)=>setEmail(e.target.value)}></input>
    <input className="focus:outline-none border-2 border-gray-300 w-[250px] px-2 rounded-sm  my-1 placeholder-gray-500 text-sm" placeholder="Choose a Password" type="password" ></input>
    <input className="focus:outline-none border-2 border-gray-300 w-[250px] px-2 rounded-sm  my-1 placeholder-gray-500 text-sm" placeholder="Re-Enter Password" type="text" autoComplete="off" name="name" onChange={(e)=>setPassword(e.target.value)}></input>
    <button type="submit" className="bg-blue-900 text-white w-56 rounded-md mt-4">Signup</button>
    
    <div className="flex justify-center items-center gap-1 my-3">
      <p className="text-gray-700 font-semibold">Already a member?</p>
      <Link  to ="/login" className="text-blue-700 font-semibold">Login here</Link>
    </div>

  </div>
  </form>

</div>

    )
}
    export default Register;