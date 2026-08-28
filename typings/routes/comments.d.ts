import type { HttpClient } from '../http';
import type { GetComment, GetCommentsQuery, PostComment, PostCommentQuery } from '../types';
export declare class CommentAPI {
    private readonly http;
    constructor(http: HttpClient);
    get(query: GetCommentsQuery): Promise<GetComment>;
    post(query: PostCommentQuery): Promise<PostComment>;
}
//# sourceMappingURL=comments.d.ts.map