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

  async function handleAsk() {
    if (!question.trim()) return;
    setHistory([
      ...history,
      `你：${question}`,
      `${selectedCharacter.name}：思考中...`,
    ]);
    setQuestion("");
    try {
      const res = await fetch("https://bearai-flask-api.onrender.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, character: selectedCharacter.name }),
      });
      const data = await res.json();
      setHistory((prev) =>
        prev.slice(0, -1).concat(`${selectedCharacter.name}：${data.answer}`),
      );
    } catch (err) {
      setHistory((prev) =>
        prev
          .slice(0, -1)
          .concat(
            `${selectedCharacter.name}：很抱歉，伺服器暫時無法回答問題...`,
          ),
      );
    }
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
        position: "relative", // <-- 裝飾用到
      }}
    >
      {/* ====== 左右均勻分散的熊掌裝飾 ====== */}
      <div
        style={{
          position: "fixed",
          zIndex: 0,
          inset: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          overflow: "hidden",
          userSelect: "none",
          background: "none",
        }}
      >
        {/* 左側 5 隻 */}
        <span
          style={{
            position: "absolute",
            top: "20vh",
            left: "3vw",
            fontSize: 62,
            opacity: 0.16,
            color: "#888999",
            transform: "rotate(-11deg)",
          }}
        >
          🐾
        </span>
        <span
          style={{
            position: "absolute",
            top: "13vh",
            left: "24vw",
            fontSize: 59,
            opacity: 0.15,
            color: "#888999",
            transform: "rotate(13deg)",
          }}
        >
          🐾
        </span>
        <span
          style={{
            position: "absolute",
            top: "41vh",
            left: "17vw",
            fontSize: 60,
            opacity: 0.15,
            color: "#888999",
            transform: "rotate(-7deg)",
          }}
        >
          🐾
        </span>
        <span
          style={{
            position: "absolute",
            top: "75vh",
            left: "32vw",
            fontSize: 60,
            opacity: 0.16,
            color: "#888999",
            transform: "rotate(7deg)",
          }}
        >
          🐾
        </span>
        <span
          style={{
            position: "absolute",
            top: "62vh",
            left: "7vw",
            fontSize: 66,
            opacity: 0.17,
            color: "#888999",
            transform: "rotate(-17deg)",
          }}
        >
          🐾
        </span>

        {/* 右側 5 隻 */}
        <span
          style={{
            position: "absolute",
            top: "8vh",
            left: "70vw",
            fontSize: 66,
            opacity: 0.17,
            color: "#888999",
            transform: "rotate(14deg)",
          }}
        >
          🐾
        </span>
        <span
          style={{
            position: "absolute",
            top: "26vh",
            left: "87vw",
            fontSize: 55,
            opacity: 0.17,
            color: "#888999",
            transform: "rotate(-11deg)",
          }}
        >
          🐾
        </span>
        <span
          style={{
            position: "absolute",
            top: "44vh",
            left: "77vw",
            fontSize: 60,
            opacity: 0.14,
            color: "#888999",
            transform: "rotate(10deg)",
          }}
        >
          🐾
        </span>
        <span
          style={{
            position: "absolute",
            top: "61vh",
            left: "91vw",
            fontSize: 56,
            opacity: 0.15,
            color: "#888999",
            transform: "rotate(-9deg)",
          }}
        >
          🐾
        </span>
        <span
          style={{
            position: "absolute",
            top: "76vh",
            left: "73vw",
            fontSize: 64,
            opacity: 0.17,
            color: "#888999",
            transform: "rotate(16deg)",
          }}
        >
          🐾
        </span>
      </div>
      {/* ====== 熊掌裝飾結束 ====== */}

      {/* 下面這邊都是你原本的內容，一個字都沒動 */}
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
        {/* 聊天歷史 */}
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
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: 20,
          background: "transparent",
          boxShadow: "none",
          width: "100vw",
        }}
      >
        <Link href="/learning-map">
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
                backgroundColor: "#FFF4B1",
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
