import type { HttpClient } from '../http';
import type { MinePagesResponse } from '../types';

export class PagesAPI {
	constructor(private readonly http: HttpClient) {}

	mine() {
		return this.http.ky.get('pages/mine').json<MinePagesResponse>();
	}
}
