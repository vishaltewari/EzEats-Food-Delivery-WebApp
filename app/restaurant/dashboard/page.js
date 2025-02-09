"use client"
import React from 'react'
import AdminHeader from '@/app/components/Adminheader'
import Addfooditem from '@/app/components/Addfooditem'
import { useState } from 'react'
import Fooditemlist from '@/app/components/Fooditemlist'
const Dashboard = () => {
  const [additem, setadditem] = useState(false)
  return (
    <div>
        <AdminHeader/>
        <button onClick={()=>setadditem(true)} className='mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Add food item</button>
        <button onClick={()=>setadditem(false)} className=' mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Dashboard</button>
        {additem? <Addfooditem setadditem={setadditem}/>:<Fooditemlist/>
        }

    </div>
  )
}

export default Dashboard
