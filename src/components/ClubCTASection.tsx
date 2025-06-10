
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const ClubCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-skill-orange to-amber-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Skill Marc Club
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Connect with fellow learners, share your progress, participate in challenges, 
              and get motivated by our incredible community of go-getters!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/club">
                <Button 
                  size="lg" 
                  className="bg-white text-skill-orange hover:bg-gray-100 text-lg px-8 py-6"
                >
                  Join the Club
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-skill-orange text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
              alt="Community learning"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
