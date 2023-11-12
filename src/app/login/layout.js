"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import "./login.css"
const layout = ({children}) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div>
      {
        pathName !== "/login/loginteacher"?
        <div className="navbar">
          <div className="logo">
            <h4>Login Navbar</h4>
          </div>
        <ul className="login-menu">
          <li><Link href="/login">Main Login</Link></li>
          <li><Link href="/login/loginteacher">Teacher Login</Link></li>
          <li><Link href="/login/loginstudent">Student Login</Link></li>
        </ul>
        </div>
        :null
      }
      
      {children}
    </div>
  )
}

export default layout
