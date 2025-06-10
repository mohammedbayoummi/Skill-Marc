
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const team = [
    {
      name: "Dr. marco",
      role: "Founder & CEO",
      image: "dr.marco.jpg",
      bio: "Educational technology pioneer with 15+ years in online learning."
    },
    {
      name: "hapipa",
      role: "sales",
      image: "hapipa.jpg",
      bio: "Communicate with students registered in the course and the marketing manager for the platform"
    },
    {
      name: "Kerolos",
      role: "Lead Designer",
      image: "Kerolos.jpg",
      bio: "Award-winning designer with expertise in educational user experience."
    },
    {
      name: "Mohammed Bayoummi",
      role: "Technology Director",
      image: "mohammed.jpg",
      bio: "Full-stack developer passionate about accessible education technology."
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for the highest quality in every course, interaction, and learning experience."
    },
    {
      title: "Accessibility",
      description: "Quality education should be available to everyone, regardless of background or location."
    },
    {
      title: "Community",
      description: "Learning is better together. We foster connections that last beyond the classroom."
    },
    {
      title: "Innovation",
      description: "We continuously evolve our methods to provide the most effective learning experience."
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-skill-blue to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Skill Marc
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Empowering learners worldwide with professional education and a supportive community.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-skill-blue mb-6">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Skill Marc was founded in 2020 with a simple yet powerful vision: to make high-quality 
              professional education accessible to everyone, everywhere. What started as a small initiative 
              has grown into a thriving global community of learners and educators.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We recognized that traditional education wasn't keeping pace with the rapidly evolving 
              job market. Skills like digital marketing, web development, and graphic design were 
              in high demand, but quality training was either expensive or hard to find.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we're proud to have helped thousands of students advance their careers, 
              start new businesses, and achieve their professional goals through our comprehensive 
              courses and supportive community.
            </p>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
              alt="Skill Marc team working together"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-skill-blue mb-6 text-center">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-muted/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-skill-orange mb-4">Mission</h3>
                <p className="text-lg text-muted-foreground">
                  To provide accessible, high-quality professional education that empowers individuals 
                  to achieve their career goals and contribute meaningfully to the global economy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-skill-orange mb-4">Vision</h3>
                <p className="text-lg text-muted-foreground">
                  To become the world's most trusted platform for professional skill development, 
                  where learners from all backgrounds can unlock their potential and build successful careers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-skill-blue mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-skill-orange mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-skill-blue mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-skill-orange font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-skill-orange to-amber-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Be part of something bigger. Connect with learners from around the world and 
            accelerate your professional growth with Skill Marc.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <div className="opacity-90">Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="opacity-90">Countries Reached</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="opacity-90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
