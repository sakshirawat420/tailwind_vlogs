function Register(){
    return (
        <div class="flex justify-center items-center h-screen w-screen bg-blue-900">
        <div class="flex flex-col bg-white justify-center items-center p-6 rounded-xl">
          <h1 class="font-semibold text-2xl ">Join us today!</h1>
          <p class="text-gray-700 font-semibold mb-3 mt-1">Sign up now to become a member</p>
          <input class="focus:outline-none border-2   border-gray-300 w-[250px] px-2 rounded-sm  my-1" placeholder="Enter Name" type="text"></input>
          <input class="focus:outline-none border-2 border-gray-300 w-[250px] px-2 rounded-sm  my-1" placeholder="Enter Email" type="email"></input>
          <input class="focus:outline-none border-2 border-gray-300 w-[250px] px-2 rounded-sm  my-1" placeholder="Choose a Password" type="password"></input>
          <input class="focus:outline-none border-2 border-gray-300 w-[250px] px-2 rounded-sm  my-1" placeholder="Re-Enter Password" type="text"></input>
          <button type="submit" class="bg-blue-900 text-white w-56 rounded-md mt-4">Signup</button>
          <div class="flex justify-center items-center gap-1 my-3">
            <p class="text-gray-700 font-semibold">Already a member?</p>
            <p class="text-blue-700 font-semibold">Login here</p>
          </div>
      
        </div>
      
      </div>
    )
}
    export default Register;