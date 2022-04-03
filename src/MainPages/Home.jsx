import React, { useState } from 'react'

import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Slick from '../Components/Slick'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel'

import '../CSS_Style/Home.css'
import '../CSS_Style/slick.css'
import Navbar2 from '../Components/Navbar2'


function Home() {

    const [statusNo, setStatusNo] = useState();

    const values = async () => {
        const res = await fetch("https://5dc8-202-8-112-230.ngrok.io/login?email=sb@gmail.com&password=12345")

        console.log(res)
        // setData(hello);
        setStatusNo(res.status);
        // console.log(Check)
    }
    console.log(statusNo)

    return (
        <div>
            {statusNo == 200 ? <Navbar2 /> : <Navbar />}
            <Header />
            <button onClick={values} className='mt-20 btn bg-orange-600 py-2 xl:px-40 px-6 xl:ml-40 ml-0 mb-8 text-lg text-white'>Edit</button>
            <Slick />
            <Carousel />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home