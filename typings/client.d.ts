import { PostsAPI, CommentAPI, PagesAPI, DmAPI } from './routes';
export declare class FaceClient {
    readonly posts: PostsAPI;
    readonly comments: CommentAPI;
    readonly pages: PagesAPI;
    readonly dm: DmAPI;
    constructor(apiKey: string, baseUrl?: string);
}
