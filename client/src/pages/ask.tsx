import { useUser } from "@/context/UserContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const AskPage = () => {
  const { selectedCharacter } = useUser();
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  if (!selectedCharacter) {
    window.location.href = "/characters";
    return null;
  }

  function handleAsk() {
    if (!question.trim()) return;
    setHistory([
      ...history,
      `你：${question}`,
      `${selectedCharacter.name}：好問題，讓我想想...`,
    ]);
    setQuestion("");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f8f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 28,
          marginTop: 44,
          marginBottom: 32,
          boxShadow: "0 4px 24px #d6eadf40",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px 18px 28px 18px",
        }}
      >
        {/* 熊大頭 */}
        <div style={{ fontSize: 120, marginBottom: 10 }}>
          {selectedCharacter.icon}
        </div>
        <div
          style={{
            fontWeight: 700,
            fontSize: 32,
            color: "#74b13d",
            letterSpacing: "1.5px",
            marginBottom: 18,
            textAlign: "center",
          }}
        >
          {selectedCharacter.name}
        </div>
        {/* 聊天歷史，這裡加大高度 */}
        <div
          style={{
            width: "100%",
            minHeight: 160,
            maxHeight: 250,
            background: "#f9fcf6",
            borderRadius: 18,
            marginBottom: 20,
            padding: "22px 18px",
            boxShadow: "0 1px 8px #e4eaf722",
            overflowY: "auto",
            fontSize: 17,
            color: "#555",
            transition: "all 0.18s",
            lineHeight: 1.7,
          }}
        >
          {history.length === 0 ? (
            <div style={{ color: "#b9bcbe" }}>
              有什麼問題想問 <b>{selectedCharacter.name}</b> 嗎？
            </div>
          ) : (
            history.map((msg, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                {msg}
              </div>
            ))
          )}
        </div>
        {/* 輸入列 */}
        <div style={{ width: "100%", display: "flex", gap: 10 }}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={`輸入想問${selectedCharacter.name}的問題…`}
            style={{
              flex: 1,
              fontSize: 16,
              padding: "12px 14px",
              borderRadius: 12,
              border: "1.3px solid #bdd6a8",
              outline: "none",
              background: "#f6f8f1",
              color: "#4e6c54",
              transition: "border 0.15s",
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAsk();
            }}
          />
          <button
            onClick={handleAsk}
            style={{
              fontSize: 17,
              padding: "0 20px",
              background: "#77ab59",
              color: "#fff",
              border: "none",
              borderRadius: 12,
              fontWeight: 600,
              cursor: "pointer",
              height: 44,
              letterSpacing: 3,
              boxShadow: "0 2px 8px #bbe29844",
            }}
          >
            發送
          </button>
        </div>
      </div>

      {/* 下方導覽按鈕區 */}
      <div
        className="w-full flex justify-between items-center px-6 py-5"
        style={{
          position: "fixed", // 讓他固定吸在畫面底部
          bottom: 0,
          left: 0,
          zIndex: 20,
          background: "transparent", //透明
          boxShadow: "none",
          width: "100vw", // 貼齊
        }}
      >
        <Link href="/learning-map">
          <a>
            <Button
              className="btn-cute"
              style={{
                fontWeight: 600,
                backgroundColor: "#B7E1F7", // 跟角色選擇同色
                color: "#35688e",
                fontSize: 18,
                padding: "10px 32px",
                borderRadius: 13,
              }}
            >
              學習地圖
            </Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button
              className="btn-cute"
              style={{
                fontWeight: 600,
                backgroundColor: "#FFF4B1", // 淡黃色
                color: "#9d8500",
                fontSize: 18,
                padding: "10px 32px",
                borderRadius: 13,
              }}
            >
              回首頁
            </Button>
          </a>
        </Link>
        <Link href="/characters">
          <a>
            <Button
              className="btn-cute"
              style={{
                fontWeight: 600,
                backgroundColor: "#B7E1F7",
                color: "#35688e",
                fontSize: 18,
                padding: "10px 32px",
                borderRadius: 13,
              }}
            >
              夥伴選擇
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AskPage;
