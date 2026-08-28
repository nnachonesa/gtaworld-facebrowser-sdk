import type { HttpClient } from '../http';
import type { GetComment, GetCommentsQuery, PostComment, PostCommentQuery } from '../types';

export class CommentAPI {
	constructor(private readonly http: HttpClient) {}

	get(query: GetCommentsQuery) {
		return this.http.ky
			.get(`posts/${query.post_id}/comments`, {
				searchParams: {
					page_id: query.page_id,
				},
			})
			.json<GetComment>();
	}

	post(query: PostCommentQuery) {
		return this.http.ky
			.post(`posts/${query.post_id}/comments`, {
				searchParams: {
					page_id: query.page_id,
				},
				json: {
					content: query.content,
				},
			})
			.json<PostComment>();
	}
}
