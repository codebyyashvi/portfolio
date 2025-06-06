import React, { use } from 'react'
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { styles } from '../styles'
import { EarthCanvas } from './canvas'; 
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
// 0st93cHJyCiUiYinS
// template_uljotld
// service_64w49gq
const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 500px)");
      setIsMobile(mediaQuery.matches);
      const handleMediaQueryChange = (event)=>{
        setIsMobile(event.matches);
      };
      mediaQuery.addEventListener('change', handleMediaQueryChange);
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
    }, []);
  const formRef = useRef();
  const [form, setform] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_64w49gq',
      'template_uljotld',
      {
        from_name: form.name,
        to_name: 'Yashvi',
        from_email: form.email,
        to_email: 'yashvikhatri26@gmail.com',
        message: form.message
      },
      '0st93cHJyCiUiYinS'
    ).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setform({
        name: '',
        email: '',
        message: ''
      });
    }
    ).catch((error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.');
    })
  }
  
  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea rows={7} name='message' value={form.message} onChange={handleChange} placeholder="What do you want to say?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
            </label>
            <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>{loading ? 'Sending...' : 'Send Message'}</button>

          </form>
      </motion.div>
      {!isMobile && (
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas />
        </motion.div>
      )}
    </div>
  )
}

export default SectionWrapper(Contact, "contact")