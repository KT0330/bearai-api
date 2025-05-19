import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/user', async (req, res) => {
    try {
      // In a real app, this would come from session/auth
      const userId = 1; 
      const user = await storage.getUser(userId);
      
      if (!user) {
        // Create a new user if none exists (for demo purposes)
        const newUser = await storage.createUser({
          username: 'demo_user',
          language: 'en',
          level: 3,
          points: 450,
          selectedCharacterId: 2,
          progress: JSON.stringify({
            level: 3,
            title: 'Digital Apprentice',
            points: 450,
            totalPointsForNextLevel: 1000
          })
        });
        return res.json(newUser);
      }
      
      res.json(user);
    } catch (error) {
      console.error('Error getting user:', error);
      res.status(500).json({ message: 'Failed to get user data' });
    }
  });

  app.post('/api/user/character', async (req, res) => {
    try {
      // In a real app, this would come from session/auth
      const userId = 1;
      const { characterId } = req.body;
      
      if (!characterId || typeof characterId !== 'number') {
        return res.status(400).json({ message: 'Invalid character ID' });
      }
      
      const updatedUser = await storage.updateUserCharacter(userId, characterId);
      res.json(updatedUser);
    } catch (error) {
      console.error('Error updating character:', error);
      res.status(500).json({ message: 'Failed to update character' });
    }
  });

  app.post('/api/user/complete-lesson', async (req, res) => {
    try {
      // In a real app, this would come from session/auth
      const userId = 1;
      const { zoneId, lessonId } = req.body;
      
      if (!zoneId || !lessonId) {
        return res.status(400).json({ message: 'Invalid zone or lesson ID' });
      }
      
      const updatedUser = await storage.completeLesson(userId, zoneId, lessonId);
      res.json(updatedUser);
    } catch (error) {
      console.error('Error completing lesson:', error);
      res.status(500).json({ message: 'Failed to complete lesson' });
    }
  });

  app.post('/api/user/play-game', async (req, res) => {
    try {
      // In a real app, this would come from session/auth
      const userId = 1;
      const { gameId } = req.body;
      
      if (!gameId || typeof gameId !== 'number') {
        return res.status(400).json({ message: 'Invalid game ID' });
      }
      
      const updatedUser = await storage.playGame(userId, gameId);
      res.json(updatedUser);
    } catch (error) {
      console.error('Error recording game play:', error);
      res.status(500).json({ message: 'Failed to record game play' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
