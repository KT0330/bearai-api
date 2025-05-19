import { Activity } from '@/lib/types';

interface ActivityItemProps {
  activity: Activity;
}

const ActivityItem = ({ activity }: ActivityItemProps) => {
  let iconColor;
  let bgColor;
  
  switch (activity.type) {
    case 'lesson':
      iconColor = 'text-primary';
      bgColor = 'bg-primary/10';
      break;
    case 'game':
      iconColor = 'text-secondary';
      bgColor = 'bg-secondary/10';
      break;
    case 'achievement':
      iconColor = 'text-accent';
      bgColor = 'bg-accent/10';
      break;
    default:
      iconColor = 'text-neutral-500';
      bgColor = 'bg-neutral-100';
  }

  return (
    <div className="flex items-start">
      <div className={`${bgColor} ${iconColor} rounded-full p-2 mr-4`}>
        <i className={`fas fa-${activity.icon}`} aria-hidden="true"></i>
      </div>
      <div className="flex-grow">
        <h5 className="font-nunito font-semibold">{activity.title}</h5>
        <p className="text-sm text-neutral-500">{activity.time} • Earned {activity.points} points</p>
      </div>
    </div>
  );
};

export default ActivityItem;
