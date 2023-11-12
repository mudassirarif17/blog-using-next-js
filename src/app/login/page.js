"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
      <br />
      <br />
      <Link href={"/login/loginstudent"}>Go To Login Student</Link>
      <br />
      <Link href={"/login/loginteacher"}>Go To Login Teacher</Link>
    </div>
  )
}

export default page;
