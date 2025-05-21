import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";

const zoneNames = [
  "通訊專區",
  "社群專區",
  "網路銀行專區",
  "網購專區",
  "其他專區",
];
const housePositions = [
  { top: "33%", left: "21%" }, // 通訊
  { top: "95%", left: "30%" }, // 社群
  { top: "43%", left: "50%" }, // 行動銀行
  { top: "33%", left: "79%" }, // 網購
  { top: "95%", left: "70%" }, // 其他
];
const houseImages = [
  "https://i.meee.com.tw/XY3gvAz.jpg", // 通訊
  "https://i.meee.com.tw/lV8cNng.jpg", // 社群
  "https://i.meee.com.tw/yBza2DL.jpg", // 行動銀行
  "https://i.meee.com.tw/0JtTRJc.jpg", // 網購
  "https://i.meee.com.tw/LGEKO39.jpg", // 其他
];

// 課程題目（全部以iPhone為例）
const tutorials = [
  {
    title: "通訊專區教學",
    topics: [
      {
        name: "怎麼收回LINE的訊息",
        steps: ["1. 長按要收回的訊息", "2. 選擇『收回』即可讓訊息消失"],
      },
      {
        name: "LINE怎麼加好友",
        steps: [
          "1. 打開LINE，點下方『好友』",
          "2. 點右上角『+人』圖示，選擇『行動條碼』或『ID搜尋』",
        ],
      },
      {
        name: "怎麼購買LINE的貼圖跟主題",
        steps: [
          "1. 打開LINE，點下方『錢包』",
          "2. 進入『貼圖小舖』或『主題小舖』，找到喜歡的點購買",
        ],
      },
      {
        name: "怎麼用LINE包紅包給女兒",
        steps: [
          "1. 進入LINE聊天，點『+』",
          "2. 選『紅包』，輸入金額與對象即可發送",
        ],
      },
    ],
  },
  {
    title: "社群專區教學",
    topics: [
      {
        name: "IG限時動態簡單操作",
        steps: [
          "1. 打開IG，左上角點『你的大頭貼』",
          "2. 拍照或選擇相片，按『分享至限時動態』",
        ],
      },
      {
        name: "IG貼文怎麼發",
        steps: [
          "以iPhone為例：",
          "1. 打開IG，點下方『+』",
          "2. 選擇相片或影片，點『下一步』、編輯好就可以發佈",
        ],
      },
      {
        name: "IG怎麼用QR code加好友",
        steps: [
          "1. 進入IG個人頁，點右上角『≡』",
          "2. 點『QR code』，給對方掃描或自己掃描對方的",
        ],
      },
    ],
  },
  {
    title: "行動銀行專區教學",
    topics: [
      {
        name: "怎麼轉帳給女兒",
        steps: [
          "1. 開啟銀行App，登入帳號",
          "2. 點選『轉帳』，填寫女兒的帳戶資訊與金額",
          "3. 輸入驗證碼或密碼，送出即可",
        ],
      },
      {
        name: "怎麼查看刷卡紀錄",
        steps: [
          "1. 進入銀行App，選擇信用卡服務",
          "2. 查看『消費明細』即可看到刷卡紀錄",
        ],
      },
    ],
  },
  {
    title: "網購專區教學",
    topics: [
      {
        name: "蝦皮怎麼買東西",
        steps: [
          "1. 進入蝦皮App，搜尋商品並點進商品頁",
          "2. 點『加入購物車』或『直接購買』",
          "3. 按指示填寫資料並完成付款",
        ],
      },
      {
        name: "momo怎麼買東西",
        steps: [
          "1. 打開momo App，搜尋想買的商品",
          "2. 點進去後，選擇數量與規格，加入購物車或直接結帳",
          "3. 完成付款流程",
        ],
      },
      {
        name: "有商品相關問題時該怎麼辦",
        steps: [
          "1. 在App商品頁點『聯絡賣家』或『問與答』",
          "2. 輸入問題，等待賣家回覆",
        ],
      },
    ],
  },
  {
    title: "其他專區教學",
    topics: [
      {
        name: "怎麼設定載具",
        steps: [
          "1. 下載財政部統一發票App，註冊帳號",
          "2. 點『我的載具』新增手機條碼，依指示完成即可",
        ],
      },
      {
        name: "Line Pay怎麼用",
        steps: [
          "1. 在LINE App中找到『LINE Pay』",
          "2. 綁定銀行帳戶，付款時出示QR code給店員掃描",
        ],
      },
      {
        name: "Apple Pay 怎麼用",
        steps: [
          "1. 打開『錢包』App，新增信用卡",
          "2. 付款時用iPhone靠近感應區，按兩下側邊按鈕並進行Face ID驗證",
        ],
      },
    ],
  },
];

const LearningMapPage = () => {
  const [openZone, setOpenZone] = useState<number | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const { selectedCharacter } = useUser(); // ★★ 新增這行（第74行）

  const currentZone = openZone !== null ? tutorials[openZone] : null;
  const currentTopic =
    openZone !== null && selectedTopic !== null
      ? currentZone?.topics[selectedTopic]
      : null;

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden",
        background: "#e9f5dc", // 更淺更明亮的綠
      }}
    >
      <div
        className="relative min-h-[calc(100vh-180px)] py-14 flex flex-col items-center"
        style={{ zIndex: 1 }}
      >
        {/* ★★ 新增這一段（放在 h2 上方，第92行） */}
        {selectedCharacter && (
          <div className="flex items-center mb-6">
            <div className="mr-3" style={{ fontSize: 52 }}>
              {selectedCharacter.icon}
            </div>
            <div>
              <span className="font-bold text-lg">
                {selectedCharacter.name}
              </span>
              <span className="ml-2 text-gray-500">陪你一起學習！</span>
            </div>
          </div>
        )}

        <h2
          className="text-3xl md:text-4xl font-bold mb-8 text-macaron-pink"
          style={{
            color: "#444",
            fontFamily:
              "Quicksand, Noto Sans TC, Poppins, Comic Sans MS, cursive, sans-serif",
            letterSpacing: "1.5px",
          }}
        >
          數位小鎮學習地圖
        </h2>
        {/* ...你後面所有內容全部不變 */}
        <div className="w-full flex justify-center mb-10">
          <span
            className="text-lg text-gray-secondary text-center whitespace-nowrap"
            style={{ fontWeight: 500 }}
          >
            點選各專區即可學習不同手機技能唷！
          </span>
        </div>
        {/* ...全部照原本 */}
        {/* 地圖主體 */}
        <div
          className="relative w-full h-[48vw] max-h-[420px] mx-auto"
          style={{ minHeight: 320, maxWidth: 1600 }}
        >
          {zoneNames.map((zone, idx) => (
            <div
              key={idx}
              style={{
                position: "absolute",
                ...housePositions[idx],
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: 2,
              }}
              onClick={() => {
                setOpenZone(idx);
                setSelectedTopic(null);
              }}
            >
              <img
                src={houseImages[idx]}
                alt={zoneNames[idx]}
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 36,
                  objectFit: "contain",
                  background: "none",
                  border: "none",
                  marginBottom: 0,
                  boxShadow: "none",
                  filter: "none",
                }}
              />
              <div
                className="mt-2 text-base md:text-lg font-bold text-macaron-pink"
                style={{ color: "#444", textShadow: "none" }}
              >
                {zone}
              </div>
            </div>
          ))}
        </div>
        {/* ...所有後面內容一字不動 */}
        {/* Modal：教學主題清單 */}
        {openZone !== null && selectedTopic === null && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.13)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
            }}
            onClick={() => setOpenZone(null)}
          >
            <div
              style={{
                background: "#fff",
                padding: 30,
                borderRadius: 20,
                minWidth: 320,
                maxWidth: 400,
                position: "relative",
                boxShadow: "0 8px 32px rgba(0,0,0,0.16)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 style={{ fontSize: 22, marginBottom: 18, color: "#74b13d" }}>
                {currentZone?.title}
              </h2>
              <ul
                style={{ paddingLeft: 0, textAlign: "left", marginBottom: 16 }}
              >
                {currentZone?.topics.map((topic, idx) => (
                  <li
                    key={idx}
                    style={{
                      marginBottom: 14,
                      fontSize: 17,
                      fontWeight: 500,
                      cursor: "pointer",
                      borderRadius: 10,
                      padding: "8px 16px",
                      background: "#f4fbe3",
                      transition: "background 0.18s",
                    }}
                    onClick={() => setSelectedTopic(idx)}
                  >
                    {topic.name}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  color: "#77ab59",
                  marginTop: 16,
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                更多實用教學陸續上線，敬請期待！
              </div>
              <button
                style={{
                  position: "absolute",
                  top: 10,
                  right: 18,
                  fontSize: 22,
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  color: "#aaa",
                  fontWeight: 600,
                }}
                onClick={() => setOpenZone(null)}
                aria-label="關閉"
              >
                ×
              </button>
            </div>
          </div>
        )}
        {/* Modal：教學詳細步驟 */}
        {openZone !== null && selectedTopic !== null && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.13)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10000,
            }}
            onClick={() => setSelectedTopic(null)}
          >
            <div
              style={{
                background: "#fff",
                padding: 30,
                borderRadius: 20,
                minWidth: 320,
                maxWidth: 400,
                position: "relative",
                boxShadow: "0 8px 32px rgba(0,0,0,0.16)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 style={{ fontSize: 20, marginBottom: 16, color: "#74b13d" }}>
                {currentTopic?.name}
              </h3>
              <ol
                style={{ paddingLeft: 18, textAlign: "left", marginBottom: 14 }}
              >
                {currentTopic?.steps.map((step, idx) => (
                  <li
                    key={idx}
                    style={{ marginBottom: 12, fontSize: 16, fontWeight: 500 }}
                  >
                    {step}
                  </li>
                ))}
              </ol>
              <button
                style={{
                  position: "absolute",
                  top: 10,
                  right: 45,
                  fontSize: 17,
                  border: "none",
                  background: "#eaf8d7",
                  borderRadius: "8px",
                  cursor: "pointer",
                  color: "#4b8537",
                  fontWeight: 600,
                  padding: "3px 15px",
                  boxShadow: "0 1px 4px #bbe29866",
                }}
                onClick={() => setSelectedTopic(null)}
                aria-label="返回上一頁"
              >
                返回
              </button>
              <button
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  fontSize: 22,
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  color: "#aaa",
                  fontWeight: 600,
                }}
                onClick={() => {
                  setOpenZone(null);
                  setSelectedTopic(null);
                }}
                aria-label="關閉"
              >
                ×
              </button>
            </div>
          </div>
        )}
        {/* 下方導覽按鈕區 */}
        <div
          className="w-full flex justify-between items-center px-6 py-5 mt-12"
          style={{
            position: "sticky",
            bottom: 0,
            left: 0,
            zIndex: 5,
            background: "transparent",
            boxShadow: "none",
            maxWidth: 1200,
            margin: "120px auto 0 auto",
          }}
        >
          <Link href="/characters">
            <a>
              <Button
                className="btn-cute"
                style={{
                  fontWeight: 600,
                  backgroundColor: "#FDA4B8",
                  color: "#A44A60",
                }}
              >
                夥伴選擇
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
                }}
              >
                回首頁
              </Button>
            </a>
          </Link>
          <Link href="/ask">
            <a>
              <Button
                className="btn-cute"
                style={{
                  fontWeight: 600,
                  backgroundColor: "#FDA4B8",
                  color: "#A44A60",
                }}
              >
                我還要問！
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearningMapPage;
