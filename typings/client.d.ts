import { PostsAPI, CommentAPI, PagesAPI } from "./routes";
export declare class FaceClient {
    readonly posts: PostsAPI;
    readonly comments: CommentAPI;
    readonly pages: PagesAPI;
    constructor(apiKey: string, baseUrl?: string);
}
