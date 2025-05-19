import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { User, UserContextType, Character } from '@/lib/types';
import { queryClient } from '@/lib/queryClient';
import { characters } from '@/lib/constants';

// Create context with default values
const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
  selectedCharacter: null,
  language: 'en',
  setLanguage: () => {},
  selectCharacter: () => {},
  completeLesson: () => {},
  playGame: () => {},
});

// Hook to use the context
export const useUser = () => useContext(UserContext);

// Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>(() => {
    return localStorage.getItem('language') || 'en';
  });

  // Fetch user data from API
  const { data: user, isLoading } = useQuery<User>({
    queryKey: ['/api/user'],
    refetchOnWindowFocus: false,
  });

  // Get selected character
  const selectedCharacter = user?.selectedCharacterId 
    ? characters.find(c => c.id === user.selectedCharacterId) || null
    : null;

  // Select character mutation
  const { mutate: mutateSelectCharacter } = useMutation({
    mutationFn: async (characterId: number) => {
      return await apiRequest('POST', '/api/user/character', { characterId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/user'] });
    }
  });

  // Complete lesson mutation
  const { mutate: mutateCompleteLesson } = useMutation({
    mutationFn: async (data: { zoneId: string, lessonId: number }) => {
      return await apiRequest('POST', '/api/user/complete-lesson', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/user'] });
    }
  });

  // Play game mutation
  const { mutate: mutatePlayGame } = useMutation({
    mutationFn: async (gameId: number) => {
      return await apiRequest('POST', '/api/user/play-game', { gameId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/user'] });
    }
  });

  // Update language in localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Context value
  const value = {
    user: user || null,
    loading: isLoading,
    selectedCharacter,
    language,
    setLanguage,
    selectCharacter: mutateSelectCharacter,
    completeLesson: (zoneId: string, lessonId: number) => mutateCompleteLesson({ zoneId, lessonId }),
    playGame: mutatePlayGame,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
