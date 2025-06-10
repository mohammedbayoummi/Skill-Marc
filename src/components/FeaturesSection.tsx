
import { Book, BookOpen, Calendar } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: Book,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with years of real-world experience in their respective fields."
    },
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Engage with hands-on projects, quizzes, and assignments that reinforce your learning journey."
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Study at your own pace with lifetime access to course materials and community support."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-skill-blue mb-4">
            Why Choose Skill Marc?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing you with the best learning experience through innovative 
            teaching methods and a supportive community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group hover:bg-white hover:shadow-lg rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-skill-blue">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
