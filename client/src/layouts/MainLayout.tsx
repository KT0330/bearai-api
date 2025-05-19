import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TabNavigation from '@/components/TabNavigation';
import { useLocation } from 'wouter';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col">
      <Header />
      <TabNavigation currentPath={location} />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
