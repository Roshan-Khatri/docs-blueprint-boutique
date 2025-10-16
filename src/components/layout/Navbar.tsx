
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useSiteSettings } from '@/hooks/useSanityContent';
import { urlFor } from '@/sanity/image';


const defaultNavItems = [
  { title: 'Home', href: '/' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { data: siteSettings } = useSiteSettings();

  // Logo
  const logoImg = siteSettings?.logoImage ? urlFor(siteSettings.logoImage).url() : null;
  const siteName = siteSettings?.siteName || 'FoneRoute';

  // Navigation links from CMS or fallback
  let navigationItems = siteSettings?.navigationLinks?.length
    ? [...defaultNavItems, ...siteSettings.navigationLinks.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))]
    : [
        ...defaultNavItems,
        { title: 'Solutions', href: '/solutions' },
        { title: 'Features', href: '/features' },
        { title: 'Industries', href: '/industries' },
        { title: 'Pricing', href: '/pricing' },
        { title: 'About', href: '/about' },
      ];

  // Pricing link visibility
  if (!siteSettings?.showPricingInNav) {
    navigationItems = navigationItems.filter(item => item.title !== 'Pricing');
  }

  // CTA button
  const ctaText = siteSettings?.ctaButtonText || 'Contact Sales';
  const ctaLink = siteSettings?.ctaButtonLink || '/solutions/contact-center';

  // Solutions/Features dropdowns remain dynamic
  const solutionsItems = [
    { title: 'Contact Center Solution', href: '/solutions/contact-center' },
    { title: 'Auto Dialer', href: '/solutions/auto-dialer' },
    { title: 'Power Dialer', href: '/solutions/power-dialer' },
    { title: 'Predictive Dialer', href: '/solutions/predictive-dialer' },
    { title: 'Cloud PBX', href: '/solutions/cloud-pbx' },
    { title: 'Unified Communications', href: '/solutions/unified-communications' },
  ];
  const featuresItems = [
    { title: 'Contact Center Features', href: '/solutions/contact-center' },
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
            {logoImg ? (
              <img src={logoImg} alt={siteName} className="h-8 w-8 object-contain" />
            ) : (
              <Phone className="h-8 w-8 text-primary" />
            )}
            <span className="font-poppins font-bold text-xl text-foreground">
              {siteName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6 justify-start">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link
                      to={item.href}
                      className={`font-medium transition-colors ${
                        isActiveRoute(item.href)
                          ? 'text-primary'
                          : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuItem>
                ))}


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
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <Link to={ctaLink}>
                <Button variant="outline" size="sm" className="btn-secondary">
                  {ctaText}
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
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block py-2 text-foreground hover:text-primary font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}

              <Link
                to={ctaLink}
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full btn-hero">
                  {ctaText}
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