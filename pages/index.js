import Head from 'next/head'
import Image from 'next/image'
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

import design from '../public/illustration.png'
import plot from '../public/plotter.png'
import bill from '../public/billboard.png'
import cup from '../public/cup.png'
import bills from '../public/billlll.jpg'
import Script from 'next/script'
import AOS from 'aos'




export default function Index() {
  const router = useRouter()

      // Handles the submit event on form submit.
      const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
    
        // Get data from the form.
        const data = {
          first: event.target.first.value,
          last: event.target.last.value,
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/form'
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: 'POST',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        }
    
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`Is this your full name: ${result.data}`)
      }

  return (
    <>
      <Head>
        <title>AD Portal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav/>
        <div className=' min-h-screen pb-48  bg-gray-200 pt-48 px-5'>
        <div className='flex justify-center items-center text-center'>
            <h1 className='text-8xl  text-black font-bold '>AD PORTAL</h1>
        </div>
        <div className='flex flex-row object-center items-center justify-center divide-x-4 divide-gray-600 pt-2'>
            <div className='text-gray-600 px-2 font-semibold  text-center text-lg '>DESIGN</div> 
            <div className='text-gray-600 px-2 font-semibold  text-center text-lg'>PRINT</div> 
            <div className='text-gray-600 font-semibold px-2 text-center text-lg'>SIGNAGE</div>
            <div className='text-gray-600 font-semibold px-2 text-center text-lg'>BRANDING</div>
        </div>
        <div className='flex flex-row object-center items-center justify-center gap-8 p-10'>
            <div><button type='button' onClick={() => router.push('/Contact')} className='text-black bg-gray-500 p-2 font-bold text-md rounded-md flex align-middle justify-center'><MdOutlineRequestQuote className='text-2xl align-middle mr-2'/>Get Quotes</button></div>
            <div><button type='button' onClick={() => router.push('/Contact')} className='text-black bg-gray-500 p-2 font-bold text-md rounded-md flex align-middle justify-center'><BiPhoneCall className='text-2xl align-middle mr-2'/>Get Quotes</button></div>
        </div>
        </div>


        <div className='min-h-screen bg-gray-300 '>
                <div className='px-10'>
                    <h1 className='text-black text-6xl font-bold text-center pt-40'>Our Services</h1> <br />
                    <h2 className='text-black text-2xl font-semibold text-center pt-20 pb-2'>What we do?</h2>
                    <p className='flex text-gray-500 text-xl text-center justify-center'>We give life to brands. Design a unique voice for them. Position them on the market in a way that they attract the right amount of attention.</p> 
                    <p className='flex text-gray-500 text-xl text-center justify-center'>We are a full-service design company that provides top-tier solutions for businesses of all sizes.</p>
                </div>
                <div className='flex flex-wrap gap-5 lg:flex-rol lg:flex-wrap px-10'>
                    
                    <div className='group/edit text-center p-10 my-10 flex-1 cursor-pointer'>
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
                    
                    
                    <div className='group/edit text-center p-10 my-10 flex-1 cursor-pointer'>
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
                    
                    
                    <div className='group/edit text-center p-10 my-10 flex-1 cursor-pointer'>
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
                    
                    
                    <div className='group/edit text-center p-10 my-10 flex-1 cursor-pointer'>
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
            <div className='px-10'>
              <h1 className='text-black text-6xl font-bold text-center pt-40'>Our Projects</h1> <br />
              <h2 className='text-black text-3xl font-semibold text-center pt-20 pb-10'>Some of Our Prestigious Clients</h2>
            </div>
            <div className='flex flex-wrap gap-5 lg:flex-rol lg:flex-wrap px-10'>
              <div className='flex-1  basis-1/4 '>
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
              <div className='flex-1 basis-1/4'>
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
              <div className='flex-1 basis-1/4'>
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
              <div className='flex-1 basis-1/4'>
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
              <div className='flex-1 basis-1/4'>
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
              <div className='flex-1 basis-1/4'>
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
              <div className='flex-1 basis-1/4'>
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
              <div className='flex-1 basis-1/4'>
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
              <div className='flex-1 basis-1/4'>
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

                    </div>
                </div>

                <div className='min-h-screen bg-gray-300 pb-10'>
                <div className='px-10'>
                    <h1 className='text-black text-6xl font-bold text-center pt-40'>Contact Us</h1> <br />
                    <h2 className='text-black text-2xl font-semibold text-center pt-20 pb-2'>Get In Touch</h2>
                    <p className='flex text-gray-500 text-xl text-center justify-center'>Whether you are a smalll firm looking forward to gearing up your business or you are a huge company aspiring to reinforce the branding, we are ever ready to hear from you. We are super friendly and super flexible with our clients. Reach out to us today!</p>
                    
                    
                    
                    <div className=' gap-10 lg:flex mt-10 px-5 '>
                        
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

                    <div className=''>
                        <form className='flex flex-col items-center rounded-3xl  mt-10' onSubmit={handleSubmit}>
                        <h1 className='text-xl p-5 font-bold text-black'>Get A Quote</h1>
                        <label className='text-gray-500 p-2' htmlFor="first">First Name</label>
                        <input className='p-2 lg:w-80 rounded-md bg-white' type="text" id="first" name="first" required />

                        <label className='text-gray-500 p-2' htmlFor="last">Last Name</label>
                        <input className='p-2 lg:w-80 rounded-md  bg-white' type="text" id="last" name="last" required />

                        <label className='text-gray-500 p-2' htmlFor="last">Email</label>
                        <input className='p-2 lg:w-80 rounded-md  bg-white' type="text" required />

                        <label className='text-gray-500 p-2' htmlFor="last">Message</label>
                        <input type="text"  className='p-2 lg:w-80 rounded-md h-20 overflow-x-scroll  bg-white' required />

                        <button className='bg-orange-500 p-2 m-2 rounded-md hover:transition hover:scale-95 w-40 text-white' type="submit">Submit</button>
                        </form>
                        </div>
                    

                </div>
            </div>
        <Footer/>
      </main>
    </>
  )
}

  
