import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const solutionsItems = [
    { title: 'Contact Center Solution', href: '/solutions/contact-center' },
    { title: 'Auto Dialer', href: '/solutions/auto-dialer' },
    { title: 'Power Dialer', href: '/solutions/power-dialer' },
    { title: 'Predictive Dialer', href: '/solutions/predictive-dialer' },
    { title: 'Cloud PBX', href: '/solutions/cloud-pbx' },
    { title: 'Unified Communications', href: '/solutions/unified-communications' },
  ];

  const featuresItems = [
    { title: 'Contact Center Features', href: '/features/contact-center' },
    { title: 'Calling Features', href: '/features/calling' },
    { title: 'Call Management', href: '/features/call-management' },
    { title: 'Call Reporting', href: '/features/call-reporting' },
  ];

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Phone className="h-8 w-8 text-primary" />
            <span className="font-poppins font-bold text-xl text-foreground">
              FoneRoute
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className={`font-medium transition-colors ${
                      isActiveRoute('/') 
                        ? 'text-primary' 
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-3 p-6">
                      <div className="grid grid-cols-2 gap-3">
                        {solutionsItems.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block p-3 rounded-md hover:bg-surface-hover transition-colors"
                          >
                            <h6 className="font-medium text-sm text-foreground">
                              {item.title}
                            </h6>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-6">
                      <div className="space-y-3">
                        {featuresItems.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block p-3 rounded-md hover:bg-surface-hover transition-colors"
                          >
                            <h6 className="font-medium text-sm text-foreground">
                              {item.title}
                            </h6>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/industries" 
                    className={`font-medium transition-colors ${
                      isActiveRoute('/industries') 
                        ? 'text-primary' 
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    Industries
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/pricing" 
                    className={`font-medium transition-colors ${
                      isActiveRoute('/pricing') 
                        ? 'text-primary' 
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    Pricing
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className={`font-medium transition-colors ${
                      isActiveRoute('/about') 
                        ? 'text-primary' 
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    About
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <Link to="/contact">
                <Button variant="outline" size="sm" className="btn-secondary">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-surface-hover"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="space-y-4">
              <Link
                to="/"
                className="block py-2 text-foreground hover:text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Solutions
                </div>
                {solutionsItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block py-2 pl-4 text-foreground hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <Link
                to="/industries"
                className="block py-2 text-foreground hover:text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                Industries
              </Link>
              <Link
                to="/pricing"
                className="block py-2 text-foreground hover:text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="block py-2 text-foreground hover:text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full btn-hero">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;