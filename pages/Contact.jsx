import React from 'react'
import { useRouter } from 'next/router'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Contact() {
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


      const router = useRouter()

  return (
    <>
        <main>
            <Nav/>
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

export default Contact