
import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { CourseCard } from '@/components/CourseCard';
import { Button } from '@/components/ui/button';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'English Language',
    'Digital Marketing',
    'Graphic Design',
    'Web Development'
  ];

  const courses = [
    {
      title: "Complete English Language Mastery",
      description: "Master English from beginner to advanced level with interactive lessons and real-world practice.",
      instructor: "Dr. Emily Johnson",
      price: "$99",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      category: "English Language"
    },
    {
      title: "Business English Communication",
      description: "Professional English skills for workplace success and international business communication.",
      instructor: "James Wilson",
      price: "$79",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
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
      title: "Social Media Marketing Mastery",
      description: "Create viral content and build engaged communities across all major social platforms.",
      instructor: "Layla Hassan",
      price: "$129",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=300&fit=crop",
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
      title: "Logo Design Workshop",
      description: "Design memorable logos that capture brand essence and stand out in the marketplace.",
      instructor: "Sara Qasemi",
      price: "Free",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      category: "Graphic Design",
      isFree: true
    },
    {
      title: "Web Development Bootcamp",
      description: "Build modern websites from scratch using HTML, CSS, JavaScript, and popular frameworks.",
      instructor: "Omar Rashid",
      price: "$199",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      category: "Web Development"
    },
    {
      title: "React.js for Beginners",
      description: "Learn the most popular JavaScript library for building interactive user interfaces.",
      instructor: "Khalid Al-Mansouri",
      price: "$159",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      category: "Web Development"
    }
  ];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <Layout>
      <div className="bg-gradient-to-r from-skill-blue to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Our Courses
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Choose from our comprehensive selection of professional courses designed to 
            advance your career and unlock new opportunities.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-skill-blue mb-6">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category 
                  ? "bg-skill-orange hover:bg-skill-orange/90" 
                  : "border-skill-blue text-skill-blue hover:bg-skill-blue hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No courses found in this category.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Courses;
