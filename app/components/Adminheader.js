"use client"
import Link from 'next/link'
import React from 'react'
import { useState,useEffect } from 'react'
import {  useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
const AdminHeader = () => {
  const [details, setdetails] = useState()
  const router=useRouter();
  const pathname=usePathname()
  useEffect(() => {
    let data=localStorage.getItem('restaurantuser')
    if(!data && pathname==='/restaurant/dashboard'){
      router.push('/restaurant')
    }else if(data&&pathname=='/restaurant'){
      router.push('/restaurant/dashboard')

    }
    else{
      setdetails(JSON.parse(data))
    }
  
  },[])
  const logout=()=>{
    localStorage.removeItem('restaurantuser')
    router.push('/restaurant')
  }
  return (
    <>
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center ">
        <img src="/logo.gif" width={35} height={35} className='rounded-lg' alt="" srcSet="" />
        <ul className='flex list-none justify-between gap-5'>
            <li className='p-[5px]'>
                <Link className='no-underline' href="/">Home</Link>
            </li>
            
              {
                details&&details.name?
                <>
                <li className='p-[5px]'> <Link className='no-underline' href="/profile">Profile</Link> </li>
                <li className='p-[5px]'> <button onClick={logout} className='border rounded-lg'>Logout</button> </li>
                </>
                : <li className='p-[5px]'>
                <Link className='no-underline' href="/deliverypartner">Delivery Partner</Link>
            </li>
              }
               
           
           
        </ul>       
      </div>
    </>
  )
}

export default AdminHeader
