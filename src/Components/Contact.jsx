import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";




const Contact = () => {
  return (
    <section
        id="contact"
        className="text-center py-20 px-5"
      >
        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>
        <section className='flex justify-center mb-3  '>
            <IoMailOpenOutline className='mt-1 mr-2 text-2xl'/>
            <p className='w-20% text-xl'>udevaruban@gmail.com</p>
        </section> 
        <section className='flex justify-center mb-3'>
            <FaLinkedin className='mt-1 mr-2 text-2xl'/>
            <p className='w-20% text-xl'>linkedin.com/in/devaruban-u-bb775b365</p>
        </section> 
        <section className='flex justify-center mb-3'>
            <IoCallOutline className='mt-1 mr-2 text-2xl'/>
            <p className='w-20% text-xl'>+91 8610495373</p>
        </section><section className='flex justify-center mb-3'>
            <SlLocationPin className='mt-1 mr-2 text-2xl'/>
            <p className='w-20% text-xl'>Chennai</p>
        </section>

      </section>
  )
}
 
export default Contact