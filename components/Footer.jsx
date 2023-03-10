import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-500 p-5 cursor-default'>
        <div className='flex text-white text-sm text-center justify-center px-10'>
        Copyright ©2020-2026 AD Portal
        </div>
        <a href="https://myportfolio-beta-rouge.vercel.app/"><div className='hover:text-black text-xs text-center pt-1 text-white flex justify-center cursor-pointer font-mono hover:underline-offset-2 hover:underline '>Built by Emmanuel Wediah</div></a>
    </div>
  )
}

export default Footer