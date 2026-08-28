import ky, { type KyInstance } from 'ky';

export class HttpClient {
	public readonly ky: KyInstance;

	constructor(apiKey: string, baseUrl?: string) {
		if (!apiKey || typeof apiKey !== 'string' || apiKey.trim().length === 0) {
			throw new Error('FaceClient: la apiKey es requerida y debe ser un string no vacío');
		}

		const base = baseUrl ?? 'https://face-es.gta.world/api/v1/page-api/';
		const normalizedBase = base.endsWith('/') ? base : `${base}/`;

		this.ky = ky.create({
			prefix: normalizedBase,
			headers: {
				Authorization: `Bearer ${apiKey}`,
			},
			timeout: 15_000,
			retry: {
				limit: 2,
				methods: ['get'],
				statusCodes: [408, 429, 500, 502, 503, 504],
			},
			hooks: {
				beforeError: [
					({ error }) => {
						const httpError = error as unknown as { response?: Response; message: string };
						const response = httpError.response;
						if (response) {
							if (response.status === 401) {
								httpError.message = 'FaceBrowser API: 401 Unauthorized — verifica tu API key';
							} else if (response.status === 404) {
								const url = (response as unknown as { url?: string }).url ?? 'unknown';
								httpError.message = `FaceBrowser API: 404 Not Found — ${url}`;
							} else if (response.status === 429) {
								httpError.message = 'FaceBrowser API: 429 Rate Limited — reintenta más tarde';
							}
						}
						return error;
					},
				],
			},
		});
	}
}
