import { type HttpClient } from '../http';
import { type DmQuery, type DmReponse, type DmMessagesResponse } from '../types';

export class DmAPI {
    constructor (private readonly http: HttpClient) { }
    /**
     * GET /dms — Query: page_id — List page DMs
     * GET /dms/{conversationId}/messages — Query: page_id — DM messages
     *
     */
    list (query: DmQuery) {
        return this.http.ky
            .get('/dms', {
                searchParams: {
                    page_id: query.page_id
                }
            })
            .json<DmReponse>();
    }

    getMessagesFromDM (query: DmQuery & { conversationId: number }) {
        return this.http.ky
            .get(`/dms/${ query.conversationId }/messages`, {
                searchParams: {
                    page_id: query.page_id
                }
            })
            .json<DmMessagesResponse>();
    }
}
