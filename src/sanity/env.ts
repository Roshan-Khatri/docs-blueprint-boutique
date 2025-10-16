
// Enhanced Sanity environment config and validation
export interface SanityConfig {
	projectId: string;
	dataset: string;
	apiVersion: string;
	useCdn: boolean;
}

export interface SanityConfigStatus {
	isConfigured: boolean;
	missing: string[];
	config?: SanityConfig;
}

function getEnvVar(key: string): string | undefined {
	return import.meta.env[key];
}

function isPlaceholderValue(value: string | undefined): boolean {
	if (!value) return true;
	// Checks for 'your-*-here', '<placeholder>', '[placeholder]'
	return /^(your-.+-here|<.*>|\[.*\])$/i.test(value);
}

export function validateSanitySetup(): SanityConfigStatus {
	const required = ['VITE_SANITY_PROJECT_ID', 'VITE_SANITY_DATASET'];
	const missing = required.filter((key) => {
		const value = getEnvVar(key);
		return !value || isPlaceholderValue(value);
	});
	const projectId = getEnvVar('VITE_SANITY_PROJECT_ID');
	const dataset = getEnvVar('VITE_SANITY_DATASET');
	const apiVersion = getEnvVar('VITE_SANITY_API_VERSION') || '2023-01-01';
	const useCdn = getEnvVar('VITE_SANITY_USE_CDN') === 'true';
	const isConfigured = missing.length === 0;
	const config = isConfigured ? { projectId, dataset, apiVersion, useCdn } : undefined;
	return { isConfigured, missing, config };
}

export function getSanityConfig(): SanityConfig | null {
	const status = validateSanitySetup();
	if (!status.isConfigured) {
		if (import.meta.env.DEV && status.missing.length > 0) {
			// eslint-disable-next-line no-console
			console.warn(
				`[Sanity] Missing or placeholder environment variables: ${status.missing.join(', ')}.\n` +
				'To enable Sanity CMS, set VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET in your .env file.\n' +
				'See .env.example for setup instructions.'
			);
		}
		return null;
	}
	return status.config!;
}

export function isSanityConfigured(): boolean {
	return validateSanitySetup().isConfigured;
}

export function getSanityStatus(): SanityConfigStatus {
	return validateSanitySetup();
}
