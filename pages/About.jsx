import React from 'react'
import { Element } from 'react-scroll'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function About() {
  return (
    <Element id='about' name='about'>
        <>
            <Nav/>
            <main>
                <div className='bg-gray-300 min-h-screen'>
                    <div className='px-10'>
                        <h1 className='text-black text-6xl font-bold text-center pt-40'>About Us</h1> <br />
                        <h2 className='text-black text-2xl font-semibold text-center pt-20 pb-2'>Who We Are</h2>
                        <p className='flex text-gray-500 text-xl text-center justify-center'>We give life to brands. Design a unique voice for them. Position them on the market in a way that they attract the right amount of attention.</p> 

                        <div className='flex flex-wrap gap-5 lg:flex-rol lg:flex-wrap pt-20'>
                            <div className='text-center p-10 my-10 flex-1 cursor-pointer hover:shadow-xl'>
                                <h1 className='text-6xl font-bold text-black'>100</h1> <br />
                                <div className='font-semibold text-gray-500'>Happy Clients</div>
                            </div>
                            <div className='text-center p-10 my-10 flex-1 cursor-pointer hover:shadow-xl'>
                                <h1 className='text-6xl font-bold text-black'>300</h1> <br />
                                <div className='font-semibold text-gray-500'>Designs</div>
                            </div>
                            <div className='text-center p-10 my-10 flex-1 cursor-pointer hover:shadow-xl'>
                                <h1 className='text-6xl font-bold text-black'>500</h1> <br />
                                <div className='font-semibold text-gray-500'>Projects</div>
                            </div>
                        </div>

                        <h1 className='text-black text-6xl font-bold text-center pt-10'>Reviews</h1> <br />
                        <h2 className='text-black text-2xl font-semibold text-center pt-10 pb-2'>What Our Customers Have To Say About Us</h2>

                        <div>
                            
                        </div>

                    </div>
                </div>
                <Footer/>
            </main>
        </>
    </Element>
  )
}

export default About