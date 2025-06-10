import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AuthForms } from './AuthForms';
import { useAuth } from '@/contexts/AuthContext';

export const HeroSection = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-skill-blue via-primary to-skill-light-blue">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Master New Skills with 
                <span className="text-skill-orange block">Skill Marc</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                Join thousands of learners advancing their careers with our professional courses 
                in English, Digital Marketing, Graphic Design, and Web Development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {user ? (
                  <Link to="/dashboard">
                    <Button 
                      size="lg" 
                      className="bg-skill-orange hover:bg-skill-orange/90 text-lg px-8 py-6"
                    >
                      Go to Dashboard
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    size="lg" 
                    className="bg-skill-orange hover:bg-skill-orange/90 text-lg px-8 py-6"
                    onClick={() => setIsAuthOpen(true)}
                  >
                    Start Learning Today
                  </Button>
                )}
                <Link to="/club">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-orang hover:bg-white hover:text-skill-blue text-lg px-8 py-6"
                  >
                    Join Skill Marc Club
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-slide-in">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                  alt="Students learning together"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-skill-orange w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                      5K+
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Active Students</p>
                      <p className="text-xs text-muted-foreground">Learning Daily</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-skill-blue w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                      98%
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Success Rate</p>
                      <p className="text-xs text-muted-foreground">Course Completion</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthForms 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        defaultMode="signup"
      />
    </>
  );
};
