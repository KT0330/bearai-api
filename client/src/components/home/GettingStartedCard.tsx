import { Link } from 'wouter';
import { GettingStartedStep } from '@/lib/types';

interface GettingStartedCardProps {
  step: GettingStartedStep;
}

const GettingStartedCard = ({ step }: GettingStartedCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-card p-6 hover:shadow-card-hover transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center mr-3">
          <span className="font-nunito font-bold">{step.icon}</span>
        </div>
        <h3 className="font-nunito font-bold text-lg">{step.title}</h3>
      </div>
      <p className="text-neutral-700 mb-3">{step.description}</p>
      <Link href={step.link}>
        <a className="text-primary font-semibold hover:underline">{step.linkText}</a>
      </Link>
    </div>
  );
};

export default GettingStartedCard;
