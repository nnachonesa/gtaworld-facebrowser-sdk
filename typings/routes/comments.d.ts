import { HttpClient } from "../http";
import { GetCommentsQuery, PostCommentQuery, GetComment, PostComment } from '../types';
export declare class CommentAPI {
    private readonly http;
    constructor(http: HttpClient);
    get(query: GetCommentsQuery): Promise<GetComment>;
    post(query: PostCommentQuery): Promise<PostComment>;
}
