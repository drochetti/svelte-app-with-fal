import { handleRequest } from '@fal-ai/serverless-proxy';
import { type RequestHandler } from '@sveltejs/kit';
import * as env from '$env/static/private';

const handler: RequestHandler = async ({ request }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const responseHeaders: Record<string, any> = {
		'Content-Type': 'application/json'
	};
	return await handleRequest({
		id: 'svelte-app-router',
		method: request.method,
		respondWith: (status, data) =>
			new Response(JSON.stringify(data), {
				status,
				headers: responseHeaders
			}),
		getHeaders: () => Object.fromEntries(request.headers.entries()),
		getHeader: (name) => request.headers.get(name),
		sendHeader: (name, value) => (responseHeaders[name] = value),
		getBody: async () => request.text(),
		resolveApiKey: () => Promise.resolve(env.FAL_KEY)
	});
};

export const GET: RequestHandler = handler;

export const POST: RequestHandler = handler;
