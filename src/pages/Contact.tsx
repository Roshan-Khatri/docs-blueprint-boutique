import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PageHeader from '@/components/layout/PageHeader';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Users,
  Building,
  Send
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    solution: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      jobTitle: '',
      solution: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Sales',
      details: '+1 (555) 123-4567',
      description: 'Speak with our sales team'
    },
    {
      icon: MessageSquare,
      title: 'Support',
      details: '+1 (555) 123-4568',
      description: '24/7 technical support'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@foneroute.com',
      description: 'General inquiries'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Business Ave, Tech City, TC 12345',
      description: 'Visit our headquarters'
    }
  ];

  const offices = [
    {
      city: 'New York',
      address: '123 Business Ave, Suite 100',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST'
    },
    {
      city: 'San Francisco',
      address: '456 Tech Street, Floor 15',
      phone: '+1 (555) 987-6543',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST'
    },
    {
      city: 'London',
      address: '789 Communication Blvd',
      phone: '+44 20 1234 5678',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM GMT'
    }
  ];

  return (
    <div>
      <PageHeader
        title="Contact Our Team"
        subtitle="Ready to transform your business communications? Get in touch with our experts to discuss your needs and discover the right solution for your organization."
        breadcrumb="Home / Contact"
      />

      {/* Contact Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins font-bold text-foreground">
                    Get Started Today
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will contact you within 24 hours to discuss your needs.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                          className="bg-surface border-input-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                          className="bg-surface border-input-border"
                        />
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="bg-surface border-input-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="bg-surface border-input-border"
                        />
                      </div>
                    </div>

                    {/* Company Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="bg-surface border-input-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="jobTitle">Job Title</Label>
                        <Input
                          id="jobTitle"
                          type="text"
                          value={formData.jobTitle}
                          onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                          className="bg-surface border-input-border"
                        />
                      </div>
                    </div>

                    {/* Solution Interest */}
                    <div className="space-y-2">
                      <Label htmlFor="solution">Solution of Interest</Label>
                      <Select value={formData.solution} onValueChange={(value) => handleInputChange('solution', value)}>
                        <SelectTrigger className="bg-surface border-input-border">
                          <SelectValue placeholder="Select a solution" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="contact-center">Contact Center Solution</SelectItem>
                          <SelectItem value="auto-dialer">Auto Dialer</SelectItem>
                          <SelectItem value="cloud-pbx">Cloud PBX</SelectItem>
                          <SelectItem value="unified-communications">Unified Communications</SelectItem>
                          <SelectItem value="multiple">Multiple Solutions</SelectItem>
                          <SelectItem value="not-sure">Not Sure / Need Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your business needs and requirements..."
                        className="bg-surface border-input-border resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full btn-hero">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-poppins font-bold text-foreground mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-3 bg-primary-light rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">{info.title}</h3>
                        <p className="text-foreground font-medium mb-1">{info.details}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday:</span>
                      <span className="text-foreground font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday:</span>
                      <span className="text-foreground font-medium">Closed</span>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Support:</span>
                        <span className="text-accent font-medium">24/7 Available</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at one of our global offices or connect with our regional teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="card-professional card-hover text-center">
                <CardContent className="p-8">
                  <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                    {office.city}
                  </h3>
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

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions about our services and getting started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
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
            ].map((faq, index) => (
              <Card key={index} className="card-professional">
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;