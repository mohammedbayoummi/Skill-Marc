
import { CourseCard } from './CourseCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const FeaturedCoursesSection = () => {
  const featuredCourses = [
    {
      title: "Complete English Language Mastery",
      description: "Master English from beginner to advanced level with interactive lessons and real-world practice.",
      instructor: "Dr. Emily Johnson",
      price: "$99",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      category: "English Language"
    },
    {
      title: "Digital Marketing Fundamentals",
      description: "Learn SEO, social media marketing, and online advertising strategies that drive real results.",
      instructor: "Ahmed Khalil",
      price: "$149",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "Digital Marketing"
    },
    {
      title: "Graphic Design Essentials",
      description: "Create stunning visuals with Photoshop, Illustrator, and design principles that wow clients.",
      instructor: "Fatima Al-Zahra",
      price: "$129",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      category: "Graphic Design"
    },
    {
      title: "Web Development Bootcamp",
      description: "Build modern websites from scratch using HTML, CSS, JavaScript, and popular frameworks.",
      instructor: "Omar Rashid",
      price: "$199",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      category: "Web Development"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-skill-blue mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular courses designed to boost your skills and advance your career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/courses">
            <Button size="lg" variant="outline" className="border-skill-blue text-skill-blue hover:bg-skill-blue hover:text-white">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
