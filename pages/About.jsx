import React from 'react'
import { Element } from 'react-scroll'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

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
                        

                        <Carousel
                        additionalTransfrom={0}
                        arrows={false}
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className="pb-8 pt-5 "
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={true}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            superLargeDesktop: {
                                breakpoint: { max: 4000, min: 3000 },
                                items: 5,
                                partialVisibilityGutter: 30
                              },
                              desktop: {
                                breakpoint: { max: 3000, min: 1024 },
                                items: 3,
                                partialVisibilityGutter: 30
                              },
                              tablet: {
                                breakpoint: { max: 1024, min: 464 },
                                items: 2,
                                partialVisibilityGutter: 30
                              },
                              mobile: {
                                breakpoint: { max: 464, min: 0 },
                                items: 1,
                              }
                        }}
                        rewind={true}
                        rewindWithAnimation={true}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={true}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                        >

                            <div className='group relative cursor-pointer overflow-hidden bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl mx-2  rounded-lg px-10'>
                                <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-600 transition-all duration-300 group-hover:scale-[10]"></span>
                                <div class="relative z-10 mx-auto max-w-md">
                                    <span class="grid h-20 w-20 place-items-center rounded-full bg-black transition-all duration-300 group-hover:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>
                                    </span>
                                    <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h1 >Kofi Kofi, ceo Shell Ghana</h1>
                                        <p>Working with AD Portal has been very fruitful. Creative designs were designed faster </p>
                                    </div>
                                </div>
                            </div>

                            <div className='group relative cursor-pointer overflow-hidden bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl mx-2  rounded-lg px-10'>
                            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-600 transition-all duration-300 group-hover:scale-[10]"></span>
                                <div class="relative z-10 mx-auto max-w-md">
                                    <span class="grid h-20 w-20 place-items-center rounded-full bg-black transition-all duration-300 group-hover:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>
                                    </span>
                                    <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h1 >Kofi Kofi, ceo Shell Ghana</h1>
                                        <p>Working with AD Portal has been very fruitful. Creative designs were designed faster </p>
                                    </div>
                                </div>
                            </div>

                            <div className='group relative cursor-pointer overflow-hidden bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl mx-2  rounded-lg px-10'>
                            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-600 transition-all duration-300 group-hover:scale-[10]"></span>
                                <div class="relative z-10 mx-auto max-w-md">
                                    <span class="grid h-20 w-20 place-items-center rounded-full bg-black transition-all duration-300 group-hover:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>
                                    </span>
                                    <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h1 >Kofi Kofi, ceo Shell Ghana</h1>
                                        <p>Working with AD Portal has been very fruitful. Creative designs were designed faster </p>
                                    </div>
                                </div>
                            </div>

                            <div className='group relative cursor-pointer overflow-hidden bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl mx-2  rounded-lg px-10'>
                            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-600 transition-all duration-300 group-hover:scale-[10]"></span>
                                <div class="relative z-10 mx-auto max-w-md">
                                    <span class="grid h-20 w-20 place-items-center rounded-full bg-black transition-all duration-300 group-hover:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>
                                    </span>
                                    <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h1 >Kofi Kofi, ceo Shell Ghana</h1>
                                        <p>Working with AD Portal has been very fruitful. Creative designs were designed faster </p>
                                    </div>
                                </div>
                            </div>

                            <div className='group relative cursor-pointer overflow-hidden bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl mx-2  rounded-lg px-10'>
                            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-600 transition-all duration-300 group-hover:scale-[10]"></span>
                                <div class="relative z-10 mx-auto max-w-md">
                                    <span class="grid h-20 w-20 place-items-center rounded-full bg-black transition-all duration-300 group-hover:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>
                                    </span>
                                    <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h1 >Kofi Kofi, ceo Shell Ghana</h1>
                                        <p>Working with AD Portal has been very fruitful. Creative designs were designed faster </p>
                                    </div>
                                </div>
                            </div>

                            <div className='group relative cursor-pointer overflow-hidden bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl mx-2  rounded-lg px-10'>
                            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-600 transition-all duration-300 group-hover:scale-[10]"></span>
                                <div class="relative z-10 mx-auto max-w-md">
                                    <span class="grid h-20 w-20 place-items-center rounded-full bg-black transition-all duration-300 group-hover:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>
                                    </span>
                                    <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h1 >Kofi Kofi, ceo Shell Ghana</h1>
                                        <p>Working with AD Portal has been very fruitful. Creative designs were designed faster </p>
                                    </div>
                                </div>
                            </div>

                            <div className='group relative cursor-pointer overflow-hidden bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl mx-2  rounded-lg px-10'>
                            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-600 transition-all duration-300 group-hover:scale-[10]"></span>
                                <div class="relative z-10 mx-auto max-w-md">
                                    <span class="grid h-20 w-20 place-items-center rounded-full bg-black transition-all duration-300 group-hover:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>
                                    </span>
                                    <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h1 >Kofi Kofi, ceo Shell Ghana</h1>
                                        <p>Working with AD Portal has been very fruitful. Creative designs were designed faster </p>
                                    </div>
                                </div>
                            </div>

                            <div className='group relative cursor-pointer overflow-hidden bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl mx-2  rounded-lg px-10'>
                            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-600 transition-all duration-300 group-hover:scale-[10]"></span>
                                <div class="relative z-10 mx-auto max-w-md">
                                    <span class="grid h-20 w-20 place-items-center rounded-full bg-black transition-all duration-300 group-hover:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>
                                    </span>
                                    <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h1 >Kofi Kofi, ceo Shell Ghana</h1>
                                        <p>Working with AD Portal has been very fruitful. Creative designs were designed faster </p>
                                    </div>
                                </div>
                            </div>

                            <div className='group relative cursor-pointer overflow-hidden bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl mx-2  rounded-lg px-10'>
                            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-600 transition-all duration-300 group-hover:scale-[10]"></span>
                                <div class="relative z-10 mx-auto max-w-md">
                                    <span class="grid h-20 w-20 place-items-center rounded-full bg-black transition-all duration-300 group-hover:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>
                                    </span>
                                    <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h1 >Kofi Kofi, ceo Shell Ghana</h1>
                                        <p>Working with AD Portal has been very fruitful. Creative designs were designed faster </p>
                                    </div>
                                </div>
                            </div>

                            <div className='group relative cursor-pointer overflow-hidden bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl mx-2  rounded-lg px-10'>
                            <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-600 transition-all duration-300 group-hover:scale-[10]"></span>
                                <div class="relative z-10 mx-auto max-w-md">
                                    <span class="grid h-20 w-20 place-items-center rounded-full bg-black transition-all duration-300 group-hover:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>
                                    </span>
                                    <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h1 >Kofi Kofi, ceo Shell Ghana</h1>
                                        <p>Working with AD Portal has been very fruitful. Creative designs were designed faster </p>
                                    </div>
                                </div>
                            </div>

                        </Carousel>










                    </div>
                </div>
                <Footer/>
            </main>
        </>
    </Element>
  )
}

export default About