import { users, type User, type InsertUser, type Progress } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserCharacter(userId: number, characterId: number): Promise<User>;
  completeLesson(userId: number, zoneId: string, lessonId: number): Promise<User>;
  playGame(userId: number, gameId: number): Promise<User>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    
    // Create the user with the proper format
    const user: User = { 
      ...insertUser, 
      id, 
      // Ensure required fields have defaults
      progress: insertUser.progress || JSON.stringify({}),
      level: insertUser.level || 1,
      points: insertUser.points || 0,
      language: insertUser.language || 'en',
      selectedCharacterId: insertUser.selectedCharacterId || null
    };
    
    this.users.set(id, user);
    return user;
  }

  async updateUserCharacter(userId: number, characterId: number): Promise<User> {
    const user = await this.getUser(userId);
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }

    const updatedUser: User = {
      ...user,
      selectedCharacterId: characterId
    };

    this.users.set(userId, updatedUser);
    return updatedUser;
  }

  async completeLesson(userId: number, zoneId: string, lessonId: number): Promise<User> {
    const user = await this.getUser(userId);
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }

    // Simulate completion by adding points
    const pointsEarned = 50;
    const updatedUser: User = {
      ...user,
      points: user.points + pointsEarned
    };

    // Update progress if needed
    const progressData = JSON.parse(user.progress) as Progress;
    const updatedProgress: Progress = {
      ...progressData,
      points: progressData.points + pointsEarned
    };

    // Check if user should level up
    if (updatedProgress.points >= updatedProgress.totalPointsForNextLevel) {
      updatedProgress.level += 1;
      updatedProgress.points = updatedProgress.points - updatedProgress.totalPointsForNextLevel;
      updatedProgress.totalPointsForNextLevel = updatedProgress.totalPointsForNextLevel * 1.5;
      
      // Update user level too
      updatedUser.level = updatedProgress.level;
    }

    updatedUser.progress = JSON.stringify(updatedProgress);
    this.users.set(userId, updatedUser);
    return updatedUser;
  }

  async playGame(userId: number, gameId: number): Promise<User> {
    const user = await this.getUser(userId);
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }

    // Simulate game completion by adding points
    const pointsEarned = 25;
    const updatedUser: User = {
      ...user,
      points: user.points + pointsEarned
    };

    // Update progress if needed
    const progressData = JSON.parse(user.progress) as Progress;
    const updatedProgress: Progress = {
      ...progressData,
      points: progressData.points + pointsEarned
    };

    // Check if user should level up
    if (updatedProgress.points >= updatedProgress.totalPointsForNextLevel) {
      updatedProgress.level += 1;
      updatedProgress.points = updatedProgress.points - updatedProgress.totalPointsForNextLevel;
      updatedProgress.totalPointsForNextLevel = updatedProgress.totalPointsForNextLevel * 1.5;
      
      // Update user level too
      updatedUser.level = updatedProgress.level;
    }

    updatedUser.progress = JSON.stringify(updatedProgress);
    this.users.set(userId, updatedUser);
    return updatedUser;
  }
}

export const storage = new MemStorage();
