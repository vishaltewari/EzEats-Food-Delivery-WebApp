import React from 'react'
import { useState } from 'react'
const Addfooditem = (props) => {
    const [name, setname] = useState("")
    const [price, setprice] = useState("")
    const [path, setpath] = useState("")
    const [description, setdescription] = useState("")
    const [error, seterror] = useState(false)
    const handleadditem = async () => {
        //   console.log(name,price,path,description)
        const restaurantdata = JSON.parse(localStorage.getItem('restaurantuser')) //to fetch resaurant id from localstorage
        if (!name || !price || !path || !description) {
            seterror(true)
            return false
        }
        else {
            seterror(false)
        }
        let resto_id
        if (restaurantdata) {
            resto_id = restaurantdata._id
        }
        let response = await fetch('/api/restaurant/foods', {
            method: 'POST', body: JSON.stringify({ name, price, img_path: path, description, resto_id })
        })
        response = await response.json()
        if (response) {
            alert("Food Item added")
            setname("")
            setprice("")
            setpath("")
            setdescription("")
            props.setadditem(false)
        }
        else {
            alert("Food Item not added")
        }
    }

    return (
        <div className='container text-center'>
            <h1 className='text-xl font-bold '>Add your new food item</h1>
            <div className='m-[10px]'>

                <input className='h-[30px] p-[10px] rounded-lg w-[30%] hover:scale-[105%]' onChange={(e) => { setname(e.target.value) }} value={name} type="text" placeholder='Enter food name' />
            </div>
            {error && !name && <div className='text-red-500 font-bold'>This  field is mandatory</div>}
            <div className='m-[10px]'>

                <input className='h-[30px] p-[10px] rounded-lg w-[30%] hover:scale-[105%]' onChange={(e) => { setprice(e.target.value) }} value={price} type="text" placeholder='Enter price' />
            </div>
            {error && !price && <div className='text-red-500 font-bold'>This  field is mandatory</div>}
            <div className='m-[10px]'>

                <input className='h-[30px] p-[10px] rounded-lg w-[30%] hover:scale-[105%]' onChange={(e) => { setpath(e.target.value) }} value={path} type="text" placeholder='Enter image path' />
            </div>
            {error && !path && <div className='text-red-500 font-bold'>This  field is mandatory</div>}
            <div className='m-[10px]'>

                <input className='h-[30px] p-[10px] rounded-lg w-[30%] hover:scale-[105%]' onChange={(e) => { setdescription(e.target.value) }} value={description} type="text" placeholder='Enter its description' />
            </div>
            {error && !description && <div className='text-red-500 font-bold'>This  field is mandatory</div>}
            <div className='m-[10px]'>

                <button onClick={handleadditem} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span class=" text-black relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#f5f5dc] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                        Add
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Addfooditem
