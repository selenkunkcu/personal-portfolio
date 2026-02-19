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
                project: "Web based ERP System",
                items: [
                    "Developed user focused, responsive interfaces using JavaScript and jQuery for a ERP web application.",
                    "Integrated frontend modules with a Node.js backend to support core business workflows.",
                    "Designed and optimized PostgreSQL SQL queries and functions powering frontend data and reports. Acted as a bridge between the database, backend services, and client-side UI to improve performance and usability.",
                ],
            },
            {
                project: "Smart Cash Register Management System",
                items: ["Built the frontend layer of a Python based next generation smart cash register management platform. Improved usability by performing UI design and interaction optimizations.", "Contributed to building RESTful APIs using MVC architecture with a Python Flask backend. Developed integrations to exchange data between physical cash registers and external web services."],
            },
        ],
    },
    {
        title: "Software Specialist Training",
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
        bullets: [],
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
            desc: "Mobile first layouts that adapt cleanly across breakpoints.",
            iconKey: "smartphone",
        },
        {
            title: "Maintainability",
            desc: "Designing readable and maintainable frontend architectures for long term projects.",
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
        title: "Weddie (in progress)",
        desc: "Wedding assistant with default tasks, budget tracker, guest list manager, and list of needs for easy planning",
        tags: ["Next", "Firebase", "TypeScript", "Tailwind"],
        imageKey: "weddie",
        // liveUrl: "#",
        sourceUrl: "https://github.com/selenkunkcu/weddie-web",
    },
    {
        title: "Netflix Clone",
        desc: "Mobile friendly streaming interface inspired by Netflix, including core flows like sign-in, profile selection, and managing a personal favorites list.",
        tags: ["Next", "TypeScript", "Tailwind", "NextAuth", "Prisma", "MongoDB"],
        imageKey: "netflix",
        // liveUrl: "#",
        sourceUrl: "https://github.com/selenkunkcu/netflix-clone",
    },
    {
        title: "NextNews",
        desc: "A compact news site showcasing Next.js App Router patterns route groups, dynamic [slug] pages, and intercepting/parallel routes with a clean, responsive UI.",
        tags: ["Next", "App Router"],
        imageKey: "nextnews",
        // liveUrl: "#",
        sourceUrl: "https://github.com/selenkunkcu/nextnews",
    },
    {
        title: "Snapgram",
        desc: "Social media platform for sharing posts, liking content, and exploring users with responsive design.",
        tags: ["Vite", "TypeScript", "Tailwind", "React Query", "Appwrite"],
        imageKey: "snapgram",
        // liveUrl: "#",
        sourceUrl: "https://github.com/selenkunkcu/snapgram",
    },
    {
        title: "Foodies",
        desc: "Add, discover and share recipes. App Router based fundamentals application that demonstrates the core concepts and modern features of Next.js.",
        tags: ["Next", "CSS Modules", "SQLite"],
        imageKey: "foodies",
        // liveUrl: "#",
        sourceUrl: "https://github.com/selenkunkcu/foodies",
    },
    {
        title: "Tic-Tac-Toe Game",
        desc: "Two player Tic-Tac-Toe game with dynamic player management and game state tracking. Built with React to demonstrate component composition, state management, and game logic implementation",
        tags: ["Vite", "CSS"],
        imageKey: "tictactoe",
        // liveUrl: "#",
        sourceUrl: "https://github.com/selenkunkcu/tic-tac-toe",
    },
    {
        title: "To Do List",
        desc: "Interactive todo application with task creation, deletion, and completion tracking.",
        tags: ["Vite", "CSS"],
        imageKey: "todolist",
        // liveUrl: "#",
        sourceUrl: "https://github.com/selenkunkcu/react-todo-app",
    },
];
