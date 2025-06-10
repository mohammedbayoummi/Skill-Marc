
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface CourseCardProps {
  title: string;
  description: string;
  instructor: string;
  price: string;
  image: string;
  category: string;
  isFree?: boolean;
}

export const CourseCard = ({ 
  title, 
  description, 
  instructor, 
  price, 
  image, 
  category, 
  isFree = false 
}: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
          {isFree && (
            <div className="absolute top-3 right-3">
              <span className="bg-skill-orange text-white px-2 py-1 rounded-full text-xs font-medium">
                Free
              </span>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {description}
        </p>
        <p className="text-sm text-skill-blue font-medium">
          by {instructor}
        </p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-skill-orange">
            {isFree ? 'Free' : price}
          </span>
        </div>
        <Button 
          size="sm" 
          className="bg-skill-orange hover:bg-skill-orange/90"
        >
          {isFree ? 'Start Learning' : 'Enroll Now'}
        </Button>
      </CardFooter>
    </Card>
  );
};
