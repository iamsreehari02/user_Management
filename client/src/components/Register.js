import React, { useState } from 'react'
import avatar from '../assets/avatar.svg'
import { Link, useNavigate } from 'react-router-dom'
import {Toaster , toast} from 'react-hot-toast'

export default function Register() {

    const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()
    const [selectedFile , setSelectedFile] = useState(null)

    const handleFileChange = (event) => {
      const file = event.target.files[0]
      setSelectedFile(file)
    }

    const navigate = useNavigate()

    const onSubmit =  () => {
        // console.log({name}
        if(!name || !email || !password){
             toast.error('Enter your details')
             
        }else if((email || password).includes(" ")){
            toast.error('Invalid email or password format')
            
        }else if(password.length < 4){
          toast.error('Password must contain atleast 4 characater')
        }else{
            toast.success('Success')
            navigate('/')
            console.log({ name : {name}, email : {email} , image : {selectedFile} })
            
        }
    }

  return (
    <>
    <Toaster/>
    
    <div className=' bg-slate-200'>
      <div className='flex justify-center items-center h-screen'> 
        <div className='w-96 h-2/3 flex flex-col justify-center border shadow-xl items-center bg-slate-200'>
                <h1 className="title text-4xl font-bold ">Register</h1>
                <p className="text-gray-400">Explore more with us</p>
               
                  {selectedFile == null ? <img className='h-20 w-20  mt-4' src={avatar} alt='avatar' id='profile'></img> :  <img className='h-28 w-28 mt-4 rounded-full shadow-xl'
                  src={URL.createObjectURL(selectedFile)}
                  alt='Selected File'
                />}
                  <label for='picture'>Add photo</label> 
                  <input type='file' id='picture' hidden className='mt-5 w-48 h-48' onChange={handleFileChange}/>
                  
                <input className=' mt-5 rounded-sm h-9 outline-none' type='text' placeholder='Fullname' value={name} 
                onChange={(e)=> setName(e.target.value)}/>
                <input className=' mt-5' type='email' placeholder='Username' value={email} 
                onChange={(e)=> setEmail(e.target.value)}/>
                <input className=' mt-5' type='password' placeholder='Password' value={password} 
                onChange={(e)=> setPassword(e.target.value)}/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white w-52 h-10 mt-5 font-bold rounded"
                onClick={onSubmit}>Sign In</button>
                <p className='mt-3 text-sm'>Already a member?<Link to='/Username' className='ml-2 text-red-500 ='>Login</Link></p>
        </div>
      </div>
    </div>
    </>
  )
}


