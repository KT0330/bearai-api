import { ReactNode } from "react";
import { useLocation } from "wouter";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [location] = useLocation();

  // 只用 main，沒有多餘元素
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-[#f7f6f3] px-0 py-0">
      {children}
    </main>
  );
};

export default MainLayout;
