import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <h1>This is About for college</h1>
      <br />
      <br />
      <Link href={"/about"}>Go To About</Link>
    </div>
  )
}

export default page
