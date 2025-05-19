import { useState } from 'react';
import { Link } from 'wouter';
import { useUser } from '@/context/UserContext';
import ZoneInfo from '@/components/map/ZoneInfo';
import { learningZones } from '@/lib/constants';
import { getStatusBgColor, getStatusColor } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LearningZone } from '@/lib/types';

const LearningMapPage = () => {
  const { selectedCharacter } = useUser();
  const [selectedZone, setSelectedZone] = useState<LearningZone | null>(null);

  const handleZoneClick = (zone: LearningZone) => {
    setSelectedZone(zone);
  };

  const handleCloseZoneInfo = () => {
    setSelectedZone(null);
  };

  return (
    <>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-nunito font-bold text-neutral-800 mb-3">Learning Adventure Map</h2>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">Explore different zones to master specific digital skills. Complete all challenges in a zone to unlock the next one!</p>
      </div>
      
      <div className="relative bg-white rounded-xl shadow-card p-6 mb-8">
        <div 
          className="bg-cover bg-center h-[600px] rounded-lg relative" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800')" 
          }}
        >
          {/* Render zones */}
          {learningZones.map((zone) => (
            <div 
              key={zone.id}
              className="absolute" 
              style={{ 
                top: zone.position.top, 
                left: zone.position.left, 
                bottom: zone.position.bottom, 
                right: zone.position.right 
              }}
            >
              <div 
                className={`map-node w-16 h-16 ${getStatusBgColor(zone.status)} rounded-full flex items-center justify-center text-white text-2xl cursor-pointer shadow-lg`} 
                onClick={() => handleZoneClick(zone)}
              >
                <i className={`fas fa-${zone.icon}`} aria-hidden="true"></i>
              </div>
              <div className="mt-2 bg-white rounded-lg shadow-md p-2 text-center">
                <h4 className="font-nunito font-bold">{zone.name.split(' ')[0]}</h4>
                <div className={`text-xs ${getStatusColor(zone.status)}`}>
                  {zone.status === 'completed' && (
                    <><i className="fas fa-check-circle" aria-hidden="true"></i> Completed</>
                  )}
                  {zone.status === 'in-progress' && (
                    <><i className="fas fa-spinner fa-spin" aria-hidden="true"></i> In Progress</>
                  )}
                  {zone.status === 'locked' && (
                    <><i className="fas fa-lock" aria-hidden="true"></i> Locked</>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Character Position */}
          {selectedCharacter && (
            <div className="absolute top-[30%] left-[40%] z-10 animate-bounce-slow">
              <div className="w-12 h-12 bg-white rounded-full p-1">
                <img 
                  src={selectedCharacter.image} 
                  alt={selectedCharacter.name} 
                  className="w-full h-full object-cover rounded-full border-2 border-secondary"
                />
              </div>
            </div>
          )}
        </div>
        
        {/* Zone Information */}
        {selectedZone && (
          <ZoneInfo zone={selectedZone} onClose={handleCloseZoneInfo} />
        )}
      </div>
      
      <div className="flex justify-between">
        <Link href="/characters">
          <a>
            <Button variant="outline" className="bg-neutral-200 hover:bg-neutral-300 text-neutral-700 font-nunito font-bold py-2 px-6 rounded-lg transition-colors">
              <i className="fas fa-arrow-left mr-2" aria-hidden="true"></i>Back to Characters
            </Button>
          </a>
        </Link>
        <Link href="/mini-games">
          <a>
            <Button className="bg-primary hover:bg-primary/90 text-white font-nunito font-bold py-2 px-6 rounded-lg transition-colors">
              Try Mini-Games<i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
            </Button>
          </a>
        </Link>
      </div>
    </>
  );
};

export default LearningMapPage;
