import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const solutionsLinks = [
    { title: 'Contact Center', href: '/solutions/contact-center' },
    { title: 'Auto Dialer', href: '/solutions/auto-dialer' },
    { title: 'Cloud PBX', href: '/solutions/cloud-pbx' },
    { title: 'Unified Communications', href: '/solutions/unified-communications' },
  ];

  const featuresLinks = [
    { title: 'Call Management', href: '/features/call-management' },
    { title: 'Call Reporting', href: '/features/call-reporting' },
    { title: 'Call Tracking', href: '/features/call-tracking' },
    { title: 'International Numbers', href: '/features/international-numbers' },
  ];

  const companyLinks = [
    { title: 'About Us', href: '/about' },
    { title: 'Contact', href: '/contact' },
    { title: 'Blog', href: '/blog' },
    { title: 'Support', href: '/support' },
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Phone className="h-8 w-8 text-primary" />
                <span className="font-poppins font-bold text-xl text-foreground">
                  TeleConnect
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Empowering businesses with cutting-edge telecommunications solutions. 
                From contact centers to unified communications, we deliver reliable, 
                scalable technology that drives success.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail size={16} />
                  <span>info@teleconnect.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin size={16} />
                  <span>123 Business Ave, Tech City, TC 12345</span>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-poppins font-semibold text-foreground mb-4">
                Solutions
              </h3>
              <ul className="space-y-3">
                {solutionsLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-poppins font-semibold text-foreground mb-4">
                Features
              </h3>
              <ul className="space-y-3">
                {featuresLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-poppins font-semibold text-foreground mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} TeleConnect. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;