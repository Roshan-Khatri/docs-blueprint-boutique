
import PageHeader from '@/components/layout/PageHeader';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { Shield, BarChart3, Building, GraduationCap, ShoppingCart, Stethoscope, Banknote, Factory } from 'lucide-react';
import { industries as industriesRaw, challenges, successStories } from '@/content/industries';

const industries = industriesRaw.map(ind => {
  switch (ind.name) {
	 case 'Healthcare': return { ...ind, icon: Stethoscope };
	 case 'Finance': return { ...ind, icon: Banknote };
	 case 'Education': return { ...ind, icon: GraduationCap };
	 case 'Technology': return { ...ind, icon: Building };
	 case 'Retail': return { ...ind, icon: ShoppingCart };
	 case 'Manufacturing': return { ...ind, icon: Factory };
	 default: return ind;
  }
});


const Industries = () => (
	<div>
		<PageHeader
			title="Industry Solutions"
			subtitle="Tailored telecommunications solutions for every industry."
			breadcrumb="Home / Industries"
		>
					<div className="flex flex-col md:flex-row gap-4 mt-4">
						<Link to="/contact" className="btn-hero bg-primary text-white font-bold">Book Consultation</Link>
					</div>
		</PageHeader>

		{/* Hero Section */}
		<section className="section-padding bg-background">
			<div className="container-custom text-center max-w-2xl mx-auto">
				<h2 className="text-3xl font-bold mb-2">Empowering Industries</h2>
				<p className="text-lg text-muted-foreground mb-6">FoneRoute delivers secure, scalable, and innovative telecom solutions for every sector.</p>
			</div>
		</section>

		{/* Industries Grid */}
		<section className="section-padding">
			<div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{industries.map(ind => (
					<Card key={ind.name} className="card-professional card-hover">
						<CardContent className="p-6 flex flex-col items-center">
							<ind.icon size={36} className="mb-2 text-primary"/>
							<h3 className="text-xl md:text-2xl font-bold mb-1">{ind.name}</h3>
							<p className="mb-2 text-muted-foreground text-center text-base md:text-lg">{ind.description}</p>
							<ul className="mb-2 text-sm md:text-base">
								{ind.solutions.map(s => (
									<li key={s} className="flex items-center gap-2 text-green-700"><Shield size={14}/>{s}</li>
								))}
							</ul>
							<div className="text-xs md:text-sm text-muted-foreground">{ind.metrics}</div>
							  <Link to="/solutions" className="btn-hero mt-4">Learn More</Link>
						</CardContent>
					</Card>
				))}
			</div>
		</section>

		{/* Industry Challenges */}
		<section className="section-padding bg-background">
			<div className="container-custom max-w-3xl mx-auto">
				<h4 className="text-xl md:text-2xl font-bold mb-4">Common Challenges</h4>
				<ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{challenges.map((c, idx) => (
						<li key={idx} className="bg-muted rounded-lg p-4 flex items-center gap-2 text-base md:text-lg"><BarChart3 size={18}/>{c}</li>
					))}
				</ul>
			</div>
		</section>

		{/* Solutions Overview */}
		<section className="section-padding">
			<div className="container-custom max-w-2xl mx-auto text-center">
				<h4 className="text-xl md:text-2xl font-bold mb-4">How FoneRoute Helps</h4>
				<p className="mb-4">Our platform addresses industry-specific needs with flexible, secure, and scalable solutions. From compliance to customer engagement, we help you succeed.</p>
			</div>
		</section>

		{/* Success Stories */}
		<section className="section-padding bg-background">
			<div className="container-custom max-w-2xl mx-auto">
				<h4 className="text-xl md:text-2xl font-bold mb-4">Success Stories</h4>
				<div className="space-y-4">
					{successStories.map((s, idx) => (
						<div key={idx} className="bg-muted rounded-lg p-4">
							<div className="font-semibold mb-1">{s.industry}</div>
							<div className="text-muted-foreground">{s.story}</div>
						</div>
					))}
				</div>
			</div>
		</section>

		{/* Compliance & Security */}
		<section className="section-padding">
			<div className="container-custom max-w-2xl mx-auto text-center">
				<h4 className="text-xl md:text-2xl font-bold mb-4">Compliance & Security</h4>
				<p className="mb-4">Our solutions meet industry standards for security and compliance, including HIPAA, PCI DSS, FERPA, and more.</p>
			</div>
		</section>

		{/* CTA Section */}
		<section className="section-padding bg-primary text-white text-center">
			<div className="container-custom max-w-2xl mx-auto">
				<h4 className="text-xl md:text-2xl font-bold mb-2">Ready to transform your industry?</h4>
				<p className="mb-4">Request a consultation or demo to see how FoneRoute can help your organization.</p>
			<Link to="/contact" className="btn-hero bg-white text-primary font-bold">Book Consultation</Link>
			</div>
		</section>
	</div>
);

export default Industries;
