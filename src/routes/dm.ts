import type { HttpClient } from '../http';
import type { DmMessagesResponse, DmQuery, DmReponse } from '../types';

export class DmAPI {
	constructor(private readonly http: HttpClient) {}
	list(query: DmQuery) {
		return this.http.ky
			.get('dms', {
				searchParams: {
					page_id: query.page_id,
				},
			})
			.json<DmReponse>();
	}

	getMessagesFromDM(query: DmQuery & { conversationId: number }) {
		return this.http.ky
			.get(`dms/${query.conversationId}/messages`, {
				searchParams: {
					page_id: query.page_id,
				},
			})
			.json<DmMessagesResponse>();
	}
}
