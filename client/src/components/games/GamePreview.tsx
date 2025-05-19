import { Game } from '@/lib/types';
import { Button } from '@/components/ui/button';

interface GamePreviewProps {
  game: Game;
  onPlay: () => void;
}

const GamePreview = ({ game, onPlay }: GamePreviewProps) => {
  // Using Swipe Master preview for all games for simplicity
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h3 className="font-nunito font-bold text-xl mb-4">Featured Game: {game.name}</h3>
      
      <div className="bg-neutral-100 rounded-lg p-4 mb-6">
        <div className="max-w-xs mx-auto bg-neutral-800 rounded-3xl p-2 shadow-lg">
          <div className="bg-white rounded-2xl p-4 h-[400px] relative overflow-hidden">
            <div className="text-center mb-6">
              <h4 className="font-nunito font-bold text-lg">Learn to Swipe</h4>
              <p className="text-sm text-neutral-600">Swipe left to right as shown below</p>
            </div>
            
            <div className="flex justify-center items-center h-48 border-2 border-dashed border-neutral-300 rounded-lg">
              <div className="text-center">
                <div className="text-4xl text-primary mb-3">
                  <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
                </div>
                <p className="text-sm font-medium text-neutral-600">Swipe from left to right</p>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <Button 
                className="bg-primary text-white font-nunito font-semibold px-6 py-2 rounded-full shadow-md"
                disabled={game.locked}
              >
                Try Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <Button 
          className="bg-primary hover:bg-primary/90 text-white font-nunito font-bold py-3 px-8 rounded-lg transition-colors"
          onClick={onPlay}
          disabled={game.locked}
        >
          {game.locked ? 'Locked' : 'Start Full Game'}
        </Button>
      </div>
    </div>
  );
};

export default GamePreview;
