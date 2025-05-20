import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import me from '../assets/me.gif'
import { useEffect, useState } from 'react'
// import { repeat } from 'maath/dist/declarations/src/misc'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (e) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange)
  }, [])
  return (
    <section className='relative w-full h-[160vh] mx-auto'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5`}>
          {/* Image on top for mobile */}
          {isMobile && (
            <div className='w-full flex justify-center mb-4'>
              <img src={me} alt="me" className='rounded-full w-40 h-50' />
            </div>
          )}

          <div className='flex flex-row gap-4'>
            <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#8c58fd]'/>
              <div className='w-1 sm:h-80 h-40 violet-gradient mx-auto'/>
            </div>
            <div>
              <h1 className={`${styles.heroHeadText} sm:text-[34px] text-white`}>Hi, I'm <span className='text-[#8c58fd]'>Yashvi</span></h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop AI chatbot using Hugging <br className='sm:block hidden'/>Face API, along with mobile and <br className='sm:block hidden'/> web applications.
              </p>
            </div>
          </div>
          {!isMobile && (<div className='mx-auto my-2'>
            <img src={me} alt="me" className='rounded-full'/>
          </div>)}
          
        </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero