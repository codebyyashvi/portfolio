import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { workExperiences, experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant, fadeIn } from '../utils/motion'

// Card for Hackathons with icons
const HackathonCard = ({experience}) => (
  <VerticalTimelineElement
    contentStyle={{background: '#1d1836', color:'#fff'}}
    contentArrowStyle={{ borderRight:'7px solid  #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain'/>
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

// Card for Work Experience without icons
const WorkExpCard = ({experience, index}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.5)}>
    <div className='bg-tertiary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500'>
      <div className='flex justify-between items-start'>
        <div className='flex-1'>
          <h3 className='text-white text-[20px] font-bold'>{experience.title}</h3>
          <p className='text-blue-400 text-[16px] font-semibold mt-1'>{experience.company_name}</p>
          <p className='text-secondary text-[14px] mt-2'>{experience.date}</p>
        </div>
      </div>
      <ul className='mt-5 space-y-3'>
        {experience.points.map((point, idx) => (
          <li
            key={`work-point-${idx}`}
            className='text-white-100 text-[14px] flex items-start'
          >
            <span className='text-blue-400 mr-3 mt-1'>▸</span>
            <span className='tracking-wider'>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
)

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I have done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experience & Hackathons</h2>
    </motion.div>
    
    {/* Work Experience Section */}
    <div className='mt-20 w-full'>
      <motion.div variants={textVariant()}>
        <h3 className='text-white text-[28px] font-bold mb-10'>Experience</h3>
      </motion.div>
      <div className='grid grid-cols-1 gap-6 max-w-3xl'>
        {workExperiences.map((experience, index) => (
          <WorkExpCard key={`work-${index}`} experience={experience} index={index} />
        ))}
      </div>
    </div>

    {/* Hackathons Section */}
    <div className='mt-20 w-full'>
      <motion.div variants={textVariant()}>
        <h3 className='text-white text-[28px] font-bold mb-10'>Hackathons</h3>
      </motion.div>
      <div className='flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <HackathonCard key={`hackathon-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")