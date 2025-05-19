import { Link } from 'wouter';
import FeatureCard from '@/components/home/FeatureCard';
import GettingStartedCard from '@/components/home/GettingStartedCard';
import TestimonialCard from '@/components/home/TestimonialCard';
import { features, gettingStartedSteps, testimonials } from '@/lib/constants';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white rounded-xl shadow-card overflow-hidden mb-10">
        <div 
          className="h-60 md:h-96 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=600')" 
          }}
        >
          <div className="h-full w-full bg-gradient-to-r from-primary/70 to-secondary/70 flex flex-col justify-center items-center text-white p-4 text-center">
            <h1 className="text-3xl md:text-5xl font-nunito font-bold mb-2">Master Digital Skills</h1>
            <p className="text-lg md:text-xl max-w-2xl">Learn to use your mobile phone through fun, interactive scenarios and games</p>
            <Link href="/learning-map">
              <a>
                <Button className="mt-6 bg-white text-primary font-nunito font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Learning
                </Button>
              </a>
            </Link>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="mb-10">
        <h2 className="text-2xl font-nunito font-bold text-neutral-800 mb-6">Getting Started</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gettingStartedSteps.map((step) => (
            <GettingStartedCard key={step.id} step={step} />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-nunito font-bold text-neutral-800 mb-6">Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg p-8 text-white text-center">
        <h2 className="text-3xl font-nunito font-bold mb-4">Ready to Become Digital Savvy?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">Join thousands of people who have successfully learned essential digital skills through our interactive platform.</p>
        <Link href="/characters">
          <a>
            <Button className="bg-white text-primary font-nunito font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </Button>
          </a>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
