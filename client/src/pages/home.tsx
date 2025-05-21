import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MeiMei, YouYou, LanLan } from "@/components/characters/GummyBears";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f7f6f3]">
      {/* Main Section */}
      <div className="flex flex-col items-center justify-center flex-grow py-8">
        {/* Title */}
        <h1
          className="text-[2.8rem] md:text-[4rem] font-extrabold mb-3 text-soft-black tracking-wide"
          style={{ fontFamily: "Quicksand, Noto Sans TC, cursive" }}
        >
          點點就好
        </h1>

        {/* Gummy Bears */}
        <div className="flex gap-8 md:gap-16 justify-center mb-4 md:mb-6 mt-2">
          <span style={{ width: 120, height: 120 }}>
            <MeiMei />
          </span>
          <span style={{ width: 120, height: 120 }}>
            <YouYou />
          </span>
          <span style={{ width: 120, height: 120 }}>
            <LanLan />
          </span>
        </div>

        {/* Description */}
        <div className="w-full flex justify-center">
          <p
            className="text-lg md:text-2xl text-[#7b7b7b] max-w-full mb-6 whitespace-nowrap"
            style={{ fontWeight: 500 }}
          >
            給手機新手的數位小鎮冒險，跟著小熊角色用互動遊戲學手機！
          </p>
        </div>

        {/* Button */}
        <Link href="/characters">
          <a>
            <Button
              className="btn-cute px-8 py-2 mt-2 shadow-sm"
              style={{ fontSize: "1.13rem" }}
            >
              開始學習
            </Button>
          </a>
        </Link>
      </div>

      {/* Footer / 作者資訊 */}
      <footer className="w-full flex justify-center items-center pb-5">
        <span
          className="text-sm text-gray-muted"
          style={{
            fontFamily: "Quicksand, Noto Sans TC, cursive",
            letterSpacing: "0.5px",
          }}
        >
          © 2025 林楷庭 Lin, Kai-Ting | 網站設計與角色插畫
        </span>
      </footer>
    </div>
  );
};

export default HomePage;
