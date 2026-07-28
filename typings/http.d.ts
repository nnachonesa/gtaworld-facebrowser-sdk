import { KyInstance } from "ky";
export declare class HttpClient {
    readonly ky: KyInstance;
    constructor(apiKey: string, baseUrl?: string);
}
