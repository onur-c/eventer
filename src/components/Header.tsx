"use client"
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const routes = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "All Events",
    path:"/events"
  }
]

const Header = () => {
  const activePath = usePathname()
  return (
    <header className='w-full  flex justify-between items-center h-16 p-4 bg-[#3f3250] text-white border-solid border-b-[1px] border-white/20'>
        <Link href={"/"} className='font-bold hover:opacity-80 transition'>EVENT<span className='text-accent'>ER</span></Link>
        <div className='flex gap-2'>
        {
          routes.map((route,idx)=> {
            return <Link className={clsx("text-white  transition")} href={route.path} key={idx}>{route.name}</Link>
          })
        }
        </div>
    </header>
  )
}

export default Header