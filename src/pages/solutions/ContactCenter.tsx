import { useState } from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PortableText from '@/components/PortableText';
import { useSolutionBySlug, useSiteSettings } from '@/hooks/useSanityContent';
import type { Solution } from '@/sanity/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import {
	Phone,
	Mail,
	MapPin,
	Clock,
	MessageSquare,
	Building,
	Send,
} from 'lucide-react';

const ContactCenter = () => {
	const { data: solution, isLoading, isError } = useSolutionBySlug('contact-center');
	const { toast } = useToast();
	const { data: siteSettings, isError: settingsError } = useSiteSettings();
	if (settingsError) console.warn('Failed to load site settings from CMS', settingsError);

	const fallback: Partial<Solution> = {
		title: 'Contact Center Solution',
		description: 'Comprehensive omnichannel platform for customer engagement, agent productivity, and operational efficiency.',
		longDescription: [
			{ _type: 'block', children: [{ _type: 'span', text: 'Our Contact Center Solution delivers seamless omnichannel support, intelligent routing, and real-time analytics to elevate customer experience and drive business growth.' }] }
		],
		features: [
			'Omnichannel Support',
			'Intelligent Routing',
			'Real-time Analytics',
			'Agent Desktop',
			'Quality Management',
			'Workforce Management',
		],
		benefits: [
			'Increase CSAT',
			'Reduce handle time',
			'Improve agent utilization',
		],
		specifications: [
			{ _type: 'block', children: [{ _type: 'span', text: '99.9% uptime, enterprise-grade security, scalable architecture.' }] }
		],
		pricing: 'Starting at $49/user/month',
		pricingModel: 'per-user',
		testimonials: [
			'“FoneRoute transformed our customer service operations.”',
			'“Agent productivity increased by 40% after switching.”',
		],
		relatedSolutions: [
			{ title: 'Auto Dialer', slug: { current: 'auto-dialer' } },
			{ title: 'Power Dialer', slug: { current: 'power-dialer' } },
			{ title: 'Unified Communications', slug: { current: 'unified-communications' } },
		],
	} as any;

	const s = solution ?? (fallback as Solution);

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		company: '',
		jobTitle: '',
		solution: 'contact-center', // Pre-select this solution
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
			solution: 'contact-center',
			message: ''
		});
	};

	// Build offices from CMS or fallback
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
	const dayLabels = { monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday' };

	let businessHours = [];
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
			<PageHeader title={s.title} subtitle={s.description} />

			{/* Hero / Overview */}
			<section className="section-padding bg-background">
				<div className="container-custom max-w-4xl">
					{/* Render s.longDescription (PortableText) if present; else a detailed static overview */}
					<PortableText value={s.longDescription ?? fallback.longDescription} className="prose prose-lg mb-8" />
				</div>
			</section>

			{/* Features Grid */}
			<section className="section-padding bg-surface">
				<div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{(s.features ?? fallback.features!).map((f, i) => (
						<Card key={i} className="card-professional card-hover">
							<CardContent className="p-6 font-semibold text-foreground">{f}</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Benefits Section */}
			<section className="section-padding bg-background">
				<div className="container-custom max-w-3xl">
					<h2 className="text-2xl font-bold mb-4">Business Benefits</h2>
					<ul className="list-disc pl-6 text-lg">
						{(s.benefits ?? fallback.benefits!).map((b, i) => (
							<li key={i}>{b}</li>
						))}
					</ul>
				</div>
			</section>

			{/* Specifications Section */}
			<section className="section-padding bg-surface">
				<div className="container-custom max-w-3xl">
					<h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
					<PortableText value={s.specifications ?? fallback.specifications} className="prose" />
				</div>
			</section>

			{/* Testimonials Section */}
			{s.testimonials && s.testimonials.length > 0 && (
				<section className="section-padding bg-background">
					<div className="container-custom max-w-3xl">
						<h2 className="text-2xl font-bold mb-4">Customer Testimonials</h2>
						<ul className="space-y-4">
							{s.testimonials.map((t, i) => (
								<li key={i} className="italic text-muted-foreground">{t}</li>
							))}
						</ul>
					</div>
				</section>
			)}

			{/* Pricing Section */}
			<section className="section-padding bg-surface">
				<div className="container-custom max-w-2xl">
					<h2 className="text-2xl font-bold mb-4">Pricing</h2>
					<div className="text-lg font-semibold mb-2">{s.pricing ?? 'Contact us for pricing details.'}</div>
					<div className="text-muted-foreground">Model: {s.pricingModel ?? 'Custom'}</div>
				</div>
			</section>

			{/* Related Solutions Section */}
			{s.relatedSolutions && s.relatedSolutions.length > 0 && (
				<section className="section-padding bg-background">
					<div className="container-custom">
						<h2 className="text-2xl font-bold mb-4">Related Solutions</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{s.relatedSolutions.map((rel, i) => (
								<a key={i} href={rel.slug?.current ? `/solutions/${rel.slug.current}` : '#'} className="block">
									<Card className="card-professional card-hover">
										<CardContent className="p-4 font-semibold text-primary">{rel.title}</CardContent>
									</Card>
								</a>
							))}
						</div>
					</div>
				</section>
			)}

			{/* Contact Form Section */}
			<section id="contact-form" className="section-padding bg-background">
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
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label htmlFor="firstName">First Name *</Label>
												<Input id="firstName" type="text" value={formData.firstName} onChange={(e) => handleInputChange('firstName', e.target.value)} required className="bg-surface border-input-border" />
											</div>
											<div className="space-y-2">
												<Label htmlFor="lastName">Last Name *</Label>
												<Input id="lastName" type="text" value={formData.lastName} onChange={(e) => handleInputChange('lastName', e.target.value)} required className="bg-surface border-input-border" />
											</div>
										</div>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label htmlFor="email">Email Address *</Label>
												<Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} required className="bg-surface border-input-border" />
											</div>
											<div className="space-y-2">
												<Label htmlFor="phone">Phone Number</Label>
												<Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} className="bg-surface border-input-border" />
											</div>
										</div>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label htmlFor="company">Company Name</Label>
												<Input id="company" type="text" value={formData.company} onChange={(e) => handleInputChange('company', e.target.value)} className="bg-surface border-input-border" />
											</div>
											<div className="space-y-2">
												<Label htmlFor="jobTitle">Job Title</Label>
												<Input id="jobTitle" type="text" value={formData.jobTitle} onChange={(e) => handleInputChange('jobTitle', e.target.value)} className="bg-surface border-input-border" />
											</div>
										</div>
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
										<div className="space-y-2">
											<Label htmlFor="message">Message</Label>
											<Textarea id="message" rows={4} value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} placeholder="Tell us about your business needs and requirements..." className="bg-surface border-input-border resize-none" />
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
						{faqs.map((faq, index) => (
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
export default ContactCenter;
