import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { 
  Phone, 
  Zap, 
  Cloud, 
  Users, 
  MessageSquare,
  PhoneCall,
  BarChart3,
  Globe,
  ArrowRight
} from 'lucide-react';

const Solutions = () => {
  const mainSolutions = [
    {
      icon: Phone,
      title: 'Contact Center Solution',
      description: 'Comprehensive contact center platform with omnichannel support, intelligent routing, and real-time analytics to enhance customer experience.',
      features: ['Omnichannel Support', 'Intelligent Routing', 'Real-time Analytics', 'CRM Integration'],
      href: '/solutions/contact-center',
      category: 'Contact Center'
    },
    {
      icon: Zap,
      title: 'Auto Dialer',
      description: 'Automated dialing solution that maximizes agent productivity with progressive, predictive, and power dialing modes.',
      features: ['Progressive Dialing', 'Predictive Algorithms', 'Call Pacing', 'Lead Management'],
      href: '/solutions/auto-dialer',
      category: 'Dialers'
    },
    {
      icon: Zap,
      title: 'Power Dialer',
      description: 'High-performance power dialing system designed for sales teams to maximize outbound calling efficiency.',
      features: ['One-Click Dialing', 'Local Presence', 'Call Recording', 'Performance Tracking'],
      href: '/solutions/power-dialer',
      category: 'Dialers'
    },
    {
      icon: Cloud,
      title: 'Cloud PBX',
      description: 'Enterprise-grade cloud-based phone system with advanced features, scalability, and 99.9% uptime guarantee.',
      features: ['HD Voice Quality', 'Auto Attendant', 'Call Forwarding', 'Mobile Apps'],
      href: '/solutions/cloud-pbx',
      category: 'Voice Solutions'
    },
    {
      icon: Users,
      title: 'Unified Communications',
      description: 'All-in-one communication platform integrating voice, video, messaging, and collaboration tools.',
      features: ['Video Conferencing', 'Team Messaging', 'File Sharing', 'Screen Sharing'],
      href: '/solutions/unified-communications',
      category: 'Collaboration'
    },
    {
      icon: MessageSquare,
      title: 'Click to Call',
      description: 'Website integration that enables instant phone connections with prospects and customers.',
      features: ['Website Widget', 'Call Tracking', 'Lead Capture', 'Analytics'],
      href: '/solutions/click-to-call',
      category: 'Web Solutions'
    }
  ];

  const additionalSolutions = [
    {
      icon: PhoneCall,
      title: 'Inbound Contact Center',
      description: 'Specialized inbound call center solution with advanced queue management and customer service tools.',
      href: '/solutions/inbound-contact-center'
    },
    {
      icon: BarChart3,
      title: 'Outbound Contact Center',
      description: 'Powerful outbound calling platform with compliance management and performance optimization.',
      href: '/solutions/outbound-contact-center'
    },
    {
      icon: Globe,
      title: 'International Numbers',
      description: 'Global phone numbers in 100+ countries to establish local presence worldwide.',
      href: '/solutions/international-numbers'
    },
    {
      icon: Phone,
      title: 'Toll-Free Numbers',
      description: 'Memorable toll-free numbers to enhance your professional image and customer accessibility.',
      href: '/solutions/toll-free-numbers'
    }
  ];

  return (
    <div>
      <PageHeader
        title="Telecommunications Solutions"
        subtitle="Comprehensive communication solutions designed to transform your business operations, enhance productivity, and drive growth across all industries."
        breadcrumb="Home / Solutions"
      />

      {/* Main Solutions Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Core Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our flagship telecommunications solutions designed to meet the diverse needs of modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainSolutions.map((solution, index) => (
              <Card key={index} className="card-professional card-hover group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-primary-light rounded-lg">
                      <solution.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-primary mb-1">
                        {solution.category}
                      </div>
                      <h3 className="text-2xl font-poppins font-semibold text-foreground mb-3">
                        {solution.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to={solution.href}>
                    <Button className="btn-hero group-hover:scale-105 transition-transform">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Solutions */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Specialized Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Additional telecommunications services to complement your communication infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalSolutions.map((solution, index) => (
              <Link key={index} to={solution.href}>
                <Card className="card-professional card-hover h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <solution.icon className="h-8 w-8 text-primary" />
                      <h3 className="text-lg font-poppins font-semibold text-foreground">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {solution.description}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      Explore Solution
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
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
};

export default Solutions;