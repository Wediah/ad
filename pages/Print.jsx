import React from 'react'
import bills from '../public/billlll.jpg'
import Image from 'next/legacy/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Print() {
  return (
    <>
    <main>
    <Nav/>
    <div className='min-h-screen bg-gray-300 cursor-default'>
        <div className='px-10'>
            <h1 className='text-black text-6xl font-bold text-center pt-40'>Large Format Printing Solutions</h1> <br />
            <h2 className='text-black text-3xl font-semibold text-center pt-20 pb-10'>Solutions We Provide</h2>
        </div>
        <div className='flex flex-wrap gap-5 lg:flex-rol lg:flex-wrap px-10 pb-9'>
            <div className='flex-1  basis-1/4 '>
                <a className="relative block  group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">HOARDING ADVERTISING</p>
                    </div>
                </a>
            </div>
            <div className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">WINDOW GRAPHICS</p>
                    </div>
                </a>
            </div>
            <div className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">OUTDOOR BRANDING</p>
                    </div>
                </a> 
            </div>
            <div className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">VEHICLE GRAPHICS</p>
                    </div>
                </a> 
            </div>
            <div className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">INDOOR BRANDING</p>
                    </div>
                </a> 
            </div>
            <div className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">FLEX FACE LIGHT BOX</p>
                    </div>
                </a> 
            </div>
            <div className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">FLOOR GRAPHICS</p>
                    </div>
                </a> 
            </div>
            <div className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                    <Image className="inset-0 object-cover"
                        src={bills} alt="" width={"100"} height={'100'} layout="responsive" />
                    <div className="relative">
                        <p className="text-md text-black font-semibold text-center">FROSTED VINYL</p>
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

export default Print