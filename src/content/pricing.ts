// Pricing content types and constants
export type PricingPlan = {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  recommended: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 29,
    period: 'month',
    description: 'Perfect for small teams and startups.',
    features: ['Inbound & Outbound Calling', 'Basic Analytics', 'Email Support'],
    popular: false,
    recommended: false,
  },
  {
    name: 'Professional',
    price: 79,
    period: 'month',
    description: 'Advanced features for growing businesses.',
    features: ['All Starter Features', 'Contact Center', 'Advanced Analytics', 'Priority Support'],
    popular: true,
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    period: 'month',
    description: 'Custom solutions for large organizations.',
    features: ['All Professional Features', 'Custom Integrations', 'Dedicated Account Manager', '24/7 Support'],
    popular: false,
    recommended: false,
  },
];

export type FeatureComparisonRow = {
  feature: string;
  starter: boolean;
  professional: boolean;
  enterprise: boolean;
};

export const featureComparison: FeatureComparisonRow[] = [
  { feature: 'Inbound & Outbound Calling', starter: true, professional: true, enterprise: true },
  { feature: 'Contact Center', starter: false, professional: true, enterprise: true },
  { feature: 'Advanced Analytics', starter: false, professional: true, enterprise: true },
  { feature: 'Custom Integrations', starter: false, professional: false, enterprise: true },
  { feature: 'Priority Support', starter: false, professional: true, enterprise: true },
  { feature: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true },
  { feature: '24/7 Support', starter: false, professional: false, enterprise: true },
];

export type FAQ = { q: string; a: string };
export const faqs: FAQ[] = [
  {
    q: 'Can I change my plan later?',
    a: 'Yes, you can upgrade or downgrade your plan at any time from your account dashboard.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes, we offer a 14-day free trial for all plans. No credit card required.',
  },
  {
    q: 'Do you offer custom pricing?',
    a: 'Enterprise customers can request a custom quote tailored to their needs.',
  },
];
