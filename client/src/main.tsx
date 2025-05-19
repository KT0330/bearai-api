import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add Font Awesome
document.head.innerHTML += `
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
  <title>DigiLearn - Master Mobile Skills Through Interactive Learning</title>
  <meta name="description" content="A gamified learning platform that helps digital beginners learn mobile phone skills through interactive simulations, practice exercises, and fun game mechanics.">
`;

createRoot(document.getElementById("root")!).render(<App />);
