import { Link } from "wouter";

const tutorials = [
  {
    title: "LINE 怎麼加好友",
    description:
      "學會如何在 LINE 裡新增朋友，無論是用手機號碼、ID、或是 QR Code！",
    steps: [
      "打開 LINE App",
      "點選主頁右上角「加好友」圖示",
      "選擇用電話號碼、ID、或掃描 QR Code",
      "輸入朋友資訊並送出邀請",
    ],
  },
  {
    title: "LINE 怎麼收回訊息",
    description: "教你在 LINE 不小心傳錯話時，如何快速收回訊息。",
    steps: [
      "長按想要收回的訊息",
      "點選「收回」",
      "訊息會從你和對方的聊天室都消失",
    ],
  },
  // 你可以繼續新增更多教學主題
];

export default function SocialTutorialPage() {
  return (
    <div className="min-h-screen bg-[#BBE298] flex flex-col items-center py-8 px-4">
      <Link href="/learning-map" className="mb-4 self-start">
        <button className="bg-white text-green-700 rounded-xl px-4 py-2 shadow hover:bg-green-50">
          ← 返回學習地圖
        </button>
      </Link>
      <h1 className="text-3xl font-bold text-green-800 mb-4">社群專區教學</h1>
      <div className="w-full max-w-xl space-y-6">
        {tutorials.map((tutorial, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              {tutorial.title}
            </h2>
            <p className="mb-3 text-gray-600">{tutorial.description}</p>
            <ol className="list-decimal list-inside text-gray-800 space-y-1">
              {tutorial.steps.map((step, stepIdx) => (
                <li key={stepIdx}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
