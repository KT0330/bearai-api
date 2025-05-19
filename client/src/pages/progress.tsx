import { Link } from 'wouter';
import { useUser } from '@/context/UserContext';
import AchievementBadge from '@/components/progress/AchievementBadge';
import ActivityItem from '@/components/progress/ActivityItem';
import ProgressCard from '@/components/progress/ProgressCard';
import SkillProgressBar from '@/components/progress/SkillProgressBar';
import { achievements, recentActivities, skills } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { formatNumber, formatPercent } from '@/lib/utils';
import { getLevelTitle } from '@/lib/utils';

const ProgressPage = () => {
  const { user } = useUser();

  return (
    <>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-nunito font-bold text-neutral-800 mb-3">Your Learning Journey</h2>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">Track your progress, earn achievements, and see how much you've learned!</p>
      </div>
      
      {/* Overall Progress */}
      <div className="bg-white rounded-xl shadow-card p-6 mb-8">
        <h3 className="font-nunito font-bold text-xl mb-4">Overall Progress</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <ProgressCard 
            icon="trophy" 
            iconColor="primary" 
            title={`Level ${user?.level || 3}`} 
            subtitle={user ? getLevelTitle(user.level) : "Digital Apprentice"} 
          />
          
          <ProgressCard 
            icon="star" 
            iconColor="secondary" 
            title={formatNumber(user?.points || 450)} 
            subtitle="Points Earned" 
          />
          
          <ProgressCard 
            icon="medal" 
            iconColor="accent" 
            title={achievements.filter(a => a.unlocked).length.toString()} 
            subtitle="Badges Earned" 
          />
          
          <ProgressCard 
            icon="calendar-check" 
            iconColor="neutral-600" 
            title="14" 
            subtitle="Days Streak" 
          />
        </div>
        
        <h4 className="font-nunito font-semibold text-lg mb-3">Next Level Progress</h4>
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-neutral-600">
              {formatNumber(user?.progress.points || 450)}/{formatNumber(user?.progress.totalPointsForNextLevel || 1000)} points
            </span>
            <span className="text-neutral-600">
              {formatPercent((user?.progress.points || 450) / (user?.progress.totalPointsForNextLevel || 1000) * 100)}
            </span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-4">
            <div 
              className="bg-primary h-4 rounded-full" 
              style={{ 
                width: `${((user?.progress.points || 450) / (user?.progress.totalPointsForNextLevel || 1000)) * 100}%` 
              }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-neutral-600">
            Earn {formatNumber((user?.progress.totalPointsForNextLevel || 1000) - (user?.progress.points || 450))} more points to reach Level {(user?.level || 3) + 1}: {getLevelTitle((user?.level || 3) + 1)}
          </p>
        </div>
      </div>
      
      {/* Skills Progress */}
      <div className="bg-white rounded-xl shadow-card p-6 mb-8">
        <h3 className="font-nunito font-bold text-xl mb-4">Skills Mastery</h3>
        
        <div className="space-y-6 mb-4">
          {skills.map((skill) => (
            <SkillProgressBar key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
      
      {/* Achievements */}
      <div className="bg-white rounded-xl shadow-card p-6 mb-8">
        <h3 className="font-nunito font-bold text-xl mb-6">Your Achievements</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          {achievements.map((achievement) => (
            <AchievementBadge key={achievement.id} achievement={achievement} />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-nunito font-semibold py-2 px-6 rounded-lg transition-colors">
            View All Achievements
          </Button>
        </div>
      </div>
      
      {/* Learning History */}
      <div className="bg-white rounded-xl shadow-card p-6 mb-8">
        <h3 className="font-nunito font-bold text-xl mb-4">Recent Activity</h3>
        
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline" className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-nunito font-semibold py-2 px-6 rounded-lg transition-colors">
            View Full History
          </Button>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Link href="/mini-games">
          <a>
            <Button variant="outline" className="bg-neutral-200 hover:bg-neutral-300 text-neutral-700 font-nunito font-bold py-2 px-6 rounded-lg transition-colors">
              <i className="fas fa-arrow-left mr-2" aria-hidden="true"></i>Back to Games
            </Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button className="bg-primary hover:bg-primary/90 text-white font-nunito font-bold py-2 px-6 rounded-lg transition-colors">
              Return to Home<i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
            </Button>
          </a>
        </Link>
      </div>
    </>
  );
};

export default ProgressPage;
