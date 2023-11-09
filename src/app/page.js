"use client"
import React , {useState} from "react";
import styles from './page.module.css'
import Link from "next/link";


// const InnerComp = ()=>{
//   return(
//     <h1>Inner Component</h1>
//   )
// }

export default function Home() {

  const [name , setName] = useState("Mudassir")
  const apple = (item)=>{
    // alert(item)
    setName("Mudassir Arif")
  }

  return (
    <main >

      <h1>Home Page</h1>
      <Link href="/about">Click to visit About</Link>
      <br />
      <br />
      <Link href="/login">Click to visit login</Link>
      {/* <User name="Mudassir"/> */}


      {/* <h1>Events Function and state {name}</h1> */}
      {/* <button onClick={()=>alert("Hello Next Js")}>Click Me</button> */}
      {/* <button onClick={()=>apple("fruit")}>Agian Click Me</button> */}
      {/* <InnerComp/> */}
      {/* You can also use this like */}
      {/* {InnerComp()} */}
    </main>
  )
}


// Creating a component in parent component
// const User = (props)=>{
//   return(
//     <div>
//       <h1>User Is {props.name}</h1>
//     </div>
//   )
// }