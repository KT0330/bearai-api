import { useState } from 'react';
import { Link } from 'wouter';
import GameCard from '@/components/games/GameCard';
import GamePreview from '@/components/games/GamePreview';
import { games } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Game } from '@/lib/types';
import { useUser } from '@/context/UserContext';
import { toast } from '@/hooks/use-toast';

const MiniGamesPage = () => {
  const { playGame } = useUser();
  const [previewGame, setPreviewGame] = useState<Game | null>(games[0]);

  const handlePlayGame = (gameId: number) => {
    const game = games.find(g => g.id === gameId);
    if (game && !game.locked) {
      playGame(gameId);
      toast({
        title: "Game Started",
        description: `You've started playing ${game.name}!`,
      });
    }
  };

  const handlePreviewGame = (game: Game) => {
    setPreviewGame(game);
  };

  return (
    <>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-nunito font-bold text-neutral-800 mb-3">Practice with Mini-Games</h2>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">Have fun while mastering important mobile skills with these interactive games!</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {games.map((game) => (
          <GameCard 
            key={game.id} 
            game={game} 
            onPlay={() => handlePlayGame(game.id)}
            onPreview={() => handlePreviewGame(game)}
          />
        ))}
      </div>

      {/* Game Preview (Simulated) */}
      {previewGame && (
        <GamePreview game={previewGame} onPlay={() => handlePlayGame(previewGame.id)} />
      )}
      
      <div className="flex justify-between">
        <Link href="/learning-map">
          <a>
            <Button variant="outline" className="bg-neutral-200 hover:bg-neutral-300 text-neutral-700 font-nunito font-bold py-2 px-6 rounded-lg transition-colors">
              <i className="fas fa-arrow-left mr-2" aria-hidden="true"></i>Back to Map
            </Button>
          </a>
        </Link>
        <Link href="/progress">
          <a>
            <Button className="bg-primary hover:bg-primary/90 text-white font-nunito font-bold py-2 px-6 rounded-lg transition-colors">
              View Progress<i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
            </Button>
          </a>
        </Link>
      </div>
    </>
  );
};

export default MiniGamesPage;
