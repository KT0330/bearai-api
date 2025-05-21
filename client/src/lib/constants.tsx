// 角色資料（繁體中文＋icon元件）
import { MeiMei, YouYou, LanLan } from "@/components/characters/GummyBears";

// 角色資料（繁體中文＋icon元件）
export const characters = [
  {
    id: 1,
    name: "莓莓",
    icon: <MeiMei />,
    description: "粉紅莓果風味的小熊，熱情又有耐心，陪你慢慢學習！",
    tags: ["可愛", "溫柔", "耐心"],
  },
  {
    id: 2,
    name: "柚柚",
    icon: <YouYou />,
    description: "淡黃柚子風味的小熊，活潑又貼心，是你最溫暖的朋友！",
    tags: ["貼心", "樂觀", "溫暖"],
  },
  {
    id: 3,
    name: "藍藍",
    icon: <LanLan />,
    description: "清新藍莓風味的小熊，冷靜又細心，幫你釐清每個步驟！",
    tags: ["冷靜", "細心", "分析力"],
  },
];

// 學習地區資料
export const learningZones = [
  {
    id: "communication",
    name: "通訊專區",
    description: "學會打電話、視訊、傳訊息、Email 等基礎溝通功能。",
    icon: "comment-dots",
    position: { top: "15%", left: "20%" },
    status: "completed",
    lessons: [
      {
        id: 1,
        title: "打電話",
        status: "completed",
        progress: 100,
      },
      {
        id: 2,
        title: "視訊通話",
        status: "completed",
        progress: 100,
      },
      {
        id: 3,
        title: "訊息傳送",
        status: "completed",
        progress: 100,
      },
    ],
  },
  {
    id: "social",
    name: "社群專區",
    description: "學會使用社群軟體、分享照片、加朋友、隱私設定。",
    icon: "users",
    position: { top: "30%", left: "40%" },
    status: "in-progress",
    lessons: [
      {
        id: 1,
        title: "建立個人檔案",
        status: "completed",
        progress: 100,
      },
      {
        id: 2,
        title: "安全分享照片",
        status: "in-progress",
        progress: 50,
      },
      {
        id: 3,
        title: "隱私權設定",
        status: "locked",
        progress: 0,
      },
    ],
  },
  {
    id: "shopping",
    name: "網購專區",
    description: "學會網路購物、付款、查訂單、退貨。",
    icon: "shopping-cart",
    position: { top: "25%", right: "25%" },
    status: "locked",
    lessons: [
      {
        id: 1,
        title: "瀏覽商品",
        status: "locked",
        progress: 0,
      },
      {
        id: 2,
        title: "安全結帳",
        status: "locked",
        progress: 0,
      },
      {
        id: 3,
        title: "訂單管理",
        status: "locked",
        progress: 0,
      },
    ],
  },
  {
    id: "banking",
    name: "行動銀行專區",
    description: "查詢餘額、轉帳、繳費、行動支付都學得會！",
    icon: "piggy-bank",
    position: { bottom: "35%", left: "30%" },
    status: "locked",
    lessons: [
      {
        id: 1,
        title: "查詢餘額",
        status: "locked",
        progress: 0,
      },
      {
        id: 2,
        title: "轉帳",
        status: "locked",
        progress: 0,
      },
      {
        id: 3,
        title: "行動支付",
        status: "locked",
        progress: 0,
      },
    ],
  },
  {
    id: "entertainment",
    name: "娛樂專區",
    description: "影音、音樂、電子書、遊戲 APP 輕鬆玩！",
    icon: "film",
    position: { bottom: "20%", right: "35%" },
    status: "locked",
    lessons: [
      {
        id: 1,
        title: "看影片",
        status: "locked",
        progress: 0,
      },
      {
        id: 2,
        title: "音樂 APP",
        status: "locked",
        progress: 0,
      },
      {
        id: 3,
        title: "電子書 & 有聲書",
        status: "locked",
        progress: 0,
      },
    ],
  },
];

// 小遊戲
export const games = [
  {
    id: 1,
    name: "滑動大師",
    description: "學會點擊、滑動、縮放的基本手勢！",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    difficulty: "初學者",
    duration: "5 分鐘",
    points: 50,
    locked: false,
  },
  {
    id: 2,
    name: "訊息高手",
    description: "練習打字、貼圖、傳照片，變身 LINE 達人！",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    difficulty: "初學者",
    duration: "10 分鐘",
    points: 75,
    locked: false,
  },
  {
    id: 3,
    name: "APP 探險家",
    description: "在各種 APP 裡完成指定任務，找對按鈕過關！",
    image:
      "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    difficulty: "進階",
    duration: "15 分鐘",
    points: 100,
    locked: false,
  },
  {
    id: 4,
    name: "支付好夥伴",
    description: "練習行動支付、轉帳與查餘額，安全又簡單！",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    difficulty: "高手",
    duration: "20 分鐘",
    points: 150,
    locked: true,
  },
  {
    id: 5,
    name: "聯絡人達人",
    description: "學會新增、管理、打電話、傳訊息超簡單！",
    image:
      "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    difficulty: "初學者",
    duration: "10 分鐘",
    points: 75,
    locked: false,
  },
  {
    id: 6,
    name: "資安守護者",
    description: "認識詐騙、強密碼、保護個資一次學會！",
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    difficulty: "進階",
    duration: "15 分鐘",
    points: 125,
    locked: true,
  },
];

// 成就資料
export const achievements = [
  {
    id: 1,
    name: "新手上路",
    image:
      "https://pixabay.com/get/gbf1d10cec7bd75eb21c2ad8551206e477ebd8e25ab3c707ed5819bb8bee3758a6a8a3d8cfcee54f2274424d4f1b0a701ffa2e1b9ad0263b78764377d9d52989d_1280.jpg",
    unlocked: true,
  },
  {
    id: 2,
    name: "導航高手",
    image:
      "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    unlocked: true,
  },
  {
    id: 3,
    name: "訊息高手",
    image:
      "https://images.unsplash.com/photo-1579869847557-1f67382cc158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    unlocked: true,
  },
  {
    id: 4,
    name: "視訊達人",
    image:
      "https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    unlocked: true,
  },
  {
    id: 5,
    name: "照片達人",
    image: "",
    unlocked: false,
  },
  {
    id: 6,
    name: "社群活躍",
    image: "",
    unlocked: false,
  },
];

// 新手步驟
export const gettingStartedSteps = [
  {
    id: 1,
    title: "選擇角色",
    description: "挑選最適合你的學習風格與小熊角色，開始冒險！",
    icon: "1",
    link: "/characters",
    linkText: "馬上挑選 →",
  },
  {
    id: 2,
    title: "探索地圖",
    description: "在數位小鎮不同地區探索手機技能，邊玩邊學！",
    icon: "2",
    link: "/learning-map",
    linkText: "開始探索 →",
  },
  {
    id: 3,
    title: "小遊戲挑戰",
    description: "透過互動遊戲和任務練習手機日常操作～",
    icon: "3",
    link: "/mini-games",
    linkText: "馬上挑戰 →",
  },
];

// 為什麼選擇我們
export const features = [
  {
    id: 1,
    title: "真實情境模擬",
    description: "用生活場景練習，學會手機技能更有自信！",
    icon: "theater-masks",
    iconColor: "#82c9a5",
  },
  {
    id: 2,
    title: "動手操作",
    description: "互動練習，模擬真實手機操作，邊玩邊學！",
    icon: "mobile-alt",
    iconColor: "#f7a8b8",
  },
  {
    id: 3,
    title: "好玩有成就",
    description: "完成任務就能拿到可愛小徽章和積分，邊學邊收集！",
    icon: "trophy",
    iconColor: "#e4ce76",
  },
];

// 支援語言
export const languages = [];
export const navigationTabs = [];
export const skills = [];
export const recentActivities = [];
