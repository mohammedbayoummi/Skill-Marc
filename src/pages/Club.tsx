
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Club = () => {
  const benefits = [
    {
      title: "Community Support",
      description: "Connect with like-minded learners, share experiences, and get help when you need it most."
    },
    {
      title: "Motivation & Accountability",
      description: "Stay motivated with peer support, progress sharing, and friendly accountability partners."
    },
    {
      title: "Exclusive Challenges",
      description: "Participate in monthly skill challenges, competitions, and collaborative projects."
    },
    {
      title: "Networking Opportunities",
      description: "Build professional relationships that can lead to job opportunities and collaborations."
    },
    {
      title: "Resource Sharing",
      description: "Access exclusive resources, templates, and tools shared by community members."
    },
    {
      title: "Expert Q&A Sessions",
      description: "Join live sessions with industry experts and get your questions answered directly."
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-skill-orange to-amber-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to Skill Marc Club
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-8">
            Your exclusive community for learning, growing, and succeeding together. 
            Join thousands of ambitious learners on their journey to success.
          </p>
          <Button size="lg" className="bg-white text-skill-orange hover:bg-gray-100 text-lg px-8 py-6">
            Join the Club Now
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-skill-blue mb-6">
              What is Skill Marc Club?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Skill Marc Club is more than just a community—it's your support system for personal 
              and professional growth. Our members come from diverse backgrounds but share one common 
              goal: continuous learning and improvement.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're just starting your learning journey or looking to advance your existing 
              skills, our club provides the encouragement, resources, and connections you need to succeed.
            </p>
            <div className="bg-muted/30 p-6 rounded-xl">
              <h3 className="font-semibold text-skill-blue mb-3">Club Statistics</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-skill-orange">5,000+</div>
                  <div className="text-sm text-muted-foreground">Active Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-skill-orange">50+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-skill-orange">100+</div>
                  <div className="text-sm text-muted-foreground">Success Stories</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
              alt="Skill Marc Club community"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-skill-blue mb-12 text-center">
            Benefits of Joining
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-skill-blue">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-muted/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-skill-blue mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards connecting with amazing learners from around the world. 
            Your growth journey starts here!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-skill-orange hover:bg-skill-orange/90 text-lg px-8 py-6"
            >
              Join Skill Marc Club
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-skill-blue text-skill-blue hover:bg-skill-blue hover:text-white text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Club;
