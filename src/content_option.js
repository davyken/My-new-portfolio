import chatImg from './assets/images/chatdavweb.png';
import swiftdropImg from './assets/images/swiftdrop.png';
import carrentalImg from './assets/images/carrental.png';
import recruitmentImg from './assets/images/Screenshot from 2025-08-28 13-59-15.png';
import ifcmImg from './assets/images/Screenshot from 2025-11-10 13-07-13.png';
import greatRiftImg from './assets/images/Screenshot from 2025-11-10 13-20-32.png';
import realEstateImg from './assets/images/Screenshot from 2025-11-10 13-18-21.png';
import logisticsImg from './assets/images/Screenshot from 2025-11-10 13-16-57.png';
import constructionImg from './assets/images/Screenshot from 2025-11-10 13-15-33.png';
import travelImg from './assets/images/Screenshot from 2025-11-10 13-10-41.png';
import foundationImg from './assets/images/Screenshot from 2025-11-10 13-13-16.png';
import hiremeImg from './assets/images/Screenshot from 2025-11-17 09-10-33.png';
import recipesImg from './assets/images/recipes.png';
import davyImg from './assets/images/davy111.jpeg';
const logotext = "DAVY";
const meta = {
    title: "Davy ",
    description: "I'm Davy Full stack devloper,currently working in Yaounde Cameroon",
};

const introdata = {
    title: "I'm Davy ",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "I'm a passionate full-stack developer with 3+ years of experience specializing in creating innovative web applications that solve real-world problems. My expertise lies in building modern, responsive, and user-centric applications using cutting-edge technologies.",
    your_img_url: davyImg,
};

const dataabout = {
    title: "abit about my self",
    aboutme: "I'm a passionate full-stack developer with 3+ years of experience specializing in creating innovative web applications that solve real-world problems. My expertise lies in building modern, responsive, and user-centric applications using cutting-edge technologies.",
};
const worktimeline = [{
        jobtitle: "Web developer and graphic designer",
        where: "GreatriftFoundation",
        date: "2024",
    },
    {
        jobtitle: "web developer",
        where: "Increasinf faith of christ ministry international",
        date: "2025",
    },
    {
        jobtitle: "Fullstack developer",
        where: "rebasecodecamp",
        date: "2025",
    },
];

const skills = [{
        name: "Javascript",
        value: 90,
    },
    {
        name: "Flutter & spring boot",
        value: 85,
    },
    {
        name: "React native",
        value: 80,
    },
    {
        name: "NodeJS(express)",
        value: 85,
    },
    {
        name: "NestJS",
        value: 80,
    },
    {
        name: "MongoDB",
        value: 85,
    },
    {
        name: "Supabase",
        value: 80,
    },
    {
        name: "Nextjs",
        value: 85,
    },
    {
        name: "MySql",
        value: 80,
    },
    {
        name: "socket.io",
        value: 85,
    },
    {
        name: "Learning management system (LMS)",
        value: 80,
    },
    {
        name: "Social Media management",
        value: 85,
    },
    {
        name: "DART & PHP",
        value: 80,
    },
    {
        name: "Canva & Capcut",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Craft intuitive and delightful digital experiences by marrying user research, information architecture, and thoughtful visual design. Our UI/UX design process focuses on usability, accessibility, and performance to create interfaces that feel effortless and empower users to accomplish their goals with confidence.",
    },
    {
        title: "Fullstackdev",
        description: "Designing mobile and web experiences that glide across devices and screen sizes. We prioritize performance, accessibility, and engaging interactions to turn complex tasks into simple, enjoyable journeys on iOS and Android.",
    },
    {
        title: "Wordpress Design",
        description: "Transform your WordPress presence with clean, responsive designs that honor your brand and content strategy. From theme customization to widget architecture and SEO-friendly layouts, we deliver fast, scalable sites that look great on every device.",
    },
     {
        title: "Video Editing",
        description: "Gives live to your pictures with my professional video editing services. Whether you need promotional videos, social media content, or personal projects, I bring creativity and technical expertise to craft compelling narratives that captivate your audience.",
    },
];

const dataportfolio = [{
        img: recipesImg,
        title: "Recipe App",
        description: "Recipe App - Full-Stack Recipe Discovery Platform. Technologies: React 19, React Native (Expo), Node.js, Express, Drizzle ORM, PostgreSQL, Clerk Auth, TheMealDB API, Google Places API. A comprehensive recipe discovery, sharing, and saving application with both web and mobile versions. Web Features: Browse thousands of recipes from TheMealDB, Search by name category or area, View detailed recipe instructions ingredients and images, User registration with Clerk Authentication (OAuth email password), Create edit and delete personal recipes, Save favorite recipes and view history, Find nearby restaurants using Google Places API. Mobile Features (React Native plus Expo): Cross-platform iOS and Android support, Tab-based navigation, Recipe creation with Cloudinary image upload, Favorites management, Profile management. Backend: Node.js with Express, Drizzle ORM with PostgreSQL, JWT Authentication, RESTful API architecture. Deployed at: https://dav-recipes-web.vercel.app/",
        link: "https://dav-recipes-web.vercel.app/",
    },
    {
        img: recruitmentImg,
        title: "Job Fusion",
        description: "Recruitment Platform. Technologies: React.js, Supabase, Node.js, Tailwind CSS. A web-based recruitment and job-matching platform connecting candidates with employers. Built using React.js for the UI and Supabase for authentication, database management, and file storage. The app allows candidates to upload CVs, apply for jobs, and receive personalized recommendations. Employers can post jobs, review applications, and manage listings through an intuitive dashboard. This project demonstrates experience in modern backend-as-a-service (BaaS), authentication, and real-time database interactions.",
        link: "https://job-fusion-jade.vercel.app/",
    },
    {
        img: chatImg,
        title: "Chat Application",
        description: "Chat Application. Technologies: React.js, Node.js, Express.js, MongoDB, Socket.io. A real-time chat platform designed for smooth communication between users. The app supports instant messaging, user authentication, online/offline status detection, and message persistence using MongoDB. The frontend, built in React.js, delivers a responsive interface with seamless chat transitions, while the backend (Node.js plus Express plus Socket.io) handles live connections and secure message delivery. This project demonstrates expertise in real-time data handling, WebSockets, and secure fullstack architecture.",
        link: "https://chatdav-2aa5.vercel.app/",
    },
    {
        img: swiftdropImg,
        title: "SwiftDrop",
        description: "SwiftDrop - Delivery Management System. Technologies: React.js, Node.js, Express.js, MongoDB. A comprehensive delivery management platform for tracking packages, managing deliveries, and handling customer requests. Features include real-time tracking, delivery status updates, customer notifications, and an intuitive dashboard for managing deliveries. This project demonstrates full-stack development skills with focus on logistics and real-time updates.",
        link: "https://davyken.github.io/swiftdrop/",
    },
    {
        img: carrentalImg,
        title: "Car Rental",
        description: "Car Rental Platform. Technologies: React.js, Node.js, Express.js, MongoDB. A modern car rental platform allowing users to browse available vehicles, make reservations, and manage their bookings. Features include vehicle catalog with filters, booking management, user authentication, and payment integration. This project showcases e-commerce functionality and booking system development.",
        link: "https://carrental-black-pi.vercel.app/",
    },
    {
        img: hiremeImg,
        title: "HireMe Recruitment Platform",
        description: "Hire Me Recruitment Platform. Technologies: React (Next.js), Node.js, Express.js, MongoDB, Auth0. A comprehensive recruitment platform built with Next.js for the frontend, providing a seamless user experience for job seekers and employers. Integrated with Auth0 for secure authentication, allowing users to sign up, log in, and manage profiles. The backend, powered by Node.js and Express.js, handles API endpoints for job postings, applications, and user management. MongoDB is used for storing user data, job listings, and application records. Features include job search and filtering, application tracking, employer dashboards, and real-time notifications.",
        link: "https://hire-me-mu-pied.vercel.app/",
    },
    {
        img: ifcmImg,
        title: "IFCM Website",
        description: "IFCM Website. Technologies: Reactjs Tailwind CSS. A professional institutional website built with pure JavaScript, focusing on simplicity, lightweight performance, and accessibility. The website includes dynamic sections, smooth scrolling, and responsive layouts. This project demonstrates a strong command of core web technologies and frontend performance optimization.",
        link: "https://ifcministriesintl.com/",
    },
    {
        img: greatRiftImg,
        title: "Great Rift Consultancy",
        description: "Corporate Websites for Great Rift Consultancy Group. I developed a full suite of websites for Great Rift Consultancy, a multidisciplinary organization operating across several sectors. Each site is fully responsive, SEO-optimized, and designed to align with the company's visual identity while serving specific industry needs. GreatRiftConsultancy.com - Technologies: React.js, Node.js, Tailwind CSS, MongoDB. The main corporate website that unifies the Great Rift brand. It presents the company's vision, mission, and service portfolio, connecting visitors to its subsidiaries. Features include a modern landing page, animated sections, service overviews, and contact integration. Focused on corporate branding, responsive UI, and content-driven architecture.",
        link: "https://davyken.github.io/GreatriftConsultancy.com/",
    },
    {
        img: realEstateImg,
        title: "Great Rift Consultancy Real Estate",
        description: "GreatRiftConsultancyRealEstate.com. Technologies: React.js, Node.js, MongoDB, Cloudinary (for image hosting). A dynamic real estate platform featuring property listings, image galleries, and inquiry forms. It allows clients to browse properties, filter by location or price, and connect with agents. Designed for property data management, responsive design, and media optimization.",
        link: "https://davyken.github.io/GreatriftConsultancyRealestate.com/",
    },
    {
        img: logisticsImg,
        title: "Great Rift Consultancy Logistics",
        description: "GreatRiftConsultancyLogistics.com. Technologies: React.js, Node.js, Express.js. A logistics and supply chain management website showcasing Great Rift's transportation, warehousing, and delivery solutions. It integrates service forms, tracking features, and an intuitive dashboard for business clients. Highlights expertise in corporate service design, API integration, and scalable backend development.",
        link: "https://davyken.github.io/GreatriftConsultancyLogistics.com/",
    },
    {
        img: constructionImg,
        title: "Great Rift Consultancy Construction",
        description: "GreatRiftConsultancyConstruction.com. Technologies: React.js, Node.js, MongoDB, Tailwind CSS. A construction-focused website presenting the company's infrastructure projects, portfolio, and engineering capabilities. The platform emphasizes visual storytelling, using project galleries and detail pages to display construction achievements. Focused on UI/UX clarity, content architecture, and backend CMS integration.",
        link: "https://davyken.github.io/GreatriftConsultancyConstruction.com/",
    },
    {
        img: travelImg,
        title: "Great Rift Consultancy Travel",
        description: "GreatRiftConsultancyTravel.com. Technologies: React.js, Node.js, Express.js, MongoDB. A travel and tour booking platform for Great Rift Consultancy's travel division. It features trip listings, booking forms, travel guides, and destination highlights. Built for dynamic data handling, responsive layouts, and interactive booking experiences.",
        link: "https://davyken.github.io/GreatriftConsultancyTravel.com/",
    },
    {
        img: foundationImg,
        title: "Great Rift Foundation",
        description: "GreatRiftFoundation.com. Technologies: React.js, Node.js, MongoDB, Tailwind CSS. A non-profit foundation website designed to communicate social impact and humanitarian initiatives. It includes sections for programs, news, partnerships, and donations. Focused on accessibility, community engagement, and storytelling through design. Summary: Through these projects, I've gained strong practical experience in Frontend: React.js, Next.js, Tailwind CSS, Vanilla JS. Backend: Node.js, Express.js, NestJS. Databases: MongoDB, Supabase. Tools and APIs: JWT, Stripe, Cloudinary, Socket.io. Architecture: REST APIs, real-time communication, modular monoliths, and microservice patterns. Each project reflects a balance of technical precision, clean design, and scalable architecture, tailored to solve specific business and user needs.",
        link: "https://davyken.github.io/GreatriftFoundation.com/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "davykennang552@gmail.com",
    YOUR_FONE: "+2376 9323 0485",
    description: " Feel free to reach out to me for collaborations, inquiries, or just to say hello! I'm always open to discussing new projects and opportunities.",
    YOUR_SERVICE_ID: "service_7ig6m9x",
    YOUR_TEMPLATE_ID: "template_rvi8tdn",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/davyken/",
    facebook: "https://www.facebook.com/davy.kennang",
    linkedin: "https://www.linkedin.com/in/davy-kennang-788047298/",
    twitter: "https://x.com/davy_kenna23195",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
