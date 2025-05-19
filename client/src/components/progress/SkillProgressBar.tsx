import { Skill } from '@/lib/types';

interface SkillProgressBarProps {
  skill: Skill;
}

const SkillProgressBar = ({ skill }: SkillProgressBarProps) => {
  // Determine color based on progress
  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-status-success';
    if (progress >= 40) return 'bg-primary';
    return 'bg-neutral-400';
  };

  // Determine text color based on progress
  const getTextColor = (progress: number) => {
    if (progress >= 80) return 'text-status-success';
    if (progress >= 40) return 'text-primary';
    return 'text-neutral-600';
  };

  return (
    <div>
      <div className="flex justify-between mb-1">
        <h4 className="font-nunito font-semibold">{skill.name}</h4>
        <span className={`${getTextColor(skill.progress)} text-sm font-semibold`}>{skill.progress}%</span>
      </div>
      <div className="w-full bg-neutral-200 rounded-full h-3">
        <div
          className={`${getProgressColor(skill.progress)} h-3 rounded-full`}
          style={{ width: `${skill.progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
