import { ReactNode } from 'react';

interface ProgressCardProps {
  icon: string;
  iconColor: string;
  title: string;
  subtitle: string;
}

const ProgressCard = ({ icon, iconColor, title, subtitle }: ProgressCardProps) => {
  return (
    <div className={`bg-${iconColor}/10 rounded-lg p-4 text-center`}>
      <div className={`text-${iconColor} text-3xl mb-2`}>
        <i className={`fas fa-${icon}`} aria-hidden="true"></i>
      </div>
      <h4 className="font-nunito font-bold text-lg">{title}</h4>
      <p className="text-sm text-neutral-600">{subtitle}</p>
    </div>
  );
};

export default ProgressCard;
