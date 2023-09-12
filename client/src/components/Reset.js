import React, { useState } from 'react'
import avatar from '../assets/avatar.svg'
import { Link, useNavigate } from 'react-router-dom'
import {Toaster , toast} from 'react-hot-toast'
import Password from './Password'

export default function Reset() {


    const [password , setPassword] = useState()
    const [repassword , setRepassword] = useState()

    const navigate = useNavigate()

    const onSubmit =  () => {
        // console.log({name}
        if(password !== repassword){
            toast.error('Password doesnt match')
        }else if((!password || !repassword)){
             toast.error('enter your password')
             
        }else if((password || repassword).includes(" ")){
            toast.error('invalid password type')
            
        }
        else if((password || repassword).length < 6){
          toast.error('Invalid OTP')
        }
        else{
            toast.success('Success')
            navigate('/Reset')
            
        }
    }

  return (
    <>
    <Toaster/>
    
    <div className=' bg-slate-200'>
      <div className='flex justify-center items-center h-screen'> 
        <div className='w-96 h-96 flex flex-col justify-center border shadow-xl items-center bg-white'>
                <h1 className="title text-4xl font-bold ">Reset Password</h1>
                <p className="text-gray-400 mt-3">Enter your new password</p>
                <input className=' mt-10' type='password' placeholder='New Password' value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                <input className='mt-4' type='password' placeholder='Re-enter new Password' value={repassword}
                onChange={(e) => setRepassword(e.target.value)}/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white w-52 h-10 mt-4 font-bold rounded"
                onClick={onSubmit}>Sign In</button>
                {/* <p className='mt-3 text-sm'>Not recieved OTP?<Link to='/Register' className='ml-2 text-red-500 ='>Resend</Link></p> */}
        </div>
        
      </div>
    </div>
    </>
  )
}

