
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';

interface ContactInfoItem {
  icon: React.ElementType;
  title: string;
  details: string;
  description: string;
}

interface BusinessHourItem {
  day: string;
  hours: string;
}

interface ContactInfoProps {
  contactInfo: ContactInfoItem[];
  businessHours: BusinessHourItem[];
  supportHours: string;
  holidayMessage: string;
}

export const ContactInfo = ({ contactInfo, businessHours, supportHours, holidayMessage }: ContactInfoProps) => {
  return (
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
            {businessHours.map((bh, idx) => (
              <div key={idx} className="flex justify-between">
                <span className="text-muted-foreground">{bh.day}:</span>
                <span className="text-foreground font-medium">{bh.hours}</span>
              </div>
            ))}
            <div className="pt-3 border-t border-border">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Support:</span>
                <span className="text-accent font-medium">{supportHours}</span>
              </div>
              {holidayMessage && (
                <div className="mt-2 text-warning text-xs font-semibold">{holidayMessage}</div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
