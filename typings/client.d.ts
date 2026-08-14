import { CommentAPI, DmAPI, PagesAPI, PostsAPI } from './routes';
export declare class FaceClient {
    readonly posts: PostsAPI;
    readonly comments: CommentAPI;
    readonly pages: PagesAPI;
    readonly dm: DmAPI;
    constructor(apiKey: string, baseUrl?: string);
}
