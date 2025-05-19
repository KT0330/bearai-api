import { Feature } from '@/lib/types';

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <div className="flex-1 text-center p-4">
      <div className={`text-${feature.iconColor} text-4xl mb-3`}>
        <i className={`fas fa-${feature.icon}`} aria-hidden="true"></i>
      </div>
      <h3 className="font-nunito font-bold text-xl mb-2">{feature.title}</h3>
      <p className="text-neutral-700">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
