import ky, { type KyInstance } from 'ky';

export class HttpClient {
    public readonly ky: KyInstance;

    constructor (apiKey: string, baseUrl?: string) {
        this.ky = ky.create({
            prefix: baseUrl ?? 'https://face-es.gta.world/api/v1/page-api',
            headers: {
                Authorization: `Bearer ${ apiKey }`
            }
        });
    }
}
