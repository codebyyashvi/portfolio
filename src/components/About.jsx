import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard= ({index, title, icon}) =>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className='mt-4 text-secondary text-[18px] max-w-3xl leading-[32px]'
      >
        I'm a passionate Computer Science and Engineering student focused on software development, AI, and solving real-world problems through technology. I enjoy building end-to-end products that combine clean user experiences with practical engineering, from planning architecture and writing scalable code to testing, deployment, and iteration. My project work includes StudyMinutes, an AI assistant designed to support personalized learning workflows; QueryHub, a RAG-based chatbot built with LangChain for contextual and reliable responses; and Speak2Hire, a voice-first experience powered by MurfAI API that highlights my API integration and product-thinking skills. Alongside development, I actively participate in coding contests, hackathons, and open-source collaboration to continuously strengthen my foundations in algorithms, system design, and optimization. I was also recognized as runner-up at Hack The Future, an achievement that reflects my ability to perform in fast-paced, team-driven environments. With a strong interest in mathematics, intelligent systems, and impactful software, I aim to create solutions that are not only technically strong but also meaningful and user-centered.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=>{
          return <ServiceCard key={service.title} index={index} {...service}/>
        })}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")