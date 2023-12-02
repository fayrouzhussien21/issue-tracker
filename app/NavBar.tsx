import Link from 'next/link'
import React from 'react'
import { IoBug } from "react-icons/io5";
const NavBar = () => {
    const Links=[
        {
            href:'/',
            title:'Dashboard'
        },
        {
            href:'/issues',
            title:'issues'
        }
    ]
  return (
    <nav className='border-solid border-y-2 border-gray-600 flex space-x-6 align-middle mb-6'>
        <Link href='/' className='p-2'><IoBug /></Link>
        <ul className='space-x-6 flex p-1'>
            {
                Links.map(link=><Link className='text-zinc-500 hover:text-zinc-800 transition-colors' key={link.href} href={link.href}>{link.title}</Link>)
            }
        </ul>

    </nav>
  )
}

export default NavBar