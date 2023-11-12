import React from 'react'

const page = ({params}) => {
    // console.log(params)
  return (
    <div>
      <h2>Student Details</h2>
      <h2>Id : {params.student}</h2>
    </div>
  )
}

export default page
