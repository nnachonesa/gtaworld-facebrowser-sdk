import { HttpClient } from "../http";
import { CreatePostQuery, CreatePostResponse, DeletePostQuery, EditPostQuery, GetPostQuery, ListPostQuery, Posts, Post } from "../types";
export declare class PostsAPI {
    private readonly http;
    constructor(http: HttpClient);
    list(query: ListPostQuery): Promise<Posts>;
    create(body: CreatePostQuery): Promise<CreatePostResponse>;
    get(query: GetPostQuery): Promise<CreatePostResponse>;
    delete(query: DeletePostQuery): import("ky").ResponsePromise<unknown>;
    edit(query: EditPostQuery): Promise<Post>;
}
