
import { Layout } from '@/components/Layout';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { FeaturedCoursesSection } from '@/components/FeaturedCoursesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ClubCTASection } from '@/components/ClubCTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <FeaturedCoursesSection />
      <TestimonialsSection />
      <ClubCTASection />
    </Layout>
  );
};

export default Index;
