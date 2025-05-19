import { useState } from 'react';
import { Link } from 'wouter';
import { useUser } from '@/context/UserContext';
import CharacterCard from '@/components/characters/CharacterCard';
import { characters } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const CharactersPage = () => {
  const { user, selectCharacter, selectedCharacter } = useUser();
  const [selectedId, setSelectedId] = useState<number | null>(
    selectedCharacter ? selectedCharacter.id : null
  );

  const handleSelectCharacter = (characterId: number) => {
    setSelectedId(characterId);
    selectCharacter(characterId);
    toast({
      title: "Character Selected",
      description: `You've chosen ${characters.find(c => c.id === characterId)?.name}!`,
    });
  };

  return (
    <>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-nunito font-bold text-neutral-800 mb-3">Choose Your Learning Companion</h2>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">Each character has different strengths and will guide you through your digital learning journey.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {characters.map((character) => (
          <CharacterCard 
            key={character.id} 
            character={character} 
            isSelected={selectedId === character.id}
            onSelect={handleSelectCharacter}
          />
        ))}
      </div>
      
      <div className="flex justify-between">
        <Link href="/">
          <a>
            <Button variant="outline" className="bg-neutral-200 hover:bg-neutral-300 text-neutral-700 font-nunito font-bold py-2 px-6 rounded-lg transition-colors">
              <i className="fas fa-arrow-left mr-2" aria-hidden="true"></i>Back to Home
            </Button>
          </a>
        </Link>
        <Link href="/learning-map">
          <a>
            <Button className="bg-primary hover:bg-primary/90 text-white font-nunito font-bold py-2 px-6 rounded-lg transition-colors">
              Continue to Map<i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
            </Button>
          </a>
        </Link>
      </div>
    </>
  );
};

export default CharactersPage;
