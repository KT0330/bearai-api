import { Achievement } from '@/lib/types';

interface AchievementBadgeProps {
  achievement: Achievement;
}

const AchievementBadge = ({ achievement }: AchievementBadgeProps) => {
  if (achievement.unlocked) {
    return (
      <div className="text-center">
        <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-2">
          <img 
            src={achievement.image} 
            alt={`${achievement.name} badge`} 
            className="w-10 h-10 object-contain"
          />
        </div>
        <h5 className="font-nunito font-semibold text-sm">{achievement.name}</h5>
      </div>
    );
  } else {
    return (
      <div className="text-center opacity-50">
        <div className="w-16 h-16 mx-auto bg-neutral-200 rounded-full flex items-center justify-center mb-2">
          <i className="fas fa-lock text-neutral-400" aria-hidden="true"></i>
        </div>
        <h5 className="font-nunito font-semibold text-sm">{achievement.name}</h5>
      </div>
    );
  }
};

export default AchievementBadge;
