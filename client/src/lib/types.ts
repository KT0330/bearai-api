// User related types
export interface User {
  id: number;
  username: string;
  language: string;
  level: number;
  points: number;
  selectedCharacterId?: number;
  progress: {
    level: number;
    title: string;
    points: number;
    totalPointsForNextLevel: number;
  };
}

export interface Character {
  id: number;
  name: string;
  image: string;
  description: string;
  tags: string[];
}

export interface LearningZone {
  id: string;
  name: string;
  description: string;
  icon: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  status: 'completed' | 'in-progress' | 'locked';
  lessons: Lesson[];
}

export interface Lesson {
  id: number;
  title: string;
  status: 'completed' | 'in-progress' | 'locked';
  progress: number;
}

export interface Game {
  id: number;
  name: string;
  description: string;
  image: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  points: number;
  locked: boolean;
}

export interface Achievement {
  id: number;
  name: string;
  image: string;
  unlocked: boolean;
}

export interface Activity {
  id: number;
  type: 'lesson' | 'game' | 'achievement';
  title: string;
  time: string;
  points: number;
  icon: string;
}

export interface Skill {
  id: number;
  name: string;
  progress: number;
}

export interface GettingStartedStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
  linkText: string;
}

export interface Testimonial {
  id: number;
  name: string;
  age: number;
  image: string;
  text: string;
  duration: string;
  rating: number;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
}

export interface Language {
  code: string;
  name: string;
}

export interface NavigationTab {
  id: string;
  name: string;
  icon: string;
  path: string;
}

// Context types
export interface UserContextType {
  user: User | null;
  loading: boolean;
  selectedCharacter: Character | null;
  language: string;
  setLanguage: (lang: string) => void;
  selectCharacter: (characterId: number) => void;
  completeLesson: (zoneId: string, lessonId: number) => void;
  playGame: (gameId: number) => void;
}
