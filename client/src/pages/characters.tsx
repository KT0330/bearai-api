import { useState } from "react";
import { Link } from "wouter";
import { useUser } from "@/context/UserContext";
import { characters } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const CharactersPage = () => {
  const [, setLocation] = useLocation();
  const { selectCharacter, selectedCharacter } = useUser();
  const [selectedId, setSelectedId] = useState<number | null>(
    selectedCharacter ? selectedCharacter.id : null,
  );

  const handleSelectCharacter = (characterId: number) => {
    setSelectedId(characterId);
    selectCharacter(characterId);
    setLocation("/learning-map");
  };

  return (
    <div className="min-h-[calc(100vh-160px)] flex flex-col items-center py-14 px-4 bg-[#fffdf8]">
      <h2
        className="font-bold mb-7 text-macaron-pink"
        style={{
          fontSize: "30px", // 直接指定字體大小
          letterSpacing: "2px",
          fontFamily:
            "Quicksand, Noto Sans TC, Poppins, Comic Sans MS, cursive, sans-serif",
        }}
      >
        每個夥伴都有不同的個性與回答風格喔！快來選一位陪你學習吧 🐻✨
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl mb-12">
        {characters.map((c) => (
          <div
            key={c.id}
            className={`card-cute flex flex-col items-center py-7`}
            style={{
              minHeight: 340,
              background: "#fff",
              boxShadow: "0 6px 36px #fbeff2b0",
              border:
                selectedId === c.id
                  ? "2.5px solid #F87CA0"
                  : "2.5px solid #ffe6ef",
              transition: "border .2s",
            }}
          >
            <div
              className="gummy-bg mb-2"
              style={{ background: "none", boxShadow: "none" }}
            >
              {c.icon}
            </div>
            <h3
              className="text-xl font-bold mb-2"
              style={{
                fontFamily:
                  "Quicksand, Noto Sans TC, Poppins, Comic Sans MS, cursive, sans-serif",
              }}
            >
              {c.name}
            </h3>
            <p
              className="text-soft-black text-center mb-5"
              style={{ minHeight: 44 }}
            >
              {c.description}
            </p>
            <Button
              className="btn-cute mt-2"
              style={{
                width: 96,
                fontWeight: 600,
                fontSize: 17,
                borderRadius: 999,
                background: selectedId === c.id ? "#F87CA0" : "",
                color: selectedId === c.id ? "#fff" : "#D95C7A",
                boxShadow:
                  selectedId === c.id
                    ? "0 2px 16px #F87CA055"
                    : "0 1px 6px #fbeff2b3",
              }}
              onClick={() => handleSelectCharacter(c.id)}
            >
              我選牠！
            </Button>
          </div>
        ))}
      </div>

      {/* 下方導航按鈕，分左右對齊 */}
      <div className="flex w-full max-w-5xl justify-between px-2 mt-2">
        <Link href="/">
          <a>
            <Button
              variant="outline"
              className="btn-cute bg-macaron-pink text-white py-2 px-10 rounded-full shadow transition-all font-bold"
              style={{
                fontFamily:
                  "Quicksand, Noto Sans TC, Comic Sans MS, cursive, sans-serif",
                fontWeight: 700,
              }}
            >
              回首頁
            </Button>
          </a>
        </Link>
        <Link href="/ask">
          <a>
            <Button
              className="btn-cute bg-macaron-pink text-white py-2 px-10 rounded-full shadow transition-all font-bold"
              style={{
                fontFamily:
                  "Quicksand, Noto Sans TC, Comic Sans MS, cursive, sans-serif",
                fontWeight: 700,
              }}
            >
              我要直接問！
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CharactersPage;
