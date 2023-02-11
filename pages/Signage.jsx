import React from 'react'
import bills from '../public/billlll.jpg'
import Image from 'next/legacy/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Signage() {
  return (
    <>
    <main>
    <Nav/>
    <div className='min-h-screen bg-gray-300 cursor-default'>
        <div className='px-10'>
            <h1 className='text-black text-6xl font-bold text-center pt-40'>Signage Solutions</h1> <br />
            <h2 className='text-black text-3xl font-semibold text-center pt-20 pb-10'>Solutions We Provide</h2>
        </div>
        <div className='flex flex-wrap gap-5 lg:flex-rol lg:flex-wrap px-10 pb-9'>
            <div className='flex-1  basis-1/4 '>
                <a className="relative block  group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">FASCIA SIGNS</p>
                    </div>
                </a>
            </div>
            <div className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">ROOF TOP SIGNS</p>
                    </div>
                </a>
            </div>
            <div className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">DIRECTIONAL SIGNS</p>
                    </div>
                </a> 
            </div>
            <div className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">PYLON SIGNS & TOTEMS</p>
                    </div>
                </a> 
            </div>
            <div className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">MONUMENT SIGNS</p>
                    </div>
                </a> 
            </div>
            <div className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">TRAFFIC SIGNS</p>
                    </div>
                </a> 
            </div>
            <div className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">CHANNELUME LETTERS</p>
                    </div>
                </a> 
            </div>
            <div className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">3D SIGNAGE</p>
                    </div>
                </a> 
            </div>
            <div className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">STAINLESS STEEL SIGNS</p>
                    </div>
                </a> 
            </div>
            <div className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">LIGHT BOXES</p>
                    </div>
                </a> 
            </div>
                

        </div>
    </div>
    <Footer/>
    </main>
    </>
  )
}

export default Signage