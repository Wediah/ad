import React from 'react'
import { MdOutlineRequestQuote } from 'react-icons/md'
import { BiPhoneCall } from 'react-icons/bi'
import { useRouter } from 'next/router'

function Landing() {

    const router = useRouter()

  return (
    <div className=' min-h-screen pb-48  bg-gray-200 pt-48 px-5'>
        <div className='flex justify-center items-center text-center'>
            
        </div>
        <div className='flex flex-row object-center items-center justify-center divide-x-4 divide-gray-600 pt-2'>
            <div className='text-gray-600 px-2 font-semibold  text-center text-lg '>DESIGN</div> 
            <div className='text-gray-600 px-2 font-semibold  text-center text-lg'>PRINT</div> 
            <div className='text-gray-600 font-semibold px-2 text-center text-lg'>SIGNAGE</div>
            <div className='text-gray-600 font-semibold px-2 text-center text-lg'>BRANDING</div>
        </div>
        <div className='flex flex-row object-center items-center justify-center gap-8 p-10'>
            <div><button type='button' onClick={() => router.push('/Contact')} className='text-black bg-gray-500 p-2 font-bold text-md rounded-md flex'><MdOutlineRequestQuote className='text-2xl align-middle mr-2'/>Get Quotes</button></div>
            <div><button type='button' onClick={() => router.push('/Contact')} className='text-black bg-gray-500 p-2 font-bold text-md rounded-md flex'><BiPhoneCall className='text-2xl align-middle mr-2'/>Get Quotes</button></div>
        </div>
    </div>
  )
}

export default Landing;