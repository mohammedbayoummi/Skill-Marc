
import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-skill-blue to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-skill-blue mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you have questions about our courses, need technical support, or want to 
              learn more about Skill Marc Club, we're here to help. Our team typically responds 
              within 24 hours.
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-skill-orange">Support Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    For course-related questions and technical support
                  </p>
                  <a 
                    href="mailto:support@skillmarc.com" 
                    className="text-skill-blue hover:underline font-medium"
                  >
                   skillmarc@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-skill-orange">WhatsApp Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Quick questions and instant support
                  </p>
                  <a 
                    href="https://wa.me/+201069642431" 
                    className="text-skill-blue hover:underline font-medium"
                  >
                    +20 106 964 2431
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-skill-orange">Social Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Follow us for updates and community highlights
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/share/19BweB2EYF/" className="text-skill-blue hover:underline">Facebook</a>
                    {/* <a href="#" className="text-skill-blue hover:underline">Instagram</a>
                    <a href="#" className="text-skill-blue hover:underline">YouTube</a> */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-skill-blue">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-skill-orange hover:bg-skill-orange/90"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 bg-muted/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-skill-blue mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Before reaching out, you might find your answer in our FAQ section.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-skill-blue mb-2">
                  How do I access my courses after enrollment?
                </h3>
                <p className="text-muted-foreground">
                  After enrollment, you'll receive login credentials via email. Simply log in to 
                  your account to access all your courses.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-skill-blue mb-2">
                  Can I get a refund if I'm not satisfied?
                </h3>
                <p className="text-muted-foreground">
                  Yes! We offer a 30-day money-back guarantee for all paid courses. 
                  Contact our support team for assistance.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-skill-blue mb-2">
                  Do I get a certificate after completing a course?
                </h3>
                <p className="text-muted-foreground">
                  Yes, you'll receive a digital certificate of completion for each course 
                  you successfully finish.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-skill-blue mb-2">
                  How do I join Skill Marc Club?
                </h3>
                <p className="text-muted-foreground">
                  Joining the club is free! Simply create an account and you'll automatically 
                  get access to our community features.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
