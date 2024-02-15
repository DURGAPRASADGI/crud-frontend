import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillMinusCircle } from "react-icons/ai"
import { BsFillPencilFill } from "react-icons/bs"
const GetAllCaustemers = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchAll();

  }, [])
  const fetchAll = async () => {
    try {
      await axios.get("http://localhost:8080/getAllCaustmerList").then((res) => setData(res.data))

    } catch (error) {
      console.log(error)
    }

  }
  return (
    <>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">First Name</th>
                    <th scope="col" class="px-6 py-4">Last Name</th>
                    <th scope="col" class="px-6 py-4">Address</th>
                    <th scope="col" class="px-6 py-4">City</th>
                    <th scope="col" class="px-6 py-4">State</th>
                    <th scope="col" class="px-6 py-4">Email</th>
                    <th scope="col" class="px-6 py-4">Phone</th>
                    <th scope="col" class="px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}
                      class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td class="whitespace-nowrap px-6 py-4">{item.fristName}</td>
                      <td
                        class="whitespace-nowrap px-6 py-4">{item.lastName}</td>
                      <td class="whitespace-nowrap px-6 py-4">{item.address}</td>
                      <td class="whitespace-nowrap px-6 py-4">{item.city}</td>
                      <td class="whitespace-nowrap px-6 py-4">{item.state}</td>

                      <td class="whitespace-nowrap px-6 py-4">{item.email}</td>

                      <td class="whitespace-nowrap px-6 py-4">{item.phone}</td>
                      <td class="whitespace-nowrap px-6 py-4 ">
                        <span style={{ display: 'inline-block', marginRight: '10px', cursor: "pointer" }}>
                          <AiFillMinusCircle size={20} style={{ color: 'red' }} />
                        </span>
                        <span style={{ display: 'inline-block', cursor: "pointer" }}>

                          <BsFillPencilFill size={20} />
                        </span>


                      </td>





                    </tr>

                  ))}



                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default GetAllCaustemers
