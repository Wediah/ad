import React from 'react'
import Image from 'next/legacy/image'
import design from '../public/illustration.png'
import plot from '../public/plotter.png'
import bill from '../public/billboard.png'
import cup from '../public/cup.png'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'


function Services() {


    const router = useRouter()

  return (
    <>
        <main>
            <Nav/>
            <div className='min-h-screen bg-gray-300 cursor-default'>
                <div className='px-10'>
                    <h1 className='text-black text-6xl font-bold text-center pt-40'>Our Services</h1> <br />
                    <h2 className='text-black text-2xl font-semibold text-center pt-20 pb-2'>What we do?</h2>
                    <p className='flex text-gray-500 text-xl text-center justify-center'>We give life to brands. Design a unique voice for them. Position them on the market in a way that they attract the right amount of attention.</p> 
                    <p className='flex text-gray-500 text-xl text-center justify-center'>We are a full-service design company that provides top-tier solutions for businesses of all sizes.</p>
                </div>
                <div className='flex flex-wrap gap-5 lg:flex-rol lg:flex-wrap px-10'>
                    
                    <div className='group/edit text-center p-10 my-10 flex-1 cursor-pointer hover:shadow-2xl rounded-md'>
                        <button type='button' onClick={() => router.push('/Design')}  >
                        <Image  
                        src={design}
                        alt=""
                        width={120}
                        height={110}
                        className="mx-auto group-hover/edit:-translate-y-1 duration-300 delay-150" 
                        />
                        <h1 className='text-black font-bold text-3xl pt-2' >Design</h1>
                        <p className='flex text-gray-500 text-xl text-center justify-center pt-5' >Content writing? Artwork production? We got you covered with all the creative works!</p>
                        </button>
                    </div>
                    
                    
                    <div className='group/edit text-center p-10 my-10 flex-1 cursor-pointer hover:shadow-2xl rounded-md'>
                        <button type='button' onClick={() => router.push('/Print')} >
                        <Image  
                        src={plot}
                        alt=""
                        width={120}
                        height={110}
                        className="mx-auto group-hover/edit:-translate-y-1 duration-300 delay-150" 
                        />
                        <h1 className='text-black font-bold text-3xl pt-2' >Print</h1>
                        <p className='flex text-gray-500 text-xl text-center justify-center pt-5' >Content writing? Artwork production? We got you covered with all the creative works!</p>
                        </button>
                    </div>
                    
                    
                    <div className='group/edit text-center p-10 my-10 flex-1 cursor-pointer hover:shadow-2xl rounded-md'>
                        <button type='button' onClick={() => router.push('/Signage')} >
                        <Image  
                        src={bill}
                        alt=""
                        width={120}
                        height={110}
                        className="mx-auto group-hover/edit:-translate-y-1 duration-300 delay-150" 
                        />
                        <h1 className='text-black font-bold text-3xl pt-2' >Signage</h1>
                        <p className='flex text-gray-500 text-xl text-center justify-center pt-5' >Content writing? Artwork production? We got you covered with all the creative works!</p>
                        </button>
                    </div>
                    
                    
                    <div className='group/edit text-center p-10 my-10 flex-1 cursor-pointer hover:shadow-2xl rounded-md'>
                        <button type='button' onClick={() => router.push('/Branding')} >
                        <Image  
                        src={cup}
                        alt=""
                        width={120}
                        height={110}
                        className="mx-auto group-hover/edit:-translate-y-1 duration-300 delay-150" 
                        />
                        <h1 className='text-black font-bold text-3xl' >Branding</h1>
                        <p className='flex text-gray-500 text-xl text-center justify-center pt-5' >Content writing? Artwork production? We got you covered with all the creative works!</p>
                        </button>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </main>
    </>
    
  )
}

export default Services