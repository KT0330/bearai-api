import { Game } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { getDifficultyColor } from '@/lib/utils';

interface GameCardProps {
  game: Game;
  onPlay: () => void;
  onPreview: () => void;
}

const GameCard = ({ game, onPlay, onPreview }: GameCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300"
      onClick={onPreview}
    >
      <img 
        src={game.image} 
        alt={`${game.name} game`} 
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-nunito font-bold text-xl">{game.name}</h3>
          <span className={`${getDifficultyColor(game.difficulty)} text-white text-xs font-bold px-2 py-1 rounded`}>
            {game.difficulty}
          </span>
        </div>
        <p className="text-neutral-600 mb-4">{game.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <i className="fas fa-clock text-neutral-500 mr-1" aria-hidden="true"></i>
            <span className="text-sm text-neutral-500">{game.duration}</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-star text-secondary mr-1" aria-hidden="true"></i>
            <span className="text-sm text-neutral-500">{game.points} points</span>
          </div>
        </div>
        
        {game.locked ? (
          <Button 
            variant="outline"
            className="w-full py-3 bg-neutral-300 text-neutral-500 font-nunito font-bold rounded-lg cursor-not-allowed"
            disabled
          >
            <i className="fas fa-lock mr-2" aria-hidden="true"></i>Locked
          </Button>
        ) : (
          <Button 
            className="w-full py-3 bg-primary text-white font-nunito font-bold rounded-lg hover:bg-primary/90 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onPlay();
            }}
          >
            Play Now
          </Button>
        )}
      </div>
    </div>
  );
};

export default GameCard;
