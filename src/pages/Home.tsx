import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Phone, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Home = () => {
  const features = [
    {
      icon: Phone,
      title: 'Contact Center Solutions',
      description: 'Advanced inbound and outbound contact center technology with intelligent routing and real-time analytics.'
    },
    {
      icon: Zap,
      title: 'Auto & Predictive Dialers',
      description: 'Boost productivity with automated dialing solutions that maximize agent efficiency and call connection rates.'
    },
    {
      icon: Shield,
      title: 'Cloud PBX',
      description: 'Reliable, scalable phone systems hosted in the cloud with enterprise-grade security and 99.9% uptime.'
    },
    {
      icon: Users,
      title: 'Unified Communications',
      description: 'Seamlessly integrate voice, video, messaging, and collaboration tools in one powerful platform.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Gain actionable insights with comprehensive reporting and real-time dashboards to optimize performance.'
    },
    {
      icon: Globe,
      title: 'Global Numbers',
      description: 'Establish local presence worldwide with toll-free, local, and international phone numbers.'
    }
  ];

  const solutions = [
    {
      title: 'Contact Center',
      description: 'Complete contact center solution with omnichannel support',
      href: '/solutions/contact-center'
    },
    {
      title: 'Auto Dialer',
      description: 'Automated dialing to maximize agent productivity',
      href: '/solutions/auto-dialer'
    },
    {
      title: 'Cloud PBX',
      description: 'Enterprise phone system in the cloud',
      href: '/solutions/cloud-pbx'
    },
    {
      title: 'Unified Communications',
      description: 'All-in-one communication and collaboration platform',
      href: '/solutions/unified-communications'
    }
  ];

  const benefits = [
    'Increase productivity by up to 300%',
    'Reduce operational costs by 40%',
    '99.9% uptime guarantee',
    '24/7 expert support',
    'Enterprise-grade security',
    'Seamless integrations'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(16, 185, 129, 0.8)), url(${heroImage})`
        }}
      >
        <div className="container-custom">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-6">
              Transform Your Business{' '}
              <span className="text-accent-light">Communications</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-white/90">
              Empower your business with cutting-edge contact center solutions, 
              cloud PBX systems, and unified communications that scale with your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="btn-hero text-lg px-8 py-4">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4"
                >
                  View Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Why Choose FoneRoute?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the power of modern telecommunications technology designed 
              to enhance productivity, reduce costs, and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-professional card-hover">
                <CardContent className="p-8">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive telecommunications solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Link key={index} to={solution.href}>
                <Card className="card-professional card-hover h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-poppins font-semibold text-foreground mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {solution.description}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/solutions">
              <Button size="lg" className="btn-hero">
                View All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">
                Proven Results That Drive Success
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join thousands of businesses that have transformed their operations 
                with our telecommunications solutions. See measurable improvements 
                in productivity, cost savings, and customer satisfaction.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button size="lg" className="btn-hero">
                  Start Your Transformation
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              <Card className="card-professional p-8 text-center">
                <h3 className="text-4xl font-poppins font-bold text-primary mb-2">300%</h3>
                <p className="text-muted-foreground">Increase in Productivity</p>
              </Card>
              <div className="grid grid-cols-2 gap-6">
                <Card className="card-professional p-6 text-center">
                  <h3 className="text-2xl font-poppins font-bold text-accent mb-2">99.9%</h3>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                </Card>
                <Card className="card-professional p-6 text-center">
                  <h3 className="text-2xl font-poppins font-bold text-accent mb-2">40%</h3>
                  <p className="text-sm text-muted-foreground">Cost Reduction</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Ready to Transform Your Business Communications?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get started with a free consultation and discover how our solutions 
            can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
                Contact Sales
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

export default Home;