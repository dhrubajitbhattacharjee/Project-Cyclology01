import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import person from '../images/person-circle.svg'


function WeeklyBoard() {
    return (
        <div className='bg-gray-800'>
            <Navbar />
            <section className="text-white body-font font-serif">
                <div className="container mx-auto flex px-5 py-24 md:flex-row  items-center">
                    <div class="col-lg-6 col-md-6 col-sm-12 p-0 ml-0 md:ml-20">
                        <h2 class="display-3 w-100 text-center my-3 font-bold text-violet-700" style={{ fontFamily: 'Lobster' }}>Scoreboard</h2>
                        <table class="border-3 border-gray-500 w-100 table shadow-2xl m-0 rounded-2xl">
                            <thead className='text-white'>
                                <tr>
                                    <th scope="col" className='text-white'>S. No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Athelete ID</th>
                                    <th scope="col">Total Distance(K.M.)</th>
                                </tr>
                            </thead>
                            <tbody className='text-white'>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">1</th>
                                    {/* <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>{props.person}</span></a></td> */}
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    {/* <td>{props.id}</td>
                                        <td>{props.distance}</td> */}
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">2</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">3</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">4</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">5</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">6</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">7</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">8</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">9</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">10</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">11</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">12</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">13</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">14</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">15</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">16</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">17</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">18</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">19</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                                <tr className='hover:bg-stone-50 hover:text-black'>
                                    <th scope="row" class="text-nowrap text-xl">20</th>
                                    <td><a href="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></a></td>
                                    <td>6634160</td>
                                    <td>100</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default WeeklyBoard