import { useUser } from '@/context/UserContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { formatNumber } from '@/lib/utils';
import { getLevelTitle } from '@/lib/utils';

const Header = () => {
  const { user, loading } = useUser();

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2 text-primary text-2xl">
            <i className="fas fa-mobile-alt" aria-hidden="true"></i>
          </div>
          <h1 className="text-xl md:text-2xl font-nunito font-bold text-neutral-800">DigiLearn</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Progress Indicator */}
          {!loading && user && (
            <>
              <div className="hidden md:flex items-center">
                <div className="w-32 bg-neutral-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full" 
                    style={{ 
                      width: `${(user.progress.points / user.progress.totalPointsForNextLevel) * 100}%` 
                    }}
                  ></div>
                </div>
                <span className="ml-2 text-sm font-medium text-neutral-600">
                  Level {user.level}
                </span>
              </div>
              
              {/* Points */}
              <div className="hidden md:flex items-center text-secondary font-bold">
                <i className="fas fa-star mr-1" aria-hidden="true"></i>
                <span>{formatNumber(user.points)} pts</span>
              </div>
            </>
          )}
          
          {/* Language Switcher */}
          <LanguageSwitcher />
          
          {/* User Menu */}
          <div className="relative">
            <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
              <i className="fas fa-user" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
