import React, { useState } from 'react'
import avatar from '../assets/avatar.svg'
import { Link, useNavigate } from 'react-router-dom'
import {Toaster , toast} from 'react-hot-toast'

export default function Password() {

    const [password , setPassword] = useState()
    
    const navigate = useNavigate()

    const onSubmit =  () => {
        // console.log({name}
        if(!password){
             toast.error('Please enter your password')
             
        }else if(password.includes(" ")){
            toast.error('invalid format')
            
        }else if(password.length < 4){
            toast.error('Atleast 4 characater should be there')
        }
        
        else{
            toast.success('Success')
            navigate('/Password')
            
        }
    }


  return (
    <>
    <Toaster/>
    
    <div className=' bg-slate-200'>
      <div className='flex justify-center items-center h-screen'> 
        <div className='w-96 h-96 flex flex-col justify-center border shadow-xl items-center bg-white'>
                <h1 className="title text-4xl font-bold">Hello Again!</h1>
                <p className="text-gray-400">Explore more with us</p>
                <img className='h-20 w-20 mt-4' src={avatar} alt='avatar'/>
                <input className=' mt-5' type='password' placeholder='password' value={password} 
                onChange={(e)=> setPassword(e.target.value)}
                /><br/>
                <button varient='primary' className="bg-blue-500 hover:bg-blue-700 text-white w-52 h-10 font-bold rounded"  onClick={onSubmit}>Sign in</button>
                <p className='mt-3 text-sm'>Not a member?<Link to='/Register' className='ml-2 text-red-500 ='>Register now</Link></p>
        </div>
        
      </div>
    </div>
    </>
  )
}
