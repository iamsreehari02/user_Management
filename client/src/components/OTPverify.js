import React, { useState } from 'react'
import avatar from '../assets/avatar.svg'
import { Link, useNavigate } from 'react-router-dom'
import {Toaster , toast} from 'react-hot-toast'

export default function OTPverify() {

    const [otp , setOTP] = useState()
    
    const navigate = useNavigate()

    const onSubmit =  () => {
        // console.log({name}
        if(!otp){
             toast.error('enter your OTP')
             
        }else if(otp.includes(" ")){
            toast.error('invalid OTP')
            
        }
        else if(otp.length < 6){
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
                <h1 className="title text-4xl font-bold ">OTP Verify</h1>
                <p className="text-gray-400">Enter 6 digit OTP send to your email </p>
                <input className=' mt-10' type='number' placeholder='OTP' value={otp} 
                onChange={(e)=> setOTP(e.target.value)}
                /><br/>
                <button varient='primary' className="bg-blue-500 hover:bg-blue-700 text-white w-52 h-10 font-bold rounded"
                onClick={onSubmit}>Verify</button>
                {/* <p className='mt-3 text-sm'>Not recieved OTP?<Link to='/Register' className='ml-2 text-red-500 ='>Resend</Link></p> */}
        </div>
        
      </div>
    </div>
    </>
  )
}
