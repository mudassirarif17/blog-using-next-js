import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>All lectures</h1>
      <Link href="study/lecture/1">Lecture 1</Link>
      <br />
      <br />
      <Link href="study/lecture/2">Lecture 2</Link>
    </div>
  )
}

export default page
