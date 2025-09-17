import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Expert Support' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We deliver consistent, dependable telecommunications solutions with industry-leading uptime and performance standards.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously advancing our technology stack to provide cutting-edge solutions that keep our clients ahead of the competition.'
    },
    {
      icon: Heart,
      title: 'Customer Success',
      description: 'Your success is our priority. We go above and beyond to ensure our solutions drive measurable business results.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We believe in building long-term partnerships, working closely with clients to understand and meet their unique needs.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: '15+ years in telecommunications with a vision to democratize enterprise communication tools.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      description: 'Former telecom engineer with expertise in cloud infrastructure and scalable communication systems.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Customer Success',
      description: 'Dedicated to ensuring every client maximizes value from our telecommunications solutions.'
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      description: 'Leading our technical team in developing robust, innovative communication platforms.'
    }
  ];

  const milestones = [
    {
      year: '2013',
      title: 'Company Founded',
      description: 'Started with a mission to simplify business communications'
    },
    {
      year: '2015',
      title: 'First 100 Customers',
      description: 'Reached our first major milestone with small business adoption'
    },
    {
      year: '2018',
      title: 'Enterprise Launch',
      description: 'Expanded to serve large enterprise clients with advanced features'
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Extended services to 50+ countries worldwide'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Launched AI-powered analytics and automation features'
    }
  ];

  return (
    <div>
      <PageHeader
        title="About FoneRoute"
        subtitle="Empowering businesses worldwide with innovative telecommunications solutions that drive growth, enhance productivity, and transform customer experiences."
        breadcrumb="Home / About"
      />

      {/* Stats Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At FoneRoute, we're passionate about breaking down communication barriers 
                that hold businesses back. Our mission is to provide enterprise-grade 
                telecommunications solutions that are accessible, reliable, and powerful 
                enough to scale with your ambitions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We believe that every business, regardless of size, deserves access to 
                world-class communication tools. That's why we've built our platform 
                to be both sophisticated and simple, powerful yet intuitive.
              </p>
              
              <div className="space-y-3">
                {['Democratize enterprise communications', 'Drive measurable business results', 'Provide exceptional customer support'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="card-professional p-8">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                  Industry Recognition
                </h3>
                <p className="text-muted-foreground">
                  Recognized as a leading telecommunications provider with multiple 
                  industry awards for innovation and customer satisfaction.
                </p>
              </Card>
              
              <Card className="card-professional p-8">
                <Target className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                  Customer-Centric Focus
                </h3>
                <p className="text-muted-foreground">
                  Every decision we make is guided by our commitment to delivering 
                  exceptional value and outcomes for our customers.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we serve our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-professional card-hover">
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones in our mission to transform business communications
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-px"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="card-professional ml-12 md:ml-0">
                      <CardContent className="p-6">
                        <div className="text-2xl font-poppins font-bold text-primary mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals driving innovation at FoneRoute
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-professional">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover how FoneRoute can transform your business communications 
            and help you achieve your growth objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/solutions">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-primary px-8 py-4"
              >
                Explore Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;