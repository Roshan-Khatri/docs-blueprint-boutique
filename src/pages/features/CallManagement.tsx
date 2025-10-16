
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { useFeatureBySlug } from '@/hooks/useSanityContent';
import PortableText from '@/components/PortableText';
import type { Feature } from '@/sanity/types';

const CallManagementFeature = () => {
	const { data: feature } = useFeatureBySlug('call-management');

	const fallback: Partial<Feature> = {
		title: 'Call Management Features',
		description: 'Intelligent call handling and routing for every business.',
		longDescription: [
			{ _type: 'block', children: [{ _type: 'span', text: 'Automate call distribution, manage queues, and provide a seamless caller experience with advanced call management tools.' }] }
		],
		benefits: [
			'Intelligent Routing',
			'Call Queuing',
			'Auto Attendant',
			'Custom Greetings',
			'Call Transfer',
			'Real-time Monitoring',
		],
		useCases: [
			'Inbound Call Center',
			'Customer Service',
			'Automated Workflows',
			'Support Desk',
			'Sales Teams',
			'Remote Agents',
		],
		technicalSpecs: [
			{ _type: 'block', children: [{ _type: 'span', text: 'Multi-level IVR, call queue analytics, integration with CRM, secure cloud platform.' }] }
		],
		howItWorks: [
			{ _type: 'block', children: [{ _type: 'span', text: 'Incoming calls are routed based on rules, skills, and availability, ensuring optimal handling.' }] }
		],
		setupGuide: [
			{ _type: 'block', children: [{ _type: 'span', text: 'Configure IVR, set up call queues, assign agents, and monitor performance.' }] }
		],
		relatedFeatures: [
			{ title: 'Contact Center', slug: { current: 'contact-center' } },
			{ title: 'Call Reporting', slug: { current: 'call-reporting' } },
		],
		relatedSolutions: [
			{ title: 'Contact Center', slug: { current: 'contact-center' } },
			{ title: 'Cloud PBX', slug: { current: 'cloud-pbx' } },
		],
	} as any;

	const f = feature ?? (fallback as Feature);

	return (
		<div>
			<PageHeader title={f.title} subtitle={f.description} />

			{/* Hero / Overview */}
			<section className="section-padding bg-background">
				<div className="container-custom max-w-4xl">
					<PortableText value={f.longDescription ?? fallback.longDescription} className="prose prose-lg mb-8" />
				</div>
			</section>

			{/* Features Grid */}
			<section className="section-padding bg-surface">
				<div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{(f.useCases ?? fallback.useCases!).map((uc, i) => (
						<Card key={i} className="card-professional card-hover">
							<CardContent className="p-6 font-semibold text-foreground">{uc}</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Benefits Section */}
			<section className="section-padding bg-background">
				<div className="container-custom max-w-3xl">
					<h2 className="text-2xl font-bold mb-4">Business Benefits</h2>
					<ul className="list-disc pl-6 text-lg">
						{(f.benefits ?? fallback.benefits!).map((b, i) => (
							<li key={i}>{b}</li>
						))}
					</ul>
				</div>
			</section>

			{/* Technical Specs Section */}
			<section className="section-padding bg-surface">
				<div className="container-custom max-w-3xl">
					<h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
					<PortableText value={f.technicalSpecs ?? fallback.technicalSpecs} className="prose" />
				</div>
			</section>

			{/* How It Works Section */}
			{f.howItWorks && f.howItWorks.length > 0 && (
				<section className="section-padding bg-background">
					<div className="container-custom max-w-3xl">
						<h2 className="text-2xl font-bold mb-4">How It Works</h2>
						<PortableText value={f.howItWorks} className="prose" />
					</div>
				</section>
			)}

			{/* Setup Guide Section */}
			{f.setupGuide && f.setupGuide.length > 0 && (
				<section className="section-padding bg-surface">
					<div className="container-custom max-w-3xl">
						<h2 className="text-2xl font-bold mb-4">Setup Guide</h2>
						<PortableText value={f.setupGuide} className="prose" />
					</div>
				</section>
			)}

			{/* Related Features Section */}
			{f.relatedFeatures && f.relatedFeatures.length > 0 && (
				<section className="section-padding bg-background">
					<div className="container-custom">
						<h2 className="text-2xl font-bold mb-4">Related Features</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{f.relatedFeatures.map((rel, i) => (
								<a key={i} href={rel.slug?.current ? `/features/${rel.slug.current}` : '#'} className="block">
									<Card className="card-professional card-hover">
										<CardContent className="p-4 font-semibold text-primary">{rel.title}</CardContent>
									</Card>
								</a>
							))}
						</div>
					</div>
				</section>
			)}

			{/* Related Solutions Section */}
			{f.relatedSolutions && f.relatedSolutions.length > 0 && (
				<section className="section-padding bg-surface">
					<div className="container-custom">
						<h2 className="text-2xl font-bold mb-4">Related Solutions</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{f.relatedSolutions.map((rel, i) => (
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

			{/* CTA Section */}
			<section className="section-padding bg-gradient-primary">
				<div className="container-custom text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to optimize your call management?</h2>
					<a href="/contact">
						<button className="btn-hero bg-white text-primary font-semibold px-8 py-4 rounded-lg shadow">Request a Demo</button>
					</a>
				</div>
			</section>
		</div>
	);
};
export default CallManagementFeature;
