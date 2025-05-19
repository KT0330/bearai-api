import { Testimonial } from '@/lib/types';
import { renderStars } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-card p-6">
      <div className="flex items-start mb-4">
        <img 
          src={testimonial.image} 
          alt={`Testimonial from ${testimonial.name}`} 
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-nunito font-bold text-lg">{testimonial.name}, {testimonial.age}</h4>
          <p className="text-neutral-500 text-sm">{testimonial.duration}</p>
        </div>
      </div>
      <p className="text-neutral-700 italic">"{testimonial.text}"</p>
      <div className="mt-3 flex text-secondary" dangerouslySetInnerHTML={{ __html: renderStars(testimonial.rating) }}>
      </div>
    </div>
  );
};

export default TestimonialCard;
