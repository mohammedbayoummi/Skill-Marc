
import { Layout } from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, {user?.name}!</h1>
              <p className="text-muted-foreground">Continue your learning journey</p>
            </div>
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-skill-blue">Courses Enrolled</CardTitle>
                <CardDescription>Your active courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-skill-orange">3</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-skill-blue">Progress</CardTitle>
                <CardDescription>Overall completion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-skill-orange">65%</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-skill-blue">Certificates</CardTitle>
                <CardDescription>Earned certificates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-skill-orange">1</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest learning activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-skill-orange rounded-full"></div>
                  <div>
                    <p className="font-medium">Completed: Introduction to Digital Marketing</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-skill-blue rounded-full"></div>
                  <div>
                    <p className="font-medium">Started: Advanced English Grammar</p>
                    <p className="text-sm text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
