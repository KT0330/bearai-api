import { Character } from '@/lib/types';
import { Button } from '@/components/ui/button';

interface CharacterCardProps {
  character: Character;
  isSelected: boolean;
  onSelect: (characterId: number) => void;
}

const CharacterCard = ({ character, isSelected, onSelect }: CharacterCardProps) => {
  return (
    <div 
      className={`character-card bg-white rounded-xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
        isSelected ? 'selected border-3 border-primary translate-y-[-5px]' : ''
      }`}
      onClick={() => onSelect(character.id)}
    >
      <img 
        src={character.image} 
        alt={`${character.name} character`} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-nunito font-bold text-xl mb-2">{character.name}</h3>
        <p className="text-neutral-600 mb-3">{character.description}</p>
        
        <div className="flex flex-wrap mb-4">
          {character.tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Button 
          className={`w-full py-3 ${
            isSelected 
              ? 'bg-secondary text-white font-nunito font-bold rounded-lg' 
              : 'bg-primary text-white font-nunito font-bold rounded-lg hover:bg-primary/90 transition-colors'
          }`}
          disabled={isSelected}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(character.id);
          }}
        >
          {isSelected ? 'Selected' : `Select ${character.name}`}
        </Button>
      </div>
    </div>
  );
};

export default CharacterCard;
