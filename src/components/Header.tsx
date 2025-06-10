
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { AuthForms } from './AuthForms';
import { useAuth } from '@/contexts/AuthContext';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: language === 'en' ? 'Home' : 'الرئيسية' },
    { path: '/club', label: language === 'en' ? 'Skill Marc Club' : 'نادي سكيل مارك' },
    { path: '/courses', label: language === 'en' ? 'Courses' : 'الدورات' },
    { path: '/about', label: language === 'en' ? 'About Us' : 'من نحن' },
    { path: '/contact', label: language === 'en' ? 'Contact Us' : 'اتصل بنا' },
  ];

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-primary rounded-full mr-2"></div>
                <div className="w-6 h-6 bg-gradient-accent rounded-full -ml-3"></div>
              </div>
              <img src="logo.svg" alt="logo" width="100px" />
              <span className="text-xl font-bold">
                <span className="text-skill-blue">Skill</span>
                <span className="text-skill-orange ml-1">Marc</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Language Selector & Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="px-3"
              >
                {language === 'en' ? 'العربية' : 'English'}
              </Button>
              
              {user ? (
                <div className="flex items-center space-x-3">
                  <Link to="/dashboard">
                    <Button variant="outline" size="sm">
                      Dashboard
                    </Button>
                  </Link>
                  <span className="text-sm text-muted-foreground">Hi, {user.name}</span>
                  <Button variant="outline" size="sm" onClick={logout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleAuthClick('login')}
                  >
                    {language === 'en' ? 'Login' : 'تسجيل دخول'}
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-skill-orange hover:bg-skill-orange/90"
                    onClick={() => handleAuthClick('signup')}
                  >
                    {language === 'en' ? 'Sign Up' : 'إنشاء حساب'}
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`font-medium transition-colors hover:text-primary px-2 py-1 ${
                      isActive(item.path) ? 'text-primary' : 'text-foreground'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-3 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                  >
                    {language === 'en' ? 'العربية' : 'English'}
                  </Button>
                  
                  {user ? (
                    <>
                      <Link to="/dashboard">
                        <Button variant="outline" size="sm" className="w-full">
                          Dashboard
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" onClick={logout}>
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleAuthClick('login')}
                      >
                        {language === 'en' ? 'Login' : 'تسجيل دخول'}
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-skill-orange hover:bg-skill-orange/90"
                        onClick={() => handleAuthClick('signup')}
                      >
                        {language === 'en' ? 'Sign Up' : 'إنشاء حساب'}
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthForms 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        defaultMode={authMode}
      />
    </>
  );
};
