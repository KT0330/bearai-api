import { Character } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface CharacterCardProps {
  character: Character;
  isSelected: boolean;
  onSelect: (characterId: number) => void;
}

const CharacterCard = ({
  character,
  isSelected,
  onSelect,
}: CharacterCardProps) => {
  return (
    <div className="flex flex-col items-center py-4 bg-transparent shadow-none border-none">
      {/* 熊熊頭像 */}
      <div className="mb-2">{character.icon}</div>
      {/* 名字 */}
      <h3 className="text-xl font-bold mb-1 text-center">{character.name}</h3>
      {/* 介紹 */}
      <p className="text-neutral-600 text-center mb-3 max-w-xs">
        {character.description}
      </p>
      {/* 標籤 */}
      <div className="flex flex-wrap justify-center mb-4 gap-2">
        {character.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* 選擇按鈕 */}
      <Button
        className={`w-full py-3 max-w-xs ${
          isSelected
            ? "bg-secondary text-white font-nunito font-bold rounded-lg"
            : "bg-primary text-white font-nunito font-bold rounded-lg hover:bg-primary/90 transition-colors"
        }`}
        disabled={isSelected}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(character.id);
        }}
      >
        {isSelected ? "已選擇" : `Select ${character.name}`}
      </Button>
    </div>
  );
};

export default CharacterCard;
