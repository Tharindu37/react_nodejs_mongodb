import { useEffect, useState } from 'react'
import { createUser } from './service/apiService'

import './App.css'

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const create=async (event)=>{
    event.preventDefault();
    try{
      await createUser({name:name,email:email, password:password})
      console.log('Created');
    }catch(error){
      console.log(error)
    }
  }
  // useEffect(()=>{
  //   create();
  // })

  return (
    <>
      <form onSubmit={create}>
      <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} />
      <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
      <button type='submit'>Create</button>
      </form>
    </>
  )
}

export default App
