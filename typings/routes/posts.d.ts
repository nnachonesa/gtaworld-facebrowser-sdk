import type { HttpClient } from '../http';
import type { CreatePostQuery, CreatePostResponse, DeletePostQuery, EditPostQuery, GetPostQuery, ListPostQuery, Post, Posts } from '../types';
export declare class PostsAPI {
    private readonly http;
    constructor(http: HttpClient);
    list(query: ListPostQuery): Promise<Posts>;
    create(body: CreatePostQuery): Promise<CreatePostResponse>;
    get(query: GetPostQuery): Promise<Post>;
    delete(query: DeletePostQuery): import("ky").ResponsePromise<unknown>;
    edit(query: EditPostQuery): Promise<Post>;
}
