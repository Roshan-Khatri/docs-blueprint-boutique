import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageHeader from '@/components/layout/PageHeader';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Building,
} from 'lucide-react';
import { useSiteSettings } from '@/hooks/useSanityContent';
import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';

const Contact = () => {
  const { data: siteSettings, isLoading: settingsLoading, isError: settingsError } = useSiteSettings();
  if (settingsError) {
    console.warn('Failed to load site settings from CMS', settingsError);
  }

  // Build offices from CMS or fallback
  let offices = [];
  if (siteSettings?.officeLocations?.length) {
    // Sort by primary or primaryOfficeIndex
    const sorted = [...siteSettings.officeLocations];
    if (typeof siteSettings.primaryOfficeIndex === 'number') {
      sorted.sort((a, b) => {
        if (a.primary) return -1;
        if (b.primary) return 1;
        return 0;
      });
      // Move primary office to front if index is set
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
  }

  // Primary office for address
  const primaryOffice = offices[0];

  const contactInfo = [
    {
      icon: Mail,
      title: 'General Inquiries',
      details: siteSettings?.primaryEmail || 'info@foneroute.com',
      description: 'For all general questions and information.',
    },
    {
      icon: Phone,
      title: 'Sales Inquiries',
      details: siteSettings?.primaryPhone || primaryOffice?.phone || '+1 (555) 123-4567',
      description: 'Speak with our sales team about our solutions.',
    },
    {
      icon: MessageSquare,
      title: 'Support',
      details: siteSettings?.supportPhone
        || siteSettings?.supportEmail
        || '+1 (555) 123-4568',
      description: 'Get help from our technical support team.',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: primaryOffice?.address || '123 Business Ave, Tech City, TC 12345',
      description: 'Visit our headquarters',
    },
  ];

  // Format business hours from CMS

  function formatTime(time: string) {
    if (!time) return '';
    const [h, m] = time.split(':');
    let hour = parseInt(h, 10);
    const min = m !== undefined ? m : '00';
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${hour}:${min} ${ampm}`;
  }

  const dayOrder = [
    'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
  ];
  const dayLabels = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
  };

  let businessHours = [];
  if (siteSettings?.businessHours) {
    businessHours = dayOrder
      .filter(day => siteSettings.businessHours[day])
      .map(day => {
        const hours = siteSettings.businessHours[day];
        if (typeof hours === 'object') {
          if (hours.closed) {
            return { day: dayLabels[day], hours: 'Closed' };
          }
          if (hours.open && hours.close) {
            return { day: dayLabels[day], hours: `${formatTime(hours.open)} - ${formatTime(hours.close)}` };
          }
        }
        if (typeof hours === 'string') {
          const [start, end] = hours.split('-');
          if (start && end) {
            return { day: dayLabels[day], hours: `${formatTime(start)} - ${formatTime(end)}` };
          }
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

  // Support hours
  let supportHours = siteSettings?.supportHours || '24/7 Available';
  let holidayMessage = siteSettings?.holidayMessage || '';

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
            <div>
              <ContactForm />
            </div>
            <ContactInfo 
              contactInfo={contactInfo} 
              businessHours={businessHours} 
              supportHours={supportHours} 
              holidayMessage={holidayMessage} 
            />
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
