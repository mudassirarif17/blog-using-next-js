import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li><Link href="studentlist/1">Mudassir</Link></li>
        <li><Link href="studentlist/2">Arif</Link></li>
        <li><Link href="studentlist/3">Farah</Link></li>
        <li><Link href="studentlist/4">A Ahad</Link></li>
        <li><Link href="studentlist/5">Fozia</Link></li>
      </ul>
    </div>
  )
}

export default page
