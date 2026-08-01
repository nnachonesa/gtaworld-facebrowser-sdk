import { type HttpClient } from '../http';
import { type DmQuery, type DmReponse, type DmMessagesResponse } from '../types';
export declare class DmAPI {
    private readonly http;
    constructor(http: HttpClient);
    list(query: DmQuery): Promise<DmReponse>;
    getMessagesFromDM(query: DmQuery & {
        conversationId: number;
    }): Promise<DmMessagesResponse>;
}
