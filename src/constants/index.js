import {
    mobile,
    backend,
    creator,
    web,
    tailwind,
    nodejs,
    mongodb,
    git,
    tripguide,
    // threejs,
    // html,
    // css,
    // javascript,
    // typescript,
    reactjs,
    nextjs
  } from "../assets";
  // import javascript from "../assets/tech/javascript.png";
  // import typescript from "../assets/tech/typescript.png";
  // import html from "../assets/tech/html.png";
  // import css from "../assets/tech/css.png";
  // import reactjs from "../assets/tech/reactjs.png";
  import LLM from '../assets/tech/LLM.png'
  import fall from '../assets/company/fall.png'
  import organ from '../assets/organ.png'
  import infosys from '../assets/company/infosys.png'
  import flip from '../assets/company/flip.webp'
  import wood from '../assets/company/wood.png'
  import IIITV from '../assets/company/iiitv.png'
  import campus from '../assets/campus.png'
  // import nextjs from '../assets/tech/nextjs.png'
  import scikit from '../assets/tech/scikit.png'
  import mysql from '../assets/tech/mysql.png'
  import ml from '../assets/tech/ml.png'
  import chatbot from '../assets/Chatbot.png'
  import netflix from '../assets/Netflix.png'
  import sign from '../assets/sign.png'
  import dice from '../assets/DiceGame.png'
  import mastanee from '../assets/Mastanee.png'
  import farmer from '../assets/farmer.jpg'
  import NLP from '../assets/tech/NLP.png'
  import DL from '../assets/tech/DL.png'
  import study from '../assets/studyMinutes.png'
  import speak from '../assets/speak.png'
  import queryhub from '../assets/queryhub.png'
  import amazon from '../assets/company/amazon.png'
  import google from '../assets/company/google.png'
  import { col } from "framer-motion/client";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "AI/ML Developer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML",
    //   icon: html,
    // },
    // {
    //   name: "CSS",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "Deep Learning",
      icon: DL
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "LLM",
      icon: LLM
    },
    {
      name: "NLP",
      icon: NLP
    },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Scikit-learn",
      icon: scikit,
    },
    {
      name: "Machine Learning",
      icon: ml,
    },
  ];
  
  const workExperiences = [
    {
      title: "AI Engineer Intern",
      company_name: "Breevya",
      iconBg: "#E6DEDD",
      date: "January 2026 - February 2026",
      points: [
        "Built and deployed an AI-powered voice automation platform featuring real-time conversational agents, agent-based workflow orchestration, and Twilio-based outbound customer calling using company credentials.",
      ],
    },
  ];

  const experiences = [
    {
      title: "Amazon ML Challenge",
      company_name: "Amazon",
      icon: amazon,
      iconBg: "#E6DEDD",
      date: "October 11 - 13, 2025",
      points: [
        "Built a multimodal price prediction system on 75K products using BERT (text) and BLIP-2 (images) with log-transform, adaptive SMAPE-weighted loss, and late fusion, achieving 49.52 SMAPE.",
      ],
    },
    {
      title: "Hack The Future",
      company_name: "IIITV-ICD",
      icon: IIITV,
      iconBg: "#E6DEDD",
      date: "March 28 - 30, 2025",
      points: [
        "Secured 2nd place by building an inclusive learning platform for mute and deaf students with ASL modules, quizzes, games, and real-time Speech-to-Text and Text-to-Sign conversion.",
      ],
    },
    {
      title: "Google Girl Hackathon",
      company_name: "Google",
      icon: google,
      iconBg: "#383E56",
      date: "January 20 - March 11, 2025",
      points: [
        "Participated in Round 1 coding assessment and progressed through resume screening and Technical Round 1 for Google Summer Internship, reaching final Technical Round 2.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "StudyMinutes",
      description:
        "AI-powered study assistant that transforms unstructured notes (text, PDFs, audio) into structured content and features a RAG-based chatbot using semantic search (Qdrant) with session-based chat history (MongoDB).",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Python (FastAPI)",
          color: "green-text-gradient",
        },
        {
          name: "React JS",
          color: "pink-text-gradient",
        },
        {
          name: "RAG",
          color: "blue-text-gradient",
        },
        {
          name: "Qdrant",
          color: "green-text-gradient",
        }
      ],
      image: study,
      source_code_link: "https://www.studyminutes.tech",
      isVercel: true
    },
    {
      name: "Speak2Hire",
      description:
        "Developed a voice-enabled platform that converts resumes and text into natural-sounding speech using Murf AI. Enabled multi-language support with diverse voice accents and gender options, delivering an interactive and accessible way to present professional profiles.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Murf AI API",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
        {
          name: "React JS",
          color: "blue-text-gradient",
        }
      ],
      image: speak,
      source_code_link: "https://speak2-hire.vercel.app",
      isVercel: true
    },
    {
      name: "QueryHub",
      description:
        "Developed QueryHub, an AI app using LangChain, OpenAI, and FAISS-based RAG to answer queries from PDFs, videos, and YouTube links with a Streamlit frontend and seamless video transcription integration.",
      tags: [
        {
          name: "LangChain",
          color: "blue-text-gradient",
        },
        {
          name: "VectorDB - FAISS",
          color: "green-text-gradient",
        },
        {
          name: "Streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: queryhub,
      source_code_link: "https://github.com/codebyyashvi/QueryHub",
      isVercel: false
    },
    {
      name: "Dice Game",
      description:
        "This Dice Game is only made using ReactJS, one can enjoy this game by just rolling the dice. The design of this game is also much attractive and unique.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: dice,
      source_code_link: "https://dice-game-5n028u84c-yashvis-projects-b766d513.vercel.app/",
      isVercel: true
    },
    {
      name: "Farmer's Lifeline",
      description:
        "In India, many farmers are doing suicides and major issue is lack of money. To resolve that I developed a Flutter-based mobile app connecting farmers with government schemes and NGOs, enabling direct support and reducing financial distress.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Dart",
          color: "green-text-gradient",
        },
      ],
      image: farmer,
      source_code_link: "https://github.com/codebyyashvi/farmers_lifeline",
      isVercel: false
    },
  ];
  
  export { services, technologies, workExperiences, experiences, testimonials, projects, fall };