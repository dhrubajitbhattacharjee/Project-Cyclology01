import React, { useState } from 'react'
import '../CSS_Style/Profile.css'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'


export default function Profile(props) {

    const [data, setData] = useState("hi")

    const values = async () => {
        var uuid = 1;
        const response = await fetch(`https://5dc8-202-8-112-230.ngrok.io/profile/${uuid}`)
        const hello = await response.json()

        console.log(hello)
        setData(hello);
    }

    const Check = false;

    return (
        <div className='font-serif text-white mt-32 mb-20'>
            {Check ? <Navbar /> : <Navbar2 />}

            <h1 className='text-center text-5xl mb-4'>Account</h1>

            <div className="xl:ml-96 xl:mr-96 ml-6 mr-8">
                <div className='border border-black container'>
                    <h3 className='mb-2 mt-3 xl:ml-44 ml-20 text-xl'>Profile Details</h3>
                    <hr />
                    <div class="grid grid-cols-3 gap-20 xl:ml-40 md:ml-20 ml-4 text-lg">
                        <div class="">
                            <h2 className='m' style={{ whiteSpace: 'nowrap' }}>Full Name</h2>
                            <h2 className='m'>Mobile Number</h2>
                            <h2 className='m' style={{ whiteSpace: 'nowrap' }}>Email ID</h2>
                            <h2 className='m'>Password</h2>
                            <h2 className='m' style={{ whiteSpace: 'nowrap' }}>Blood Group</h2>
                            <h2 className='m'>Gender</h2>
                            <h2 className='m' style={{ whiteSpace: 'nowrap' }}>Age</h2>
                            <h2 className='m'>Date of Birth</h2>
                        </div>
                        <div class="col-span-2 mr-40">
                            <h2 className='m'> {data.fname + " " + data.lname}</h2>
                            <h2 className='m'>{data.phone_number}</h2>
                            <h2 className='m'>{data.email}</h2>
                            <h2 className='m'>{data.password}</h2>
                            <h2 className='m'>{data.blood_group}</h2>
                            <h2 className='m'>{data.gender}</h2>
                            <h2 className='m'>{data.age}</h2>
                            <h2 className='m'>{data.date_of_birth}</h2>
                        </div>
                    </div>

                    <button onClick={values} className='btn bg-orange-600 py-2 xl:px-40 px-6 xl:ml-40 ml-0 mb-8 text-lg text-white'>Edit</button>
                </div>
            </div>
        </div >
    )
}
