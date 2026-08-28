import type { HttpClient } from '../http';
import type {
	CreatePostQuery,
	CreatePostResponse,
	DeletePostQuery,
	EditPostQuery,
	GetPostQuery,
	ListPostQuery,
	Post,
	Posts,
} from '../types';

export class PostsAPI {
	constructor(private readonly http: HttpClient) {}

	list(query: ListPostQuery) {
		return this.http.ky
			.get('posts', {
				searchParams: {
					page_id: query.page_id,
					cursor: query.cursor,
				},
			})
			.json<Posts>();
	}

	create(body: CreatePostQuery) {
		return this.http.ky
			.post('posts', {
				json: body,
			})
			.json<CreatePostResponse>();
	}

	get(query: GetPostQuery) {
		return this.http.ky
			.get(`posts/${query.post_id}`, {
				searchParams: {
					page_id: query.page_id,
				},
			})
			.json<Post>();
	}

	delete(query: DeletePostQuery) {
		return this.http.ky.delete(`posts/${query.post_id}`, {
			searchParams: {
				page_id: query.page_id,
			},
		});
	}

	edit(query: EditPostQuery) {
		return this.http.ky
			.put(`posts/${query.post_id}`, {
				searchParams: {
					page_id: query.page_id,
				},
				json: {
					content: query.content,
				},
			})
			.json<Post>();
	}
}
