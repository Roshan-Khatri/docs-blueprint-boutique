import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Twitter, Linkedin, Facebook, Youtube, Instagram } from 'lucide-react';
import { useSiteSettings } from '@/hooks/useSanityContent';
import { urlFor } from '@/sanity/image';

const staticSolutionsLinks = [
  { title: 'Contact Center', href: '/solutions/contact-center' },
  { title: 'Auto Dialer', href: '/solutions/auto-dialer' },
  { title: 'Cloud PBX', href: '/solutions/cloud-pbx' },
  { title: 'Unified Communications', href: '/solutions/unified-communications' },
];
const staticFeaturesLinks = [
  { title: 'Call Management', href: '/features/call-management' },
  { title: 'Call Reporting', href: '/features/call-reporting' },
  { title: 'Call Tracking', href: '/features/call-tracking' },
  { title: 'International Numbers', href: '/features/international-numbers' },
];
const staticCompanyLinks = [
  { title: 'About Us', href: '/about' },
  { title: 'Contact', href: '/solutions/contact-center' },
  { title: 'Blog', href: '/blog' },
  { title: 'Support', href: '/support' },
];
const staticLegalLinks = [
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'Terms of Service', href: '/terms' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { data: siteSettings } = useSiteSettings();

  const solutionsLinks = siteSettings?.footerSolutionsLinks || staticSolutionsLinks;
  const featuresLinks = siteSettings?.footerFeaturesLinks || staticFeaturesLinks;
  const companyLinks = siteSettings?.footerCompanyLinks || staticCompanyLinks;
  const legalLinks = siteSettings?.footerLegalLinks || staticLegalLinks;

  const siteName = siteSettings?.siteName || 'FoneRoute';
  const logoImg = siteSettings?.logoImage ? urlFor(siteSettings.logoImage).url() : null;
  const description = siteSettings?.footerDescription || 'Empowering businesses with cutting-edge telecommunications solutions. From contact centers to unified communications, we deliver reliable, scalable technology that drives success.';
  const tagline = siteSettings?.companyTagline;
  const primaryOffice = siteSettings?.officeLocations?.find(o => o.primary) || siteSettings?.officeLocations?.[0];
  const phone = siteSettings?.primaryPhone || primaryOffice?.phone || '+1 (555) 123-4567';
  const email = siteSettings?.primaryEmail || 'info@foneroute.com';
  const address = primaryOffice?.address || '123 Business Ave, Tech City, TC 12345';
  const social = siteSettings?.socialLinks || {};
  const copyrightText = siteSettings?.copyrightText || `© ${currentYear} ${siteName}. All rights reserved.`;

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                {logoImg ? (
                  <img src={logoImg} alt={siteName} className="h-8 w-8 object-contain" />
                ) : (
                  <Phone className="h-8 w-8 text-primary" />
                )}
                <span className="font-poppins font-bold text-xl text-foreground">
                  {siteName}
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                {description}
                {tagline && <span className="block mt-2 font-semibold text-primary">{tagline}</span>}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone size={16} />
                  <span>{phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail size={16} />
                  <span>{email}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin size={16} />
                  <span>{address}</span>
                </div>
              </div>
              {/* Social Links */}
              <div className="flex space-x-3 mt-4">
                {social.twitter && <a href={social.twitter} target="_blank" rel="noopener noreferrer"><Twitter size={20} className="text-muted-foreground hover:text-primary" /></a>}
                {social.linkedin && <a href={social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} className="text-muted-foreground hover:text-primary" /></a>}
                {social.facebook && <a href={social.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={20} className="text-muted-foreground hover:text-primary" /></a>}
                {social.youtube && <a href={social.youtube} target="_blank" rel="noopener noreferrer"><Youtube size={20} className="text-muted-foreground hover:text-primary" /></a>}
                {social.instagram && <a href={social.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20} className="text-muted-foreground hover:text-primary" /></a>}
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
              {copyrightText}
            </div>
            <div className="flex space-x-6 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;