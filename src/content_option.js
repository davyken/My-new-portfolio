import chatImg from './assets/images/Screenshot from 2025-11-10 12-54-42.png';
import recruitmentImg from './assets/images/Screenshot from 2025-08-28 13-59-15.png';
import canvasImg from './assets/images/canvas.png';
import ifcmImg from './assets/images/Screenshot from 2025-11-10 13-07-13.png';
import greatRiftImg from './assets/images/Screenshot from 2025-11-10 13-20-32.png';
import realEstateImg from './assets/images/Screenshot from 2025-11-10 13-18-21.png';
import logisticsImg from './assets/images/Screenshot from 2025-11-10 13-16-57.png';
import constructionImg from './assets/images/Screenshot from 2025-11-10 13-15-33.png';
import travelImg from './assets/images/Screenshot from 2025-11-10 13-10-41.png';
import foundationImg from './assets/images/Screenshot from 2025-11-10 13-13-16.png';

const logotext = "DAVY";
const meta = {
    title: "Davy ",
    description: "I’m Davy Full stack devloper,currently working in Yaounde Cameroon",
};

const introdata = {
    title: "I’m Davy ",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "I'm a passionate full-stack developer with 3+ years of experience specializing in creating innovative web applications that solve real-world problems. My expertise lies in building modern, responsive, and user-centric applications using cutting-edge technologies.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "I'm a passionate full-stack developer with 3+ years of experience specializing in creating innovative web applications that solve real-world problems. My expertise lies in building modern, responsive, and user-centric applications using cutting-edge technologies.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: chatImg,
        title: "Chat Application",
        description: "🗨️ Chat Application\n\nTechnologies: React.js, Node.js, Express.js, MongoDB, Socket.io\n\nA real-time chat platform designed for smooth communication between users. The app supports instant messaging, user authentication, online/offline status detection, and message persistence using MongoDB.\n\nThe frontend, built in React.js, delivers a responsive interface with seamless chat transitions, while the backend (Node.js + Express + Socket.io) handles live connections and secure message delivery.\n\nThis project demonstrates expertise in real-time data handling, WebSockets, and secure fullstack architecture.",
        link: "https://github.com/davyken/chat-n",
    },
    {
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400",
        title: "Voting Platform",
        description: "🗳️ Voting Platform\n\nTechnologies: React.js, Node.js, Express.js, MongoDB, JWT Authentication\n\nAn online voting and polling platform allowing users to create, manage, and participate in polls. The app provides features like user registration, vote tracking, real-time result visualization, and poll analytics.\n\nThe system uses JWT authentication for secure login, MongoDB for data storage, and React for an intuitive user experience.\n\nIt highlights my skills in secure user management, backend logic design, and data-driven UI development.",
        link: "https://github.com/davyken/dvote-client",
    },
    {
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
        title: "E-Commerce Website",
        description: "🛍️ E-Commerce Website\n\nTechnologies: React.js, Node.js, Express.js, MongoDB, Stripe API, JWT Auth\n\nA complete e-commerce solution supporting product listings, shopping carts, user authentication, order tracking, and secure online payments.\n\nBuilt with the MERN stack, it integrates the Stripe API for payment processing, MongoDB for product and order data, and JWT for session security.\n\nThe system includes admin dashboards for managing inventory and tracking sales, demonstrating strong skills in API integration, state management, and backend scalability.",
        link: "https://online-marketplace-client.onrender.com",
    },
    {
        img: recruitmentImg,
        title: "Recruitment Platform",
        description: "💼 Recruitment Platform\n\nTechnologies: React.js, Supabase, Node.js, Tailwind CSS\n\nA web-based recruitment and job-matching platform connecting candidates with employers.\n\nBuilt using React.js for the UI and Supabase for authentication, database management, and file storage. The app allows candidates to upload CVs, apply for jobs, and receive personalized recommendations.\n\nEmployers can post jobs, review applications, and manage listings through an intuitive dashboard.\n\nThis project demonstrates experience in modern backend-as-a-service (BaaS), authentication, and real-time database interactions.",
        link: "https://github.com/davyken/Job-Fusion",
    },
    {
        img: canvasImg,
        title: "Virtual Canvas Board",
        description: "🧠 Virtual Canvas Board\n\nTechnologies: Next.js, NestJS, MongoDB, WebSockets, Canvas API\n\nAn interactive whiteboard app that allows multiple users to draw, collaborate, and share in real time.\n\nThe frontend, built with Next.js, integrates the Canvas API for drawing tools, colors, and shapes, while the backend (NestJS + WebSockets) ensures real-time synchronization between users.\n\nThe project focuses on real-time event handling, state management, and collaborative UI synchronization, ideal for remote teamwork and brainstorming tools.",
        link: "https://github.com/davyken/visual-brainstorm-canvas",
    },
    {
        img: ifcmImg,
        title: "IFCM Website",
        description: "🌐 IFCM Website\n\nTechnologies: HTML, CSS, JavaScript (Vanilla JS)\n\nA professional institutional website built with pure JavaScript, focusing on simplicity, lightweight performance, and accessibility.\n\nThe website includes dynamic sections, smooth scrolling, and responsive layouts — all implemented without frameworks.\n\nThis project demonstrates a strong command of core web technologies and frontend performance optimization.",
        link: "https://ifcministriesintl.com/",
    },
    {
        img: greatRiftImg,
        title: "Great Rift Consultancy",
        description: "🌍 Corporate Websites for Great Rift Consultancy Group\n\nI developed a full suite of websites for Great Rift Consultancy, a multidisciplinary organization operating across several sectors.\nEach site is fully responsive, SEO-optimized, and designed to align with the company’s visual identity while serving specific industry needs.\n\n🧾 GreatRiftConsultancy.com\n\nTechnologies: React.js, Node.js, Tailwind CSS, MongoDB\n\nThe main corporate website that unifies the Great Rift brand. It presents the company’s vision, mission, and service portfolio, connecting visitors to its subsidiaries.\n\nFeatures include a modern landing page, animated sections, service overviews, and contact integration.\n\nFocused on corporate branding, responsive UI, and content-driven architecture.",
        link: "https://davyken.github.io/GreatriftConsultancy.com/",
    },
    {
        img: realEstateImg,
        title: "Great Rift Consultancy Real Estate",
        description: "🏠 GreatRiftConsultancyRealEstate.com\n\nTechnologies: React.js, Node.js, MongoDB, Cloudinary (for image hosting)\n\nA dynamic real estate platform featuring property listings, image galleries, and inquiry forms.\n\nIt allows clients to browse properties, filter by location or price, and connect with agents.\n\nDesigned for property data management, responsive design, and media optimization.",
        link: "https://davyken.github.io/GreatriftConsultancyRealestate.com/",
    },
    {
        img: logisticsImg,
        title: "Great Rift Consultancy Logistics",
        description: "🚛 GreatRiftConsultancyLogistics.com\n\nTechnologies: React.js, Node.js, Express.js\n\nA logistics and supply chain management website showcasing Great Rift’s transportation, warehousing, and delivery solutions.\n\nIt integrates service forms, tracking features, and an intuitive dashboard for business clients.\n\nHighlights expertise in corporate service design, API integration, and scalable backend development.",
        link: "https://davyken.github.io/GreatriftConsultancyLogistics.com/",
    },
    {
        img: constructionImg,
        title: "Great Rift Consultancy Construction",
        description: "🏗️ GreatRiftConsultancyConstruction.com\n\nTechnologies: React.js, Node.js, MongoDB, Tailwind CSS\n\nA construction-focused website presenting the company’s infrastructure projects, portfolio, and engineering capabilities.\n\nThe platform emphasizes visual storytelling, using project galleries and detail pages to display construction achievements.\n\nFocused on UI/UX clarity, content architecture, and backend CMS integration.",
        link: "https://davyken.github.io/GreatriftConsultancyConstruction.com/",
    },
    {
        img: travelImg,
        title: "Great Rift Consultancy Travel",
        description: "✈️ GreatRiftConsultancyTravel.com\n\nTechnologies: React.js, Node.js, Express.js, MongoDB\n\nA travel and tour booking platform for Great Rift Consultancy’s travel division.\n\nIt features trip listings, booking forms, travel guides, and destination highlights.\n\nBuilt for dynamic data handling, responsive layouts, and interactive booking experiences.",
        link: "https://davyken.github.io/GreatriftConsultancyTravel.com/",
    },
    {
        img: foundationImg,
        title: "Great Rift Foundation",
        description: "🤝 GreatRiftFoundation.com\n\nTechnologies: React.js, Node.js, MongoDB, Tailwind CSS\n\nA non-profit foundation website designed to communicate social impact and humanitarian initiatives.\n\nIt includes sections for programs, news, partnerships, and donations.\n\nFocused on accessibility, community engagement, and storytelling through design.\n\n🚀 Summary\n\nThrough these projects, I’ve gained strong practical experience in:\n\nFrontend: React.js, Next.js, Tailwind CSS, Vanilla JS\n\nBackend: Node.js, Express.js, NestJS\n\nDatabases: MongoDB, Supabase\n\nTools & APIs: JWT, Stripe, Cloudinary, Socket.io\n\nArchitecture: REST APIs, real-time communication, modular monoliths, and microservice patterns\n\nEach project reflects a balance of technical precision, clean design, and scalable architecture, tailored to solve specific business and user needs.",
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