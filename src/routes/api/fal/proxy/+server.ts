import { createRequestHandler } from '@fal-ai/serverless-proxy/svelte';
import { FAL_KEY } from '$env/static/private';

export const { GET, POST } = createRequestHandler({ credentials: FAL_KEY });
