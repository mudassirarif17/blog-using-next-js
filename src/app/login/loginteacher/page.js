import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <h1>LogIn Teacher</h1>
      <br />
      <Link href={"/login"}>Go To Login</Link>
    </div>
  )
}

export default page
