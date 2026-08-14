import { HttpClient } from './http';
import { CommentAPI, DmAPI, PagesAPI, PostsAPI } from './routes';

export class FaceClient {
	public readonly posts: PostsAPI;
	public readonly comments: CommentAPI;
	public readonly pages: PagesAPI;
	public readonly dm: DmAPI;

	constructor(apiKey: string, baseUrl?: string) {
		const http = new HttpClient(apiKey, baseUrl);

		this.posts = new PostsAPI(http);
		this.comments = new CommentAPI(http);
		this.pages = new PagesAPI(http);
		this.dm = new DmAPI(http);
	}
}
