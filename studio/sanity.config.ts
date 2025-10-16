import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './schemas';

const plugins = [deskTool()];
if (process.env.NODE_ENV === 'development') {
  plugins.push(visionTool());
}

console.log('Sanity Project ID:', process.env.SANITY_STUDIO_PROJECT_ID);

export default defineConfig({
	name: 'default',
	title: 'Sanity Studio',
	projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
	dataset: process.env.SANITY_STUDIO_DATASET || 'production',
	apiVersion: process.env.SANITY_STUDIO_API_VERSION || '2023-01-01',
	plugins,
	schema: {
		types: schemas,
	},
});
