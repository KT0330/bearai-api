import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStatusColor(status: 'completed' | 'in-progress' | 'locked') {
  switch (status) {
    case 'completed':
      return 'text-status-success';
    case 'in-progress':
      return 'text-primary';
    case 'locked':
      return 'text-neutral-500';
    default:
      return 'text-neutral-500';
  }
}

export function getStatusBgColor(status: 'completed' | 'in-progress' | 'locked') {
  switch (status) {
    case 'completed':
      return 'bg-status-success';
    case 'in-progress':
      return 'bg-primary';
    case 'locked':
      return 'bg-neutral-400';
    default:
      return 'bg-neutral-400';
  }
}

export function getLevelTitle(level: number): string {
  switch (level) {
    case 1:
      return 'Digital Novice';
    case 2:
      return 'Digital Beginner';
    case 3:
      return 'Digital Apprentice';
    case 4:
      return 'Digital Navigator';
    case 5:
      return 'Digital Expert';
    default:
      return 'Digital Learner';
  }
}

export function getDifficultyColor(difficulty: 'Beginner' | 'Intermediate' | 'Advanced') {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-accent';
    case 'Intermediate':
      return 'bg-secondary';
    case 'Advanced':
      return 'bg-primary';
    default:
      return 'bg-accent';
  }
}

export function renderStars(rating: number): string {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  let result = '';
  
  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    result += '<i class="fas fa-star" aria-hidden="true"></i>';
  }
  
  // Add half star if needed
  if (hasHalfStar) {
    result += '<i class="fas fa-star-half-alt" aria-hidden="true"></i>';
  }
  
  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    result += '<i class="far fa-star" aria-hidden="true"></i>';
  }
  
  return result;
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}

export function formatPercent(value: number): string {
  return `${Math.round(value)}%`;
}
