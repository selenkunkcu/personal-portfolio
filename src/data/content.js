export const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export const timelineItems = [
    {
        title: "Software Engineer",
        company: "Mepsan Inc.",
        period: "2024 – Present",
        iconKey: "FiBriefcase",
        highlight: true,
        bullets: [
            {
                project: "Web-based ERP System",
                items: [
                    "Developed user-focused, responsive interfaces using JavaScript and jQuery for a web-based ERP application.",
                    "Integrated frontend modules with a Node.js backend to support core business workflows.",
                    "Designed and optimized PostgreSQL SQL queries and functions powering frontend data and reports. Acted as a bridge between the database, backend services, and client-side UI to improve performance and usability.",
                ],
            },
            {
                project: "Smart Cash Register Management System",
                items: ["Built the frontend layer of a Python-based next-generation smart cash register management platform. Improved usability by performing UI design and interaction optimizations.", "Contributed to building RESTful APIs using MVC architecture with a Python Flask backend. Developed integrations to exchange data between physical cash registers and external web services."],
            },
        ],
    },
    {
        title: "Software Specialist Trianing",
        company: "Neos Academy",
        period: "2023",
        iconKey: "FiCode",
        highlight: false,
        bullets: ["Developed frontend applications using HTML, CSS, JavaScript, and React.", "Built backend features with Python and Django to support application logic."],
    },
    {
        title: "BS in Electrical and Electronics Engineering ",
        company: "Akdeniz University",
        period: "2015 – 2021",
        iconKey: "FaGraduationCap",
        highlight: false,
        bullets: ["GPA: 2.72"],
    },
];

export const skillsContent = {
    services: [
        {
            title: "UI Polishing & UX Improvements",
            desc: "Refining UI details to create smooth and intuitive user experiences.",
            iconKey: "sliders",
        },
        {
            title: "Responsive Layouts",
            desc: "Mobile-first layouts that adapt cleanly across breakpoints.",
            iconKey: "smartphone",
        },
        {
            title: "Maintainability",
            desc: "Designing readable and maintainable frontend architectures for long-term projects.",
            iconKey: "shield",
        },
        {
            title: "Component-Based UI Development",
            desc: "Building clean, reusable, and scalable UI components.",
            iconKey: "grid",
        },
        {
            title: "State & Data Handling",
            desc: "Solid loading/empty/error states and predictable UI behavior.",
            iconKey: "database",
        },
        {
            title: "API & Backend Integration",
            desc: "Integrating frontend applications with backend services and APIs.",
            iconKey: "link",
        },
    ],

    frontendSkills: [
        { name: "React", iconKey: "react" },
        { name: "Next.js", iconKey: "next" },
        { name: "Vite", iconKey: "vite" },
        { name: "JavaScript", iconKey: "js" },
        { name: "TypeScript", iconKey: "ts" },
        { name: "HTML", iconKey: "html" },
        { name: "CSS", iconKey: "css" },
        { name: "SCSS", iconKey: "sass" },
        { name: "Tailwind", iconKey: "tailwind" },
        { name: "Bootstrap", iconKey: "bootstrap" },
    ],

    backendTools: [
        { name: "PostgreSQL", iconKey: "postgres" },
        { name: "Node.js", iconKey: "node" },
        { name: "Python", iconKey: "python" },
        { name: "Flask", iconKey: "flask" },
        { name: "Git", iconKey: "git" },
        { name: "GitHub", iconKey: "github" },
        { name: "Postman", iconKey: "postman" },
    ],
};

export const projects = [
    {
        title: "Wedding Asisstant",
        desc: "Search + save + categorize. Smooth UI and simple data layer.",
        tags: ["React", "Firebase", "Tailwind"],
        imageKey: "wedding",
        // liveUrl: "#",
        sourceUrl: "https://github.com/selenkunkcu",
    },
    {
        title: "Netflix Clone",
        desc: "Mobile-friendly streaming interface inspired by Netflix, including core flows like sign-in, profile selection, and managing a personal favorites list.",
        tags: ["Next.js", "TypeScript", "Tailwind", "NextAuth", "Prisma", "MongoDB"],
        imageKey: "netflix",
        // liveUrl: "#",
        sourceUrl: "https://github.com/selenkunkcu/netflix-clone",
    },
    {
        title: "NextNews",
        desc: "Kanban + role management + realtime updates. Clean UI, solid empty/loading states.",
        tags: ["React", "TypeScript", "Tailwind"],
        imageKey: "nextnews",
        // liveUrl: "#",
        sourceUrl: "https://github.com/selenkunkcu/nextnews",
    },
    {
        title: "Snapgram",
        desc: "Social Media Clone",
        tags: ["React", "Vite", "Tailwind"],
        imageKey: "snapgram",
        // liveUrl: "#",
        sourceUrl: "https://github.com/selenkunkcu/snapgram",
    },
    {
        title: "Foodies",
        desc: "Add, discover and share recipes. App Router based fundamentals application that demonstrates the core concepts and modern features of Next.js.",
        tags: ["Next.js", "CSS Modules", "SQLite"],
        imageKey: "foodies",
        // liveUrl: "#",
        sourceUrl: "https://github.com/selenkunkcu/foodies",
    },
    {
        title: "Tic-Tac-Toe Game",
        desc: "Reusable sections, typography scale, consistent spacing. Perfect for rapid launches.",
        tags: ["React", "Tailwind", "Vite"],
        imageKey: "tictactoe",
        // liveUrl: "#",
        sourceUrl: "https://github.com/selenkunkcu/tic-tac-toe",
    },
    {
        title: "To Do List",
        desc: "Basic To Do List",
        tags: ["React", "TypeScript", "Tailwind"],
        imageKey: "todolist",
        // liveUrl: "#",
        sourceUrl: "https://github.com/selenkunkcu/react-todo-app",
    },
];
