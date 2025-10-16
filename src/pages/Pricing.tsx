

import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, TrendingUp } from 'lucide-react';
import { pricingPlans, featureComparison, faqs } from '@/content/pricing';



const Pricing = () => {
	const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

	// Helper to compute price and label
	const getDisplayPrice = (plan: typeof pricingPlans[0]) => {
		if (billing === 'monthly') {
			return {
				price: plan.price,
				period: '/mo',
				note: undefined,
			};
		} else {
			// Annual: 2 months free (pay for 10 months)
			const annualPrice = plan.price * 10;
			const perMonth = (annualPrice / 12).toFixed(2);
			return {
				price: perMonth,
				period: '/mo',
				note: 'Billed annually (2 months free)',
			};
		}
	};

		return (
			<div>
			<PageHeader
				title="Pricing Plans"
				subtitle="Flexible pricing options to fit every business size. Choose the plan that’s right for you."
				breadcrumb="Home / Pricing"
			>
				<div className="flex flex-col md:flex-row gap-4 mt-4 items-center">
					  <Link to="#plans" className="btn-hero bg-primary text-white font-bold">View Plans</Link>
					  <Link to="/contact" className="btn-hero bg-secondary text-primary font-bold">Contact Sales</Link>
					{/* Billing Toggle */}
					<div className="inline-flex rounded-lg border border-border bg-background ml-0 md:ml-6 mt-4 md:mt-0" role="group" aria-label="Billing cycle toggle">
									<Button
										type="button"
										variant={billing === 'monthly' ? 'default' : 'outline'}
										aria-pressed={billing === 'monthly'}
										className="rounded-l-lg px-4 py-2 font-semibold focus:z-10"
										onClick={() => setBilling('monthly')}
									>
										Monthly
									</Button>
									<Button
										type="button"
										variant={billing === 'annual' ? 'default' : 'outline'}
										aria-pressed={billing === 'annual'}
										className="rounded-r-lg px-4 py-2 font-semibold focus:z-10"
										onClick={() => setBilling('annual')}
									>
										Annual
									</Button>
					</div>
				</div>
			</PageHeader>

			{/* Hero Section */}
			<section className="section-padding bg-background">
				<div className="container-custom text-center max-w-2xl mx-auto">
					<h2 className="text-3xl font-bold mb-2">Simple, Transparent Pricing</h2>
					<p className="text-lg text-muted-foreground mb-6">No hidden fees. No contracts. Cancel anytime.</p>
				</div>
			</section>

			{/* Pricing Tiers */}
			<section id="plans" className="section-padding">
				<div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{pricingPlans.map((plan, idx) => {
									const { price, period, note } = getDisplayPrice(plan);
									return (
										<Card key={plan.name} className={`card-professional relative ${plan.popular ? 'border-primary border-2' : ''}`}>
											<CardContent className="p-6 flex flex-col items-center">
												{plan.popular && (
													<span className="absolute top-4 right-4 text-primary flex items-center gap-1"><Star size={18}/> Popular</span>
												)}
												{plan.recommended && (
													<span className="absolute top-4 left-4 text-green-600 flex items-center gap-1"><TrendingUp size={18}/> Recommended</span>
												)}
												<h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
												<p className="mb-4 text-muted-foreground text-base md:text-lg">{plan.description}</p>
												<div className="text-3xl md:text-4xl font-extrabold mb-2">${price}<span className="text-base font-normal">{period}</span></div>
												{note && <div className="text-xs text-muted-foreground mb-2">{note}</div>}
												<ul className="mb-4 w-full">
													{plan.features.map(f => (
														<li key={f} className="flex items-center gap-2 text-green-700 mb-1 text-sm md:text-base"><CheckCircle size={16}/>{f}</li>
													))}
												</ul>
												<Link to={`/contact?plan=${encodeURIComponent(plan.name)}`} className="btn-hero w-full text-center">Start {plan.name}</Link>
											</CardContent>
										</Card>
									);
								})}
				</div>
			</section>

			{/* Feature Comparison Table */}
			<section className="section-padding bg-background">
				<div className="container-custom max-w-4xl mx-auto">
					<h4 className="text-xl md:text-2xl font-bold mb-4">Compare Features</h4>
					<div className="overflow-x-auto">
						<table className="w-full text-left border-collapse text-sm md:text-base">
							<thead>
								<tr className="bg-muted">
									<th className="p-2">Feature</th>
									<th className="p-2">Starter</th>
									<th className="p-2">Professional</th>
									<th className="p-2">Enterprise</th>
								</tr>
							</thead>
							<tbody>
								{featureComparison.map(row => (
									<tr key={row.feature} className="border-b">
										<td className="p-2 font-medium">{row.feature}</td>
										<td className="p-2 text-center">{row.starter ? <CheckCircle size={16} className="text-green-600"/> : '-'}</td>
										<td className="p-2 text-center">{row.professional ? <CheckCircle size={16} className="text-green-600"/> : '-'}</td>
										<td className="p-2 text-center">{row.enterprise ? <CheckCircle size={16} className="text-green-600"/> : '-'}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="section-padding">
				<div className="container-custom max-w-2xl mx-auto">
					<h4 className="text-xl md:text-2xl font-bold mb-4">Frequently Asked Questions</h4>
					<div className="space-y-4">
						{faqs.map((faq, idx) => (
							<div key={idx} className="bg-muted rounded-lg p-4">
								<div className="font-semibold mb-1">Q: {faq.q}</div>
								<div className="text-muted-foreground">A: {faq.a}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section-padding bg-primary text-white text-center">
				<div className="container-custom max-w-2xl mx-auto">
					<h4 className="text-xl md:text-2xl font-bold mb-2">Ready to get started?</h4>
					<p className="mb-4">Contact our sales team or start your free trial today.</p>
					<div className="flex flex-col md:flex-row gap-4 justify-center">
						  <Link to="/contact" className="btn-hero bg-white text-primary font-bold">Contact Sales</Link>
						  <Link to="/contact" className="btn-hero bg-secondary text-primary font-bold">Start Free Trial</Link>
					</div>
				</div>
			</section>
			</div>
		);
	};

	export default Pricing;
