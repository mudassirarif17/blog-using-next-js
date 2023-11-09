"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
    const navigation =(path)=>{
        router.push(path);
    }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={()=>navigation("/")}>Click To visit Home</button>
      <br />
      <br />
      <button onClick={()=>navigation("/about")}>Click To visit About</button>
    </div>
  )
}

export default page;
