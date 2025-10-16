
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import {
  Phone, Zap, Cloud, Users, MessageSquare, ArrowRight, Building, Send, Mail, MapPin, Clock
} from 'lucide-react';
import { useSolutions, useSiteSettings } from '@/hooks/useSanityContent';
import type { Solution } from '@/sanity/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PortableText from '@/components/PortableText';
import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';
import { useToast } from '@/hooks/use-toast';

const solutionSlugs = ['contact-center', 'auto-dialer', 'power-dialer', 'predictive-dialer', 'cloud-pbx', 'unified-communications'];

const fallbackData: { [key: string]: Partial<Solution> } = {
  'contact-center': {
    title: 'Contact Center Solution',
    description: 'Comprehensive omnichannel platform for customer engagement, agent productivity, and operational efficiency.',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Our Contact Center Solution delivers seamless omnichannel support, intelligent routing, and real-time analytics to elevate customer experience and drive business growth.' }] }],
    features: ['Omnichannel Support', 'Intelligent Routing', 'Real-time Analytics', 'Agent Desktop', 'Quality Management', 'Workforce Management'],
    benefits: ['Increase CSAT', 'Reduce handle time', 'Improve agent utilization'],
    specifications: [{ _type: 'block', children: [{ _type: 'span', text: '99.9% uptime, enterprise-grade security, scalable architecture.' }] }],
    pricing: 'Starting at $49/user/month',
    pricingModel: 'per-user',
    testimonials: ['“FoneRoute transformed our customer service operations.”', '“Agent productivity increased by 40% after switching.”'],
    relatedSolutions: [
      { title: 'Auto Dialer', slug: { current: 'auto-dialer' } },
      { title: 'Power Dialer', slug: { current: 'power-dialer' } },
      { title: 'Unified Communications', slug: { current: 'unified-communications' } },
    ],
  },
  'auto-dialer': {
    title: 'Auto Dialer Solution',
    description: 'Automated dialing for maximum productivity.',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Boost agent efficiency and connect more calls with our Auto Dialer solution.' }] }],
    features: ['Progressive Dialing', 'Contact Management', 'Call Disposition', 'Lead Prioritization', 'Compliance Tools', 'Real-time Monitoring'],
    benefits: ['Increase productivity', 'Reduce idle time', 'Improve connection rates'],
    specifications: [{ _type: 'block', children: [{ _type: 'span', text: 'TCPA compliant, scalable, integrates with CRM.' }] }],
    pricing: 'Starting at $39/user/month',
    pricingModel: 'per-user',
    testimonials: ['“Our sales team doubled their call volume.”', '“Compliance is effortless with FoneRoute.”'],
    relatedSolutions: [
      { title: 'Power Dialer', slug: { current: 'power-dialer' } },
      { title: 'Predictive Dialer', slug: { current: 'predictive-dialer' } },
      { title: 'Contact Center', slug: { current: 'contact-center' } },
    ],
  },
  'power-dialer': {
    title: 'Power Dialer Solution',
    description: 'High-speed dialing for sales teams.',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Accelerate outbound campaigns and maximize agent talk time with our Power Dialer.' }] }],
    features: ['Rapid Dialing', 'CRM Integration', 'Call Recording', 'Disposition Tracking', 'Agent Dashboard', 'Analytics'],
    benefits: ['Boost sales productivity', 'Streamline workflows', 'Gain actionable insights'],
    specifications: [{ _type: 'block', children: [{ _type: 'span', text: 'Integrates with major CRMs, scalable, secure.' }] }],
    pricing: 'Starting at $49/user/month',
    pricingModel: 'per-user',
    testimonials: ['“Our agents love the speed and simplicity.”', '“Integration was seamless.”'],
    relatedSolutions: [
      { title: 'Auto Dialer', slug: { current: 'auto-dialer' } },
      { title: 'Predictive Dialer', slug: { current: 'predictive-dialer' } },
      { title: 'Contact Center', slug: { current: 'contact-center' } },
    ],
  },
  'predictive-dialer': {
    title: 'Predictive Dialer Solution',
    description: 'AI-powered dialing for maximum efficiency.',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Leverage machine learning to optimize call connect rates and agent utilization.' }] }],
    features: ['AI Call Scheduling', 'Abandon Rate Control', 'Real-time Analytics', 'CRM Integration', 'Compliance Management', 'Agent Performance Tracking'],
    benefits: ['Maximize agent efficiency', 'Reduce dropped calls', 'Enhance campaign ROI'],
    specifications: [{ _type: 'block', children: [{ _type: 'span', text: 'AI-driven algorithms, scalable, TCPA compliant.' }] }],
    pricing: 'Starting at $59/user/month',
    pricingModel: 'per-user',
    testimonials: ['“Our connect rates improved dramatically.”', '“Predictive logic saves us hours daily.”'],
    relatedSolutions: [
      { title: 'Auto Dialer', slug: { current: 'auto-dialer' } },
      { title: 'Power Dialer', slug: { current: 'power-dialer' } },
      { title: 'Contact Center', slug: { current: 'contact-center' } },
    ],
  },
  'cloud-pbx': {
    title: 'Cloud PBX Solution',
    description: 'Flexible, scalable business phone system.',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Empower your business with a modern, cloud-based PBX for seamless communication.' }] }],
    features: ['Virtual Extensions', 'Auto Attendant', 'Call Routing', 'Voicemail-to-Email', 'Mobile App', 'Call Analytics'],
    benefits: ['Scale effortlessly', 'Reduce hardware costs', 'Enable remote work'],
    specifications: [{ _type: 'block', children: [{ _type: 'span', text: 'Hosted in secure data centers, 99.99% uptime, global reach.' }] }],
    pricing: 'Starting at $29/user/month',
    pricingModel: 'per-user',
    testimonials: ['“Our team is more connected than ever.”', '“Setup was fast and easy.”'],
    relatedSolutions: [
      { title: 'Unified Communications', slug: { current: 'unified-communications' } },
      { title: 'Contact Center', slug: { current: 'contact-center' } },
    ],
  },
  'unified-communications': {
    title: 'Unified Communications Solution',
    description: 'All-in-one platform for business collaboration.',
    longDescription: [{ _type: 'block', children: [{ _type: 'span', text: 'Connect teams, customers, and partners with voice, video, chat, and file sharing in one platform.' }] }],
    features: ['Voice & Video Calling', 'Team Messaging', 'File Sharing', 'Presence & Status', 'Mobile & Desktop Apps', 'Third-party Integrations'],
    benefits: ['Improve collaboration', 'Reduce app sprawl', 'Enable remote work'],
    specifications: [{ _type: 'block', children: [{ _type: 'span', text: 'End-to-end encrypted, cross-platform, scalable.' }] }],
    pricing: 'Starting at $35/user/month',
    pricingModel: 'per-user',
    testimonials: ['“Our team productivity soared.”', '“One app for everything!”'],
    relatedSolutions: [
      { title: 'Cloud PBX', slug: { current: 'cloud-pbx' } },
      { title: 'Contact Center', slug: { current: 'contact-center' } },
    ],
  },
};

const labelMap: { [key: string]: string } = {
  'contact-center': 'Contact Center',
  'auto-dialer': 'Auto Dialer',
  'power-dialer': 'Power Dialer',
  'predictive-dialer': 'Predictive Dialer',
  'cloud-pbx': 'Cloud PBX',
  'unified-communications': 'Unified Communications',
};

function Solutions() {
  const { data: allSolutions, isLoading: solutionsLoading, isError: solutionsError } = useSolutions();
  const { data: siteSettings, isError: settingsError } = useSiteSettings();
  const [activeTab, setActiveTab] = useState(solutionSlugs[0]);
  const { toast } = useToast();

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && solutionSlugs.includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.location.hash = value;
  };


  if (solutionsError) console.warn('Failed to load solutions from CMS', solutionsError);
  if (settingsError) console.warn('Failed to load site settings from CMS', settingsError);

  const getSolutionData = (slug: string): Partial<Solution> => {
    const solutionFromCMS = allSolutions?.find(s => s.slug?.current === slug);
    return solutionFromCMS || fallbackData[slug];
  };

  // Contact Info and Office Locations
  let offices = [];
  if (siteSettings?.officeLocations?.length) {
    const sorted = [...siteSettings.officeLocations];
    if (typeof siteSettings.primaryOfficeIndex === 'number') {
      sorted.sort((a, b) => {
        if (a.primary) return -1;
        if (b.primary) return 1;
        return 0;
      });
      if (siteSettings.primaryOfficeIndex >= 0 && siteSettings.primaryOfficeIndex < sorted.length) {
        const [primary] = sorted.splice(siteSettings.primaryOfficeIndex, 1);
        sorted.unshift(primary);
      }
    } else {
      sorted.sort((a, b) => (b.primary ? 1 : -1));
    }
    offices = sorted.map((office) => ({
      city: office.city || '',
      address: office.address || '',
      phone: office.phone || '',
      hours: office.hours || '',
    }));
  } else {
    offices = [
      { city: 'New York', address: '123 Business Ave, Suite 100', phone: '+1 (555) 123-4567', hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST' },
      { city: 'San Francisco', address: '456 Tech Street, Floor 15', phone: '+1 (555) 987-6543', hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST' },
      { city: 'London', address: '789 Communication Blvd', phone: '+44 20 1234 5678', hours: 'Mon-Fri: 9:00 AM - 5:00 PM GMT' }
    ];
  }

  const primaryOffice = offices[0];

  const contactInfo = [
    { icon: Phone, title: 'Sales', details: siteSettings?.primaryPhone || primaryOffice?.phone || '+1 (555) 123-4567', description: 'Speak with our sales team' },
    { icon: MessageSquare, title: siteSettings?.supportPhone ? 'Support' : 'Support Email', details: siteSettings?.supportPhone || siteSettings?.supportEmail || '+1 (555) 123-4568', description: siteSettings?.supportPhone ? '24/7 technical support' : 'Contact our support team by email' },
    { icon: Mail, title: 'Email', details: siteSettings?.primaryEmail || 'info@foneroute.com', description: 'General inquiries' },
    { icon: MapPin, title: 'Address', details: primaryOffice?.address || '123 Business Ave, Tech City, TC 12345', description: 'Visit our headquarters' },
  ];

  function formatTime(time: string) {
    if (!time) return '';
    const [h, m] = time.split(':');
    let hour = parseInt(h, 10);
    const min = m !== undefined ? m : '00';
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${hour}:${min} ${ampm}`;
  }

  const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const dayLabels: { [key: string]: string } = { monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday' };

  let businessHours: { day: string, hours: string }[] = [];
  if (siteSettings?.businessHours) {
    businessHours = dayOrder
      .filter(day => siteSettings.businessHours[day])
      .map(day => {
        const hours = siteSettings.businessHours[day];
        if (typeof hours === 'object') {
          if (hours.closed) return { day: dayLabels[day], hours: 'Closed' };
          if (hours.open && hours.close) return { day: dayLabels[day], hours: `${formatTime(hours.open)} - ${formatTime(hours.close)}` };
        }
        if (typeof hours === 'string') {
          const [start, end] = hours.split('-');
          if (start && end) return { day: dayLabels[day], hours: `${formatTime(start)} - ${formatTime(end)}` };
        }
        return { day: dayLabels[day], hours: 'Closed' };
      });
  } else {
    businessHours = [
      { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
      { day: 'Sunday', hours: 'Closed' },
    ];
  }

  let supportHours = siteSettings?.supportHours || '24/7 Available';
  let holidayMessage = siteSettings?.holidayMessage || '';

  // FAQs
  const faqs = [
    {
      question: "How quickly can we get started?",
      answer: "Most implementations can begin within 24-48 hours of contract signing, with full deployment typically completed within 1-2 weeks."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide round-the-clock technical support and customer service to ensure your communications never go down."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. Our solutions integrate with most CRM, helpdesk, and business applications through APIs and pre-built connectors."
    },
    {
      question: "What's included in the setup?",
      answer: "We provide complete setup, configuration, training, and ongoing support. No hidden fees or additional charges for standard implementation."
    }
  ];

  return (
    <div>
      <PageHeader
        title="Our Solutions"
        subtitle="Comprehensive telecommunications solutions designed to transform your business communications and drive growth"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          {solutionsLoading ? (
            <div aria-busy="true" className="container-custom" role="status" aria-live="polite">
              <div className="flex space-x-4 mb-8">
                <div className="h-10 w-28 bg-muted/40 rounded animate-pulse"></div>
                <div className="h-10 w-28 bg-muted/40 rounded animate-pulse"></div>
                <div className="h-10 w-28 bg-muted/40 rounded animate-pulse"></div>
                <div className="h-10 w-28 bg-muted/40 rounded animate-pulse hidden md:block"></div>
                <div className="h-10 w-28 bg-muted/40 rounded animate-pulse hidden lg:block"></div>
                <div className="h-10 w-28 bg-muted/40 rounded animate-pulse hidden lg:block"></div>
              </div>
              <div className="space-y-8">
                <div className="h-32 bg-muted/40 rounded animate-pulse"></div>
                <div className="h-64 bg-muted/40 rounded animate-pulse"></div>
                <div className="h-48 bg-muted/40 rounded animate-pulse"></div>
              </div>
            </div>
          ) : (
            <Tabs value={activeTab} onValueChange={handleTabChange} defaultValue={solutionSlugs[0]}>
              <TabsList className="flex w-full overflow-x-auto">
                {solutionSlugs.map(slug => {
                  const solution = getSolutionData(slug);
                  return (
                    <TabsTrigger key={slug} value={slug} className="flex-shrink-0">{solution.title || labelMap[slug]}</TabsTrigger>
                  )
                })}
              </TabsList>

              {solutionSlugs.map(slug => {
                const s = getSolutionData(slug);
                return (
                  <TabsContent key={slug} value={slug} className="mt-8">
                    {/* Overview */}
                    <div className="max-w-4xl mx-auto mb-12">
                      <PortableText value={s.longDescription ?? []} className="prose prose-lg" />
                    </div>

                    {/* Features Grid */}
                    <section className="section-padding bg-surface">
                      <div className="container-custom">
                        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {(s.features ?? []).map((f, i) => (
                            <Card key={i} className="card-professional card-hover">
                              <CardContent className="p-6 font-semibold text-foreground">{f}</CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </section>

                    {/* Benefits */}
                    <section className="section-padding bg-background">
                      <div className="container-custom max-w-3xl">
                        <h2 className="text-2xl font-bold mb-4">Business Benefits</h2>
                        <ul className="list-disc pl-6 text-lg space-y-2">
                          {(s.benefits ?? []).map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      </div>
                    </section>

                    {/* Specifications */}
                    <section className="section-padding bg-surface">
                      <div className="container-custom max-w-3xl">
                        <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
                        <PortableText value={s.specifications ?? []} className="prose" />
                      </div>
                    </section>

                    {/* Testimonials */}
                    {s.testimonials && s.testimonials.length > 0 && (
                      <section className="section-padding bg-background">
                        <div className="container-custom max-w-3xl">
                          <h2 className="text-2xl font-bold mb-4">Customer Testimonials</h2>
                          <ul className="space-y-4">
                            {s.testimonials.map((t, i) => (
                              <li key={i} className="italic text-muted-foreground">"{t}"</li>
                            ))}
                          </ul>
                        </div>
                      </section>
                    )}

                    {/* Pricing */}
                    <section className="section-padding bg-surface">
                      <div className="container-custom max-w-2xl">
                        <h2 className="text-2xl font-bold mb-4">Pricing</h2>
                        <div className="text-lg font-semibold mb-2">{s.pricing || 'Contact us for pricing details.'}</div>
                        <div className="text-muted-foreground">Model: {s.pricingModel || 'Custom'}</div>
                      </div>
                    </section>

                    {/* Related Solutions */}
                    {s.relatedSolutions && s.relatedSolutions.length > 0 && (
                      <section className="section-padding bg-background">
                        <div className="container-custom">
                          <h2 className="text-2xl font-bold mb-4">Related Solutions</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {s.relatedSolutions.map((rel, i) => (
                              <a key={i} href={`#${rel.slug?.current}`} onClick={() => handleTabChange(rel.slug.current)} className="block">
                                <Card className="card-professional card-hover">
                                  <CardContent className="p-4 font-semibold text-primary">{rel.title}</CardContent>
                                </Card>
                              </a>
                            ))}
                          </div>
                        </div>
                      </section>
                    )}

                    {/* Contact Form & Info */}
                    <section className="section-padding bg-surface">
                      <div className="container-custom">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                          <ContactForm solution={slug} />
                          <ContactInfo contactInfo={contactInfo} businessHours={businessHours} supportHours={supportHours} holidayMessage={holidayMessage} />
                        </div>
                      </div>
                    </section>

                    {/* Office Locations */}
                    <section className="section-padding bg-background">
                      <div className="container-custom">
                        <div className="text-center mb-12">
                          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">Our Locations</h2>
                          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Visit us at one of our global offices</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {offices.map((office, index) => (
                            <Card key={index} className="card-professional card-hover text-center">
                              <CardContent className="p-8">
                                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">{office.city}</h3>
                                <div className="space-y-2 text-muted-foreground">
                                  <p>{office.address}</p>
                                  <p className="font-medium text-foreground">{office.phone}</p>
                                  <p className="text-sm">{office.hours}</p>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </section>

                    {/* FAQs */}
                    <section className="section-padding bg-surface">
                      <div className="container-custom">
                        <div className="text-center mb-12">
                          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                          {faqs.map((faq, index) => (
                            <Card key={index} className="card-professional">
                              <CardContent className="p-6">
                                <h3 className="font-poppins font-semibold text-foreground mb-3">{faq.question}</h3>
                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </section>

                  </TabsContent>
                )
              })}
            </Tabs>
          )}
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Solutions by Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our telecommunications solutions are tailored to meet the unique requirements of different industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Startups', 'Small Business', 'Enterprise', 'Healthcare', 'Finance', 'Education'].map((industry, index) => (
              <Link key={index} to={`/industries/${industry.toLowerCase().replace(' ', '-')}`}>
                <Card className="card-professional card-hover text-center py-6">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-foreground">{industry}</h4>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/industries">
              <Button variant="outline" size="lg" className="btn-secondary">
                View All Industries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experts help you choose the right telecommunications solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-primary px-8 py-4"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions;
