import React, {  useEffect, useState, useRef  } from "react"
import { Transition } from '@headlessui/react'
import Image from "next/legacy/image";
import { useRouter } from 'next/router'


function Nav() {

    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter()
    

  return (
    <nav className="fixed w-full z-20 bg-white">
            <div className="w-full">
                <div className="flex items-center h-20 w-full">
                    <div className="flex items-center  mx-20  justify-between w-full">
                        <div className="flex justify-center items-center flex-shrink-0 ">
                            
                            <button
                                type='button' onClick={() => router.push('/')}
                            >
                              <div className="  cursor-pointer -ml-12">
                                
                                <h1 className=" font-bold text-sm cursor-pointer ml-1">
										<span className="text-black">AD Portal</span>
									</h1>
                                </div> 
                                
                            </button>
                            
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4 ">
                                
                                <button
                                    type='button' onClick={() => router.push('/')}
                                    className="cursor-pointer text-black   px-3 py-2 text-md font-medium "
                                >
                                    Home
                                </button>
                                
                                <button
                                    type='button' onClick={() => router.push('/Services')}
                                    className="cursor-pointer  text-black  px-3 py-2 text-md font-medium "
                                >
                                   Products & Services
                                </button>
                                <button
                                    type='button' onClick={() => router.push('/Projects')}
                                    className="cursor-pointer text-black  px-3 py-2 text-md font-medium "
                                >
                                    Projects
                                </button>
                                <button
                                    type='button' onClick={() => router.push('/About')}
                                    className="cursor-pointer text-black  px-3 py-2 text-md font-medium "
                                >
                                    About Us
                                </button>
                                <button
                                    type='button' onClick={() => router.push('/Contact')}
                                    className="cursor-pointer  text-black px-3 py-2 text-md font-medium "
                                >
                                    Contact Us
                                </button>

                            </div>
                            
                        </div>
                    </div>
                    <div className="mr-10 flex md:hidden ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className=" inline-flex items-center justify-center p-2 rounded-md text-black   font-bold hover:text-gray-600 focus:outline-none "
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        > 
                        
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>

                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div
                            ref={ref}
                            className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3  "
                        >   
                            
                            <button
                                type='button' onClick={() => router.push('/')}
                                className="cursor-pointer text-black block px-3 py-2 text-base font-medium text-center"
                            >
                                Home
                            </button>
                            <button
                                type='button' onClick={() => router.push('/Services')}
                                className="cursor-pointer text-black block px-3 py-2 text-base font-medium text-center"
                            >
                                Product & Services
                            </button>
                            <button
                                    type='button' onClick={() => router.push('/Projects')}
                                    className="cursor-pointer text-black block px-3 py-2  text-base font-medium text-center "
                                >
                                    Projects
                                </button>
                            <button
                                type='button' onClick={() => router.push('/Projects')}
                                className="cursor-pointer text-black  block px-3 py-2 text-base font-medium text-center"
                            >
                                About Us
                            </button>
                            
                            <button
                                type='button' onClick={() => router.push('/Contact')}
                                className="cursor-pointer  text-black block px-3 py-2 text-base font-medium text-center"
                            >
                                Contact Us
                            </button>
                            
                        </div>
                    </div>
                )}
            </Transition>


            
        </nav>
  )
}

export default Nav