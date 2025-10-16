
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

interface ContactFormProps {
  solution?: string;
}

export const ContactForm = ({ solution }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    solution: solution || '',
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
      solution: solution || '',
      message: ''
    });
  };

  return (
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
        <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
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
  );
};
