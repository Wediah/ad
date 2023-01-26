import Head from 'next/head'
import Image from 'next/legacy/image'
import { Inter } from '@next/font/google'
import Landing from './Landing'
import Services from './Services'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { useRouter } from 'next/router'
import { MdOutlineRequestQuote } from 'react-icons/md'
import { BiPhoneCall } from 'react-icons/bi'
import { react, useEffect} from 'react'
import design from '../public/illustration.png'
import plot from '../public/plotter.png'
import bill from '../public/billboard.png'
import cup from '../public/cup.png'
import bills from '../public/billlll.jpg'
import logo from '../public/Layer 4.png'
import Script from 'next/script'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {FiInstagram, FiTwitter} from 'react-icons/fi'
import {AiOutlineLinkedin, AiOutlineWhatsApp} from 'react-icons/ai'
import {BiArrowToTop} from 'react-icons/bi'
import { Link } from "react-scroll"
import { Element } from 'react-scroll'

export default function Index() {
  useEffect(()=>{
    AOS.init({offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      once:true});
  },[])

  const router = useRouter()


  return (
    <>
      <Head>
        <title>AD Portal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Layer 4.png" />
      </Head>
      <main className='bg-gray-200'>
        <Nav/>
        <Element id='home' name='home'>
        <div className=' min-h-screen pb-48  bg-gray-200 pt-48 px-5'>
        <div className='flex justify-center '>
            <Image src={logo} alt="" width={"400"}  height={'200'} layout='fixed'/>
        </div>
        <div className='flex flex-row object-center items-center justify-center divide-x-4 pt-2 divide-yellow-600'>
            <div className='text-gray-600 px-2 font-semibold  text-center text-lg '>DESIGN</div> 
            <div className='text-gray-600 px-2 font-semibold  text-center text-lg'>PRINT</div> 
            <div className='text-gray-600 font-semibold px-2 text-center text-lg'>SIGNAGE</div>
            <div className='text-gray-600 font-semibold px-2 text-center text-lg'>BRANDING</div>
        </div>
        <div className='flex flex-row object-center items-center justify-center gap-8 p-10'>
            <div className='align-middle'><button type='button' onClick={() => router.push('/Contact')} className='text-black bg-gray-500 p-2 font-bold text-lg rounded-md flex items-center justify-center'><MdOutlineRequestQuote className='text-3xl justify-center mr-1'/>Get Quotes</button></div>
            <div><button type='button' onClick={() => router.push('/Contact')} className='text-black bg-gray-500 p-2 font-bold text-lg rounded-md flex  items-center justify-center'><BiPhoneCall className='text-3xl justify-center  mr-1'/>Get Quotes</button></div>
        </div>
        </div>
        </Element>


        <div className='min-h-screen bg-gray-300 '>
                <div data-aos='fade-up' className='px-10'>
                    <h1 className='text-black text-6xl font-bold text-center pt-40'>Our Services</h1> <br />
                    <h2 className='text-black text-2xl font-semibold text-center pt-20 pb-2'>What we do?</h2>
                    <p className='flex text-gray-500 text-xl text-center justify-center'>We give life to brands. Design a unique voice for them. Position them on the market in a way that they attract the right amount of attention.</p> 
                    <p className='flex text-gray-500 text-xl text-center justify-center'>We are a full-service design company that provides top-tier solutions for businesses of all sizes.</p>
                </div>
                <div className='flex flex-wrap gap-5 lg:flex-rol lg:flex-wrap px-10'>
                    
                    <div data-aos='fade-up' className='group/edit text-center p-10 my-10 flex-1 cursor-pointer'>
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
                    
                    
                    <div data-aos='fade-up' className='group/edit text-center p-10 my-10 flex-1 cursor-pointer'>
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
                    
                    
                    <div data-aos='fade-up' className='group/edit text-center p-10 my-10 flex-1 cursor-pointer'>
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
                    
                    
                    <div data-aos='fade-up' className='group/edit text-center p-10 my-10 flex-1 cursor-pointer'>
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

            <div className='min-h-screen bg-gray-300 '>
            <div data-aos='fade-up' className='px-10'>
              <h1 className='text-black text-6xl font-bold text-center pt-40'>Our Projects</h1> <br />
              <h2 className='text-black text-3xl font-semibold text-center pt-20 pb-10'>Some of Our Prestigious Clients</h2>
            </div>
            <div data-aos='fade-up' className='flex flex-wrap gap-5 lg:flex-rol lg:flex-wrap px-10'>
              <div data-aos='fade-up' className='flex-1  basis-1/4 '>
                <a className="relative block  group" href="##">
                  <Image className="inset-0 object-cover group-hover:blur-sm"
                  src={bills} alt="" width={"100"}  height={'100'} layout="responsive" />
                  <div className="relative p-10">
                    <div className="-mt-60">
                      <div className="transition-all transform 
                        translate-y-8 opacity-0 
                        group-hover:opacity-100 
                        group-hover:translate-y-0">
                        <div className="p-2">
                          <p className="text-xl text-white">VITE Banking Ghana</p>
                          <p className='text-xl text-white font-bold'>Branding and Printing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div data-aos='fade-up' className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                  <Image className="inset-0 object-cover group-hover:blur-sm"
                  src={bills} alt="" width={"100"}  height={'100'} layout="responsive" />
                  <div className="relative p-10">
                    <div className="-mt-60">
                      <div className="transition-all transform 
                        translate-y-8 opacity-0 
                        group-hover:opacity-100 
                        group-hover:translate-y-0">
                        <div className="p-2">
                          <p className="text-xl text-white">VITE Banking Ghana</p>
                          <p className='text-xl text-white font-bold'>Branding and Printing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div data-aos='fade-up' className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                <Image className="inset-0 object-cover group-hover:blur-sm"
                src={bills} alt="" width={"100"}  height={'100'} layout="responsive" />
                <div className="relative p-10">
                  <div className="-mt-60">
                    <div className="transition-all transform 
                      translate-y-8 opacity-0 
                      group-hover:opacity-100 
                      group-hover:translate-y-0">
                      <div className="p-2">
                        <p className="text-xl text-white">VITE Banking Ghana</p>
                        <p className='text-xl text-white font-bold'>Branding and Printing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              </div>
              <div data-aos='fade-up' className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                <Image className="inset-0 object-cover group-hover:blur-sm"
                src={bills} alt="" width={"100"}  height={'100'} layout="responsive" />
                <div className="relative p-10">
                  <div className="-mt-60">
                    <div className="transition-all transform 
                      translate-y-8 opacity-0 
                      group-hover:opacity-100 
                      group-hover:translate-y-0">
                      <div className="p-2">
                        <p className="text-xl text-white">VITE Banking Ghana</p>
                        <p className='text-xl text-white font-bold'>Branding and Printing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              </div>
              <div data-aos='fade-up' className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                <Image className="inset-0 object-cover group-hover:blur-sm"
                src={bills} alt="" width={"100"}  height={'100'} layout="responsive" />
                <div className="relative p-10">
                  <div className="-mt-60">
                    <div className="transition-all transform 
                      translate-y-8 opacity-0 
                      group-hover:opacity-100 
                      group-hover:translate-y-0">
                      <div className="p-2">
                        <p className="text-xl text-white">VITE Banking Ghana</p>
                        <p className='text-xl text-white font-bold'>Branding and Printing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              </div>
              <div data-aos='fade-up' className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                <Image className="inset-0 object-cover group-hover:blur-sm"
                src={bills} alt="" width={"100"}  height={'100'} layout="responsive" />
                <div className="relative p-10">
                  <div className="-mt-60">
                    <div className="transition-all transform 
                      translate-y-8 opacity-0 
                      group-hover:opacity-100 
                      group-hover:translate-y-0">
                      <div className="p-2">
                        <p className="text-xl text-white">VITE Banking Ghana</p>
                        <p className='text-xl text-white font-bold'>Branding and Printing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              </div>
              <div data-aos='fade-up' className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                <Image className="inset-0 object-cover group-hover:blur-sm"
                src={bills} alt="" width={"100"}  height={'100'} layout="responsive" />
                <div className="relative p-10">
                  <div className="-mt-60">
                    <div className="transition-all transform 
                      translate-y-8 opacity-0 
                      group-hover:opacity-100 
                      group-hover:translate-y-0">
                      <div className="p-2">
                        <p className="text-xl text-white">VITE Banking Ghana</p>
                        <p className='text-xl text-white font-bold'>Branding and Printing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              </div>
              <div data-aos='fade-up' className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                <Image className="inset-0 object-cover group-hover:blur-sm"
                src={bills} alt="" width={"100"}  height={'100'} layout="responsive" />
                <div className="relative p-10">
                  <div className="-mt-60">
                    <div className="transition-all transform 
                      translate-y-8 opacity-0 
                      group-hover:opacity-100 
                      group-hover:translate-y-0">
                      <div className="p-2">
                        <p className="text-xl text-white">VITE Banking Ghana</p>
                        <p className='text-xl text-white font-bold'>Branding and Printing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              </div>
              <div data-aos='fade-up' className='flex-1 basis-1/4'>
                <a className="relative block group" href="##">
                <Image className="inset-0 object-cover group-hover:blur-sm"
                src={bills} alt="" width={"100"}  height={'100'} layout="responsive" />
                <div className="relative p-10">
                  <div className="-mt-60">
                    <div className="transition-all transform 
                      translate-y-8 opacity-0 
                      group-hover:opacity-100 
                      group-hover:translate-y-0">
                      <div className="p-2">
                        <p className="text-xl text-white">VITE Banking Ghana</p>
                        <p className='text-xl text-white font-bold'>Branding and Printing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              </div>
              
            </div>
        </div>

        <div className='bg-gray-300 min-h-screen'>
                    <div className='px-10'>
                        <h1 data-aos='fade-up' className='text-black text-6xl font-bold text-center pt-40'>About Us</h1> <br />
                        <h2 data-aos='fade-up' className='text-black text-2xl font-semibold text-center pt-20 pb-2'>Who We Are</h2>
                        <p data-aos='fade-up' className='flex text-gray-500 text-xl text-center justify-center'>We give life to brands. Design a unique voice for them. Position them on the market in a way that they attract the right amount of attention.</p> 

                        <div data-aos='fade-up' className='flex flex-wrap gap-5 lg:flex-rol lg:flex-wrap pt-20'>
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

                    </div>
                </div>

                <div  className='min-h-screen bg-gray-300 pb-10'>
                <div className='px-10'>
                    <h1 data-aos='fade-up' className='text-black text-6xl font-bold text-center pt-40'>Contact Us</h1> <br />
                    <h2 data-aos='fade-up' className='text-black text-2xl font-semibold text-center pt-20 pb-2'>Get In Touch</h2>
                    <p data-aos='fade-up' className='flex text-gray-500 text-xl text-center justify-center'>Whether you are a smalll firm looking forward to gearing up your business or you are a huge company aspiring to reinforce the branding, we are ever ready to hear from you. We are super friendly and super flexible with our clients. Reach out to us today!</p>
                    
                    
                    
                    <div data-aos='fade-up' className=' gap-10 lg:flex mt-10 px-5 '>
                        
                        <div className=' rounded-md text-center p-10 flex-1 lg:w-80  bg-gray-400 mt-10'>
                            <h3 className="pt-2 pb-2 text-3xl font-bold text-black">Contact</h3>
                            <h4 className="text-md font-semi-bold text-gray-200 ">(+233) 20 000 1111</h4>
                            <h4 className="text-md font-semi-bold text-gray-200 ">(+233) 20 000 1111</h4>
                        </div>
                        <div className=' rounded-md text-center p-10 flex-1 lg:w-80  bg-gray-400 mt-10'>
                            <h3 className="pt-2 pb-2 text-3xl font-bold text-black">Email</h3>
                            <a href=""><h4 className="text-md font-semi-bold text-gray-200">infoE&M@gmail.com</h4></a>
                        </div>
                        <div className=' rounded-md text-center p-10 flex-1 lg:w-80 bg-gray-400 mt-10'>
                            <h3 className="pt-2 pb-2 text-3xl font-bold text-black">Address</h3>
                            <h4 className="text-md font-semi-bold text-gray-200 ">Accra, Ghana</h4>
                        </div>
                    </div>

                    <div className="flex text-3xl  gap-5 justify-center pt-10">
                    <a href=""><AiOutlineLinkedin className="hover:transition hover:-translate-y-2 duration-300 delay-150 text-black"/></a>
                    <a href=""><FiInstagram className="hover:transition hover:-translate-y-2 duration-300 delay-150 text-black"/></a>
                    <a href=""><FiTwitter className="hover:transition hover:-translate-y-2 duration-300 delay-150 text-black"/></a>
                    <a href=""><AiOutlineWhatsApp className="hover:transition hover:-translate-y-2 duration-300 delay-150 text-black"/></a>
                    
                </div>
                <Link 
                activeClass="home"
                to="home"
                smooth={true}
                offset={50}
                duration={500}><BiArrowToTop className='text-yellow-600 shadow-xl text-3xl float-right hover:transition hover:-translate-y-2 duration-300 delay-150'/></Link>
                    

                </div>
            </div>
        <Footer/>
      </main>
    </>
  )
}

  
