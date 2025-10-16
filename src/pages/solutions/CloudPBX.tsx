import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { useSolutionBySlug } from '@/hooks/useSanityContent';
import type { Solution } from '@/sanity/types';

const CloudPBX = () => {
	const { data: solution } = useSolutionBySlug('cloud-pbx');

	const fallback: Partial<Solution> = {
		title: 'Cloud PBX Solution',
		description: 'Flexible, scalable business phone system.',
		longDescription: [
			{ _type: 'block', children: [{ _type: 'span', text: 'Empower your business with a modern, cloud-based PBX for seamless communication.' }] }
		],
		features: [
			'Virtual Extensions',
			'Auto Attendant',
			'Call Routing',
			'Voicemail-to-Email',
			'Mobile App',
			'Call Analytics',
		],
		benefits: [
			'Scale effortlessly',
			'Reduce hardware costs',
			'Enable remote work',
		],
		specifications: [
			{ _type: 'block', children: [{ _type: 'span', text: 'Hosted in secure data centers, 99.99% uptime, global reach.' }] }
		],
		pricing: 'Starting at $29/user/month',
		pricingModel: 'per-user',
		testimonials: [
			'“Our team is more connected than ever.”',
			'“Setup was fast and easy.”',
		],
		relatedSolutions: [
			{ title: 'Unified Communications', slug: { current: 'unified-communications' } },
			{ title: 'Contact Center', slug: { current: 'contact-center' } },
		],
	} as any;

	const s = solution ?? (fallback as Solution);

	return (
		<div>
			<PageHeader title={s.title} subtitle={s.description} />

			{/* Hero / Overview */}
			<section className="section-padding bg-background">
				<div className="container-custom max-w-4xl">
					<div className="prose prose-lg mb-8">
						{(s.longDescription ?? fallback.longDescription)?.map((block, i) => (
							<p key={i}>{block.children?.map((span, j) => span.text).join(' ')}</p>
						))}
					</div>
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
					<div className="prose">
						{(s.specifications ?? fallback.specifications)?.map((block, i) => (
							<p key={i}>{block.children?.map((span, j) => span.text).join(' ')}</p>
						))}
					</div>
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

			{/* CTA Section */}
			<section className="section-padding bg-gradient-primary">
				<div className="container-custom text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to modernize your phone system?</h2>
					<a href="/solutions/contact-center">
						<button className="btn-hero bg-white text-primary font-semibold px-8 py-4 rounded-lg shadow">Request a Demo</button>
					</a>
				</div>
			</section>
		</div>
	);
};
export default CloudPBX;
