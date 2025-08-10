import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 redBaorder'>
           <form className='flex flex-col items-center justify-center'> <input type="email" 
            placeholder='Enter Your Email' />
            <input className='border-2 border-red-600 rounded-full' type="password"
             placeholder='Enter Password' />
             <button>Login</button>
             </form>
        </div>
    </div>
  )
}

export default Login
