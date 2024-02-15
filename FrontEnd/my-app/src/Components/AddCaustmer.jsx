import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCaustmer = () => {
  const navigate = useNavigate();
  const [caustmer, setCaustmer] = useState({
    fristName: "",
    lastName: "",
    street: "",
    address: "",
    city: "",
    state: "",
    email: "",
    phone: ""
  })
  const handile = (e) => {
    setCaustmer({ ...caustmer, [e.target.name]: e.target.value })

  }
  const postData = (e) => {
    e.preventDefault()
    console.log(caustmer)
    try {
      axios.post("http://localhost:8080/registration" + caustmer)
      navigate("/getAllCaustmer")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-white mt-10">
        <div className="container mx-auto my-4 px-4 lg:px-20">

          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold  text-5xl">Create Customer</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="First Name" name='firstName' value={caustmer.fristName} onChange={handile} />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Last Name" name='lastName' value={caustmer.lastName} onChange={handile} />

              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Street" name='street' value={caustmer.street} onChange={handile} />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Address" name='address' value={caustmer.address} onChange={handile} />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="City" name='city' value={caustmer.city} onChange={handile} />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="State" name='state' value={caustmer.state} onChange={handile} />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email" placeholder="Email" name='email' value={caustmer.email} onChange={handile} />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number" placeholder="Phone" name='phone' value={caustmer.phone} onChange={handile} />
            </div>

            <div className="my-2 w-1/2 lg:w-1/4 pt-5">
              <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline" onClick={postData}>
                Sumbit
              </button>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default AddCaustmer
