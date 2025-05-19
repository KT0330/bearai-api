import { Link } from 'wouter';
import { navigationTabs } from '@/lib/constants';

interface TabNavigationProps {
  currentPath: string;
}

const TabNavigation = ({ currentPath }: TabNavigationProps) => {
  return (
    <div className="bg-white border-b border-neutral-200 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto flex overflow-x-auto">
        {navigationTabs.map((tab) => (
          <Link key={tab.id} href={tab.path}>
            <a 
              className={`py-4 px-6 font-nunito font-semibold text-center focus:outline-none whitespace-nowrap ${
                currentPath === tab.path 
                  ? 'tab active text-primary border-b-3 border-primary' 
                  : 'tab text-neutral-600 hover:text-neutral-800'
              }`}
            >
              <i className={`fas fa-${tab.icon} mr-2`} aria-hidden="true"></i>
              {tab.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
