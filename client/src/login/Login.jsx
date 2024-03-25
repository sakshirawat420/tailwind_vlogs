import React from "react";
import { Link } from "react-router-dom";

function Login(){

    return (
        
        <div className="flex justify-center items-center h-screen w-screen">
            <div className=" flex flex-row border-2 border-blue-900 items-start justify-center  w-[700px]">
                 <div className="flex flex-col  justify-center items-center grow">
                    <h1 className="text-blue-800 text-3xl mt-20 font-semibold">Login</h1>
                    <p className="text-gray-700 font-semibold mt-3">Username or Email Address</p>
                    <div className="flex justify-center items-start mt-2">
                        <input className="focus:outline-none border-2 border-gray-400 w-[250px] px-2 rounded-sm bg-slate-100" type="text"/>
                    </div>
                    <p className="text-gray-700 font-semibold mt-4">Password</p>
                    <div className="flex justify-center items-start mt-2">
                    <input className="focus:outline-none border-2 border-gray-400 w-[250px] px-2 rounded-sm bg-slate-100" type="text"/>
                    </div>
                    <div className="flex justify-center items-start mt-6">
                    <input className="mt-2" type="checkbox"/>
                    <p className="text-gray-700 font-semibold pl-1">Remember Me</p>
                    </div>
                    <button className="bg-blue-900 text-white font-semibold p-1 w-40 rounded-md mt-5"> Log In</button>
                </div>
                <div className="flex flex-col justify-center items-center bg-blue-900 grow">
                <h1 className="text-4xl text-white mt-40 ">Register</h1>
                <p className="text-white p-3 mb-2">Don't have an account? Register now! </p>
                <Link to="/register"  className="bg-white text-blue-900 px-12 py-2 w-64 mb-44 rounded-md font-semibold">Register on Account</Link>
                </div>
            </div>
            </div>
      
      
      
      
    )

}
export default Login;