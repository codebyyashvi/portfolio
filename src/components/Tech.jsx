import React from 'react'
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from '../constants'

const Tech = () => {
  return (
  <>

    <div className='hidden md:flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='flex flex-col items-center' key={technology.name}>
        <div className='w-28 h-28'>
          <BallCanvas icon={technology.icon} />
        </div>
        {/* Static text below the ball */}
        <p className="text-center text-white text-sm font-medium mt-2">
          {technology.name}
        </p>
      </div>
      ))}
    </div>

    <div className='grid grid-cols-3 gap-4 md:hidden'>
      {technologies.map((technology) => (
        <div
          className='flex flex-col items-center rounded-xl border border-white/10 bg-black/20 p-3'
          key={`mobile-${technology.name}`}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className='h-12 w-12 object-contain'
            loading='lazy'
          />
          <p className='mt-2 text-center text-xs font-medium leading-tight text-white'>
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  </>
  )
}

export default SectionWrapper(Tech, "")