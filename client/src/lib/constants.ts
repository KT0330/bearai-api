// Character data
export const characters = [
  {
    id: 1,
    name: "Grandma Wei",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    description: "Perfect for beginners who want to learn at a relaxed pace. Specializes in communication apps.",
    tags: ["Patient", "Communication", "Beginner"],
  },
  {
    id: 2,
    name: "Tech Xiao Li",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    description: "Great for those who want to learn quickly and explore more advanced features and apps.",
    tags: ["Tech-Savvy", "Fast-Paced", "Advanced"],
  },
  {
    id: 3,
    name: "Auntie Zhang",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    description: "Focuses on practical daily tasks like online shopping, banking, and transportation apps.",
    tags: ["Practical", "Shopping", "Intermediate"],
  },
  {
    id: 4,
    name: "Grandpa Chen",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    description: "Specializes in health, news, and entertainment apps with a focus on well-being.",
    tags: ["Health", "Entertainment", "Beginner"],
  },
  {
    id: 5,
    name: "Social Mei",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    description: "Expert in social media, photo editing, and staying connected with friends and family.",
    tags: ["Social Media", "Photography", "Intermediate"],
  },
  {
    id: 6,
    name: "Business Liang",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    description: "Focuses on productivity apps, mobile payments, and business communication tools.",
    tags: ["Productivity", "Finance", "Advanced"],
  },
];

// Learning zones data
export const learningZones = [
  {
    id: "communication",
    name: "Communication Zone",
    description: "Master the basics of phone calls, video calls, messaging, and email communication.",
    icon: "comment-dots",
    position: { top: "15%", left: "20%" },
    status: "completed",
    lessons: [
      { 
        id: 1, 
        title: "Making Phone Calls",
        status: "completed",
        progress: 100
      },
      { 
        id: 2, 
        title: "Video Calling",
        status: "completed",
        progress: 100
      },
      { 
        id: 3, 
        title: "Messaging Basics",
        status: "completed",
        progress: 100
      },
    ]
  },
  {
    id: "social",
    name: "Social Media Zone",
    description: "Learn how to use popular social media apps, share photos, connect with friends, and manage your privacy settings.",
    icon: "users",
    position: { top: "30%", left: "40%" },
    status: "in-progress",
    lessons: [
      { 
        id: 1, 
        title: "Creating Your Profile",
        status: "completed",
        progress: 100
      },
      { 
        id: 2, 
        title: "Sharing Photos Safely",
        status: "in-progress",
        progress: 50
      },
      { 
        id: 3, 
        title: "Privacy Settings",
        status: "locked",
        progress: 0
      },
    ]
  },
  {
    id: "shopping",
    name: "Online Shopping Zone",
    description: "Discover how to browse products, make secure purchases, track orders, and return items.",
    icon: "shopping-cart",
    position: { top: "25%", right: "25%" },
    status: "locked",
    lessons: [
      { 
        id: 1, 
        title: "Browsing Products",
        status: "locked",
        progress: 0
      },
      { 
        id: 2, 
        title: "Making Secure Purchases",
        status: "locked",
        progress: 0
      },
      { 
        id: 3, 
        title: "Managing Orders",
        status: "locked",
        progress: 0
      },
    ]
  },
  {
    id: "banking",
    name: "Mobile Banking Zone",
    description: "Learn to check balances, transfer money, pay bills, and use mobile payment apps safely.",
    icon: "piggy-bank",
    position: { bottom: "35%", left: "30%" },
    status: "locked",
    lessons: [
      { 
        id: 1, 
        title: "Checking Balances",
        status: "locked",
        progress: 0
      },
      { 
        id: 2, 
        title: "Making Transfers",
        status: "locked",
        progress: 0
      },
      { 
        id: 3, 
        title: "Mobile Payments",
        status: "locked",
        progress: 0
      },
    ]
  },
  {
    id: "entertainment",
    name: "Entertainment Zone",
    description: "Explore apps for watching videos, listening to music, reading books, and playing games.",
    icon: "film",
    position: { bottom: "20%", right: "35%" },
    status: "locked",
    lessons: [
      { 
        id: 1, 
        title: "Video Streaming",
        status: "locked",
        progress: 0
      },
      { 
        id: 2, 
        title: "Music Apps",
        status: "locked",
        progress: 0
      },
      { 
        id: 3, 
        title: "E-books & Audiobooks",
        status: "locked",
        progress: 0
      },
    ]
  },
];

// Games data
export const games = [
  {
    id: 1,
    name: "Swipe Master",
    description: "Learn essential touch screen gestures: tap, swipe, pinch, and zoom in this interactive game.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    difficulty: "Beginner",
    duration: "5 minutes",
    points: 50,
    locked: false
  },
  {
    id: 2,
    name: "Text Master",
    description: "Practice typing messages, using emojis, and sending photos in a simulated chat environment.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    difficulty: "Beginner",
    duration: "10 minutes",
    points: 75,
    locked: false
  },
  {
    id: 3,
    name: "App Explorer",
    description: "Navigate through different apps and complete tasks by finding the right buttons and menus.",
    image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    difficulty: "Intermediate",
    duration: "15 minutes",
    points: 100,
    locked: false
  },
  {
    id: 4,
    name: "Payment Pal",
    description: "Learn to safely make mobile payments, transfer money, and check your balance in a secure environment.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    difficulty: "Advanced",
    duration: "20 minutes",
    points: 150,
    locked: true
  },
  {
    id: 5,
    name: "Contact Manager",
    description: "Master adding, editing, and organizing contacts, plus making calls and sending messages.",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    difficulty: "Beginner",
    duration: "10 minutes",
    points: 75,
    locked: false
  },
  {
    id: 6,
    name: "Security Guardian",
    description: "Learn to identify scams, create strong passwords, and keep your personal information safe.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    difficulty: "Intermediate",
    duration: "15 minutes",
    points: 125,
    locked: true
  },
];

// Achievements data
export const achievements = [
  {
    id: 1,
    name: "First Steps",
    image: "https://pixabay.com/get/gbf1d10cec7bd75eb21c2ad8551206e477ebd8e25ab3c707ed5819bb8bee3758a6a8a3d8cfcee54f2274424d4f1b0a701ffa2e1b9ad0263b78764377d9d52989d_1280.jpg",
    unlocked: true
  },
  {
    id: 2,
    name: "Navigation Pro",
    image: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    unlocked: true
  },
  {
    id: 3,
    name: "Message Master",
    image: "https://images.unsplash.com/photo-1579869847557-1f67382cc158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    unlocked: true
  },
  {
    id: 4,
    name: "Video Star",
    image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    unlocked: true
  },
  {
    id: 5,
    name: "Photo Pro",
    image: "",
    unlocked: false
  },
  {
    id: 6,
    name: "Social Butterfly",
    image: "",
    unlocked: false
  },
];

// Recent activities data
export const recentActivities = [
  {
    id: 1,
    type: "lesson",
    title: "Completed \"Creating a Social Media Profile\"",
    time: "Today, 10:30 AM",
    points: 50,
    icon: "graduation-cap"
  },
  {
    id: 2,
    type: "game",
    title: "Played \"Swipe Master\" mini-game",
    time: "Yesterday, 3:45 PM",
    points: 25,
    icon: "gamepad"
  },
  {
    id: 3,
    type: "achievement",
    title: "Earned \"Video Star\" badge",
    time: "Yesterday, 2:15 PM",
    points: 100,
    icon: "medal"
  },
  {
    id: 4,
    type: "lesson",
    title: "Completed \"Video Calling Basics\"",
    time: "3 days ago",
    points: 75,
    icon: "graduation-cap"
  },
];

// Skills data
export const skills = [
  { 
    id: 1, 
    name: "Basic Navigation", 
    progress: 100 
  },
  { 
    id: 2, 
    name: "Messaging & Calls", 
    progress: 90 
  },
  { 
    id: 3, 
    name: "Social Media", 
    progress: 60 
  },
  { 
    id: 4, 
    name: "Online Shopping", 
    progress: 20 
  },
  { 
    id: 5, 
    name: "Mobile Banking", 
    progress: 0 
  },
];

// Getting started steps
export const gettingStartedSteps = [
  {
    id: 1,
    title: "Choose Your Character",
    description: "Select a character who matches your learning style and goals.",
    icon: "1",
    link: "/characters",
    linkText: "Choose now →"
  },
  {
    id: 2,
    title: "Explore the Map",
    description: "Navigate through different learning zones to develop specific skills.",
    icon: "2",
    link: "/learning-map",
    linkText: "See the map →"
  },
  {
    id: 3,
    title: "Complete Challenges",
    description: "Play mini-games and complete tasks to practice your digital skills.",
    icon: "3",
    link: "/mini-games",
    linkText: "Try a game →"
  },
];

// Testimonials data
export const testimonials = [
  {
    id: 1,
    name: "Li Mei",
    age: 65,
    image: "https://pixabay.com/get/g91c6d239a33384b59d20a92cfe84602a2f7315e8a2736a6263003a6ebc77d326e09c1693c151779021cd9b571c3fece28bfc2dbfd799d377db7e5f5c90c262eb_1280.jpg",
    text: "I was afraid of smartphones before, but now I can video call my grandchildren easily! The step-by-step tutorials were very helpful.",
    duration: "Started 3 months ago",
    rating: 5
  },
  {
    id: 2,
    name: "Wang Wei",
    age: 52,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    text: "The games made learning fun! I can now use mobile banking apps confidently. My children are impressed with how much I've learned.",
    duration: "Started 6 months ago",
    rating: 4.5
  }
];

// Features data
export const features = [
  {
    id: 1,
    title: "Realistic Scenarios",
    description: "Practice in real-life situations to build confidence",
    icon: "theater-masks",
    iconColor: "secondary"
  },
  {
    id: 2,
    title: "Hands-On Practice",
    description: "Interactive exercises that simulate actual phone usage",
    icon: "mobile-alt",
    iconColor: "primary"
  },
  {
    id: 3,
    title: "Fun Rewards",
    description: "Earn points and badges as you master new skills",
    icon: "trophy",
    iconColor: "accent"
  }
];

// Supported languages
export const languages = [
  { 
    code: "en", 
    name: "English" 
  },
  { 
    code: "zh", 
    name: "中文" 
  }
];

// Navigation tabs
export const navigationTabs = [
  {
    id: "home",
    name: "Home",
    icon: "home",
    path: "/"
  },
  {
    id: "characters",
    name: "Characters",
    icon: "users",
    path: "/characters"
  },
  {
    id: "learning-map",
    name: "Learning Map",
    icon: "map-marked-alt",
    path: "/learning-map"
  },
  {
    id: "mini-games",
    name: "Mini-Games",
    icon: "gamepad",
    path: "/mini-games"
  },
  {
    id: "progress",
    name: "Progress",
    icon: "chart-line",
    path: "/progress"
  }
];
