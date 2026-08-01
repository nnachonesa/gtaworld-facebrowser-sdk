import { type HttpClient } from '../http';
import { type GetCommentsQuery, type PostCommentQuery, type GetComment, type PostComment } from '../types';
export declare class CommentAPI {
    private readonly http;
    constructor(http: HttpClient);
    get(query: GetCommentsQuery): Promise<GetComment>;
    post(query: PostCommentQuery): Promise<PostComment>;
}
