import { LearningZone } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { getStatusBgColor } from '@/lib/utils';

interface ZoneInfoProps {
  zone: LearningZone;
  onClose: () => void;
}

const ZoneInfo = ({ zone, onClose }: ZoneInfoProps) => {
  return (
    <div id="zone-info" className="bg-white border border-neutral-200 rounded-lg shadow-lg p-6 mt-6">
      <div className="flex justify-between items-start mb-4">
        <h3 id="zone-title" className="text-2xl font-nunito font-bold">{zone.name}</h3>
        <button 
          id="close-zone-info" 
          className="text-neutral-500 hover:text-neutral-700"
          onClick={onClose}
        >
          <i className="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
      
      <p id="zone-description" className="text-neutral-600 mb-4">{zone.description}</p>
      
      <h4 className="font-nunito font-semibold text-lg mb-3">Available Lessons:</h4>
      <div className="space-y-4 mb-6">
        {zone.lessons.map((lesson) => (
          <div key={lesson.id} className="flex items-center">
            <div className={`w-8 h-8 ${getStatusBgColor(lesson.status)} rounded-full flex items-center justify-center text-white mr-3`}>
              {lesson.status === 'completed' && <i className="fas fa-check" aria-hidden="true"></i>}
              {lesson.status === 'in-progress' && <i className="fas fa-play" aria-hidden="true"></i>}
              {lesson.status === 'locked' && <i className="fas fa-lock" aria-hidden="true"></i>}
            </div>
            <div className="flex-grow">
              <h5 className="font-nunito font-semibold">{lesson.title}</h5>
              <div className="w-full bg-neutral-200 rounded-full h-2 mt-1">
                <div 
                  className={`${getStatusBgColor(lesson.status)} h-2 rounded-full`} 
                  style={{ width: `${lesson.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Button 
        className="bg-primary hover:bg-primary/90 text-white font-nunito font-bold py-3 px-6 rounded-lg transition-colors"
        disabled={zone.status === 'locked'}
      >
        {zone.status === 'in-progress' ? 'Continue Learning' : 
         zone.status === 'completed' ? 'Review Lessons' : 'Locked'}
      </Button>
    </div>
  );
};

export default ZoneInfo;
