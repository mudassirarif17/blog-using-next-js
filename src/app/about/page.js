"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();

  return (
    <div>
      <h1>About</h1>
      <button onClick={()=>router.push("/")}>Click to visit Home</button>
      <br />
      <br />
      <button onClick={()=>router.push("/login")}>Click to visit Login</button>
    </div>
  )
}

export default page
