
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { useFeatureBySlug } from '@/hooks/useSanityContent';
import type { Feature } from '@/sanity/types';

const CallingFeature = () => {
	const { data: feature } = useFeatureBySlug('calling');

	const fallback: Partial<Feature> = {
		title: 'Calling Features',
		description: 'Advanced voice communication capabilities for every business need.',
		longDescription: [
			{ _type: 'block', children: [{ _type: 'span', text: 'Crystal-clear HD voice, noise suppression, and reliable connectivity for seamless conversations.' }] }
		],
		benefits: [
			'HD Voice',
			'Noise Suppression',
			'Reliable Connectivity',
			'Call Recording',
			'Mobile & Desktop Apps',
			'Global Reach',
		],
		useCases: [
			'Sales Calls',
			'Support',
			'Internal Communications',
			'Remote Collaboration',
			'Conference Calling',
			'Customer Engagement',
		],
		technicalSpecs: [
			{ _type: 'block', children: [{ _type: 'span', text: 'Wideband audio, encrypted calls, multi-device support, 24/7 uptime.' }] }
		],
		howItWorks: [
			{ _type: 'block', children: [{ _type: 'span', text: 'Users initiate calls via app or web; system connects using optimized routing and HD codecs.' }] }
		],
		setupGuide: [
			{ _type: 'block', children: [{ _type: 'span', text: 'Download app, configure devices, set up call rules, and start communicating.' }] }
		],
		relatedFeatures: [
			{ title: 'Call Management', slug: { current: 'call-management' } },
			{ title: 'Call Reporting', slug: { current: 'call-reporting' } },
		],
		relatedSolutions: [
			{ title: 'Unified Communications', slug: { current: 'unified-communications' } },
			{ title: 'Contact Center', slug: { current: 'contact-center' } },
		],
	} as any;

	const f = feature ?? (fallback as Feature);

	return (
		<div>
			<PageHeader title={f.title} subtitle={f.description} />

			{/* Hero / Overview */}
			<section className="section-padding bg-background">
				<div className="container-custom max-w-4xl">
					<div className="prose prose-lg mb-8">
						{(f.longDescription ?? fallback.longDescription)?.map((block, i) => (
							<p key={i}>{block.children?.map((span, j) => span.text).join(' ')}</p>
						))}
					</div>
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
					<div className="prose">
						{(f.technicalSpecs ?? fallback.technicalSpecs)?.map((block, i) => (
							<p key={i}>{block.children?.map((span, j) => span.text).join(' ')}</p>
						))}
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			{f.howItWorks && f.howItWorks.length > 0 && (
				<section className="section-padding bg-background">
					<div className="container-custom max-w-3xl">
						<h2 className="text-2xl font-bold mb-4">How It Works</h2>
						<div className="prose">
							{f.howItWorks.map((block, i) => (
								<p key={i}>{block.children?.map((span, j) => span.text).join(' ')}</p>
							))}
						</div>
					</div>
				</section>
			)}

			{/* Setup Guide Section */}
			{f.setupGuide && f.setupGuide.length > 0 && (
				<section className="section-padding bg-surface">
					<div className="container-custom max-w-3xl">
						<h2 className="text-2xl font-bold mb-4">Setup Guide</h2>
						<div className="prose">
							{f.setupGuide.map((block, i) => (
								<p key={i}>{block.children?.map((span, j) => span.text).join(' ')}</p>
							))}
						</div>
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
					<h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to upgrade your calling experience?</h2>
					<a href="/contact">
						<button className="btn-hero bg-white text-primary font-semibold px-8 py-4 rounded-lg shadow">Request a Demo</button>
					</a>
				</div>
			</section>
		</div>
	);
};
export default CallingFeature;
