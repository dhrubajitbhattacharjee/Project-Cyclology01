// import React from 'react'
// import Footer from '../Components/Footer'
// import Navbar from '../Components/Navbar'
// import person from '../images/person-circle.svg'
// import scoreBoardImg from '../images/scoreboard.jpg'
// import '../CSS_Style/Event.css'

// import { Link } from "react-router-dom";
// import { useHistory, useParams } from "react-router-dom";
// import useFetch from "./useFetch";


// function EventDetails(props) {

//     const { uuid } = useParams();
//     const { data: blog, error, isPending } = useFetch('http://localhost:3000/blogs/' + uuid);
//     const history = useHistory();

//     const handleClick = () => {
//         fetch('http://localhost:3000/blogs/' + blog.uuid, {
//             method: "DELETE"
//         }).then(() => {
//             console.log('Succesfull deleted.')
//             history.push('/')
//         })
//     }

//     return (
//         <div className='bg-gray-800'>
//             <Navbar />
//             <div id='imgnew'>
//                 <div className='pr-heading name font-serif'>
//                     {/* <h1><span>RIDE </span><span className='font-serif text-white'> EXPLORE </span><span className='font-serif text-white'> INSPIRE</span></h1> */}
//                     {/* <p className='details font-serif'><h2>WITH <span className='text-blue-[#1814ff] font-bold'>CYCLOLOGY</span></h2></p> */}
//                     {/* <div className='pr-btns'>
//                         <Link to='/login' className='pr-btn font-serif hover:animate-bounce'>JOIN US</Link>
//                     </div> */}
//                     <h1 className='text-6xl font-bold mb-2'>🏆1. Coming Soon...</h1>
//                     <h2 className='text-6xl font-bold mb-2'>🏆2. Coming Soon...</h2>
//                     <h3 className='text-4xl font-bold text-white'>🏆3. Coming Soon...</h3>
//                 </div>
//             </div>
//             <div>
//                 <section className="text-white body-font font-serif">
//                     <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//                         <div class="col-lg-6 col-md-6 col-sm-12 p-0 ml-0 md:ml-20">
//                             <h2 class="display-3 w-100 text-center my-3 font-bold text-violet-700" style={{ fontFamily: 'Lobster' }}>Scoreboard</h2>
//                             <table class="border-3 border-gray-500 w-100 table shadow-2xl m-0 rounded-2xl">
//                                 <thead className='text-white'>
//                                     <tr>
//                                         <th scope="col" className='text-white'>S. No</th>
//                                         <th scope="col">Name</th>
//                                         <th scope="col">User ID</th>
//                                         <th scope="col">Total Distance(K.M.)</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className='text-white'>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">1</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>{props.person}</span></Link></td>
//                                         <td>{props.uuid}</td>
//                                         <td>{props.name}</td>
//                                         <td>{props.tdistance}</td>
//                                     </tr>
//                                     {/* <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">2</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">3</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">4</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">5</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">6</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">7</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">8</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">9</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">10</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">11</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">12</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">13</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">14</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">15</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">16</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">17</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">18</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">19</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr>
//                                     <tr className='hover:bg-stone-50 hover:text-black'>
//                                         <th scope="row" class="text-nowrap text-xl">20</th>
//                                         <td><Link to="#!" className='flex'><img src={person} alt='' /><span className='ml-2'>person</span></Link></td>
//                                         <td>6634160</td>
//                                         <td>100</td>
//                                     </tr> */}
//                                 </tbody>
//                             </table>
//                         </div>
//                         <Link to="/event" class="relative mt-6">
//                             <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mt-4 ml-0 md:ml-20 new">
//                                 <img className="object-cover object-center rounded" alt="hero" src={scoreBoardImg} style={{ height: 'auto', width: '100%' }} />
//                                 <div className='overlay'>
//                                     <div className='text-center content'>
//                                         <h4 className='text-black text-2xl font-bold md:text-2xl' style={{ fontFamily: 'Sofia' }}>hey,<br /> Check it out Scoreboard</h4>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                 </section>
//             </div>
//             <Footer />
//         </div>
//     )
// }

// export default EventDetails