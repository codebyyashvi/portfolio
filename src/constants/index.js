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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
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
    {
      name: "git",
      icon: git,
    },
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
  
  const experiences = [
    {
      title: "Hack The Future",
      company_name: "IIITV-ICD",
      icon: IIITV,
      iconBg: "#E6DEDD",
      date: "28th - 30th March 2025",
      points: [
        "We secured 2nd place in the Hackathon, showcasing our innovative approach to problem-solving.",
        "SignMaster is an interactive learning platform designed to help individuals, especially the deaf and mute community, learn American Sign Language (ASL) in an engaging and structured way.",
        "It includes three learning levels, interactive quizzes, games, AI-powered tools, and a progress tracker to ensure an immersive and enjoyable learning experience.",
      ],
    },
    {
      title: "Infosys Springboard iAccelerate Women's Hackathon",
      company_name: "Infosys Springboard",
      icon: infosys,
      iconBg: "#E6DEDD",
      date: "January 2025 - Present",
      points: [
        "Proposed an AI-powered real-time Sign Language translation extension to improve accessibility for hearing-impaired users.",
        "Designed a multi-step workflow involving Speech-to-Text conversion, Text-to-Sign transformation, and AI-based sign generation using pose estimation models and transformer-based NLP models.",
        "Conceptualized an interactive ISL learning module for users to learn and understand sign language more effectively.",
      ],
    },
    {
      title: "Hack This Fall Virtual",
      company_name: "Devfolio",
      icon: fall,
      iconBg: "#383E56",
      date: "November 8 - 10, 2024",
      points: [
        "We implemented the environment friendly website that reduce the waste from the industries.",
        "The waste material of some industries is the raw material of other industries and in our website we were selling those waste materials to the other industries with a chatbot to get knowledge about the waste materials.",
        " Developed EcoLink, a website reducing industrial waste by connecting businesses. Integrated an AI chatbot, EcoBot, for real-time assistance.",
      ],
    },
    {
      title: "Flipkart Grid 6.0 - Robotics Challenge",
      company_name: "Unstop",
      icon: flip,
      iconBg: "#383E56",
      date: "August 2024 - December 2024",
      points: [
        "Qualified Round 1 of Flipkart Grid 6.0- Robotics Challenge by solving E-commerce-related automation problems.",
      ],
    },
    {
      title: "Woodpecker's Hackathon",
      company_name: "Unstop",
      icon: wood,
      iconBg: "#E6DEDD",
      date: "June 2024 - August 2024",
      points: [
        "Implemented on the theme AI-Powered Data Query Interface.",
        "Led the development of Rapid Query, an AI-powered chatbot improving search efficiency by 30%, reducing response time for complex queries.",
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
      name: "VitalBloom",
      description:
        "An organ donation platform connecting donors and recipients, ensuring timely transplants and saving lives. It includes donor and recipient matching and view donors and recipients.",
      tags: [
        {
          name: "MySQL",
          color: "blue-text-gradient",
        },
        {
          name: "Node JS",
          color: "green-text-gradient",
        },
        {
          name: "React JS",
          color: "pink-text-gradient",
        },
      ],
      image: organ,
      source_code_link: "https://vitalbloom-2dkscfym8-yashvis-projects-b766d513.vercel.app/",
      isVercel: true
    },
    {
      name: "AI Chatbot",
      description:
        "Built an AI-powered chatbot using the Hugging Face API, leveraging NLP techniques for natural and interactive conversations.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Hugging Face API",
          color: "green-text-gradient",
        },
      ],
      image: chatbot,
      source_code_link: "https://github.com/codebyyashvi/Chatbot",
      isVercel: false
    },
    {
      name: "Campus Nexus",
      description:
        "Campus Nexus is a platform where students can see their campus schedules like bus schedules, exam schedules, and other important notices. It is a web application that is made using Python-Flask and Streamlit.",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: campus,
      source_code_link: "https://software-engineering-5eb1.onrender.com",
      isVercel: true
    },
    {
      name: "Sign Master",
      description:
        "SignMaster is an interactive platform that helps the deaf and mute community learn American Sign Language (ASL) through three learning levels, quizzes, games, AI tools, and a progress tracker for a fun and structured experience.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "Sqlite",
          color: "green-text-gradient",
        },
      ],
      image: sign,
      source_code_link: "https://github.com/codebyyashvi/Hack-the-Future",
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
  
  export { services, technologies, experiences, testimonials, projects, fall };