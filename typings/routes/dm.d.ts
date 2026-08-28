import type { HttpClient } from '../http';
import type { DmMessagesResponse, DmQuery, DmResponse } from '../types';
export declare class DmAPI {
    private readonly http;
    constructor(http: HttpClient);
    list(query: DmQuery): Promise<DmResponse>;
    getMessagesFromDM(query: DmQuery & {
        conversationId: number;
    }): Promise<DmMessagesResponse>;
}
//# sourceMappingURL=dm.d.ts.map