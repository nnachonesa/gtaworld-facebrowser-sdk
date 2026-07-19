import { HttpClient } from "../http";
import { GetCommentsQuery, PostCommentQuery, GetComment, PostComment } from '../types'

export class CommentAPI {
    constructor(private readonly http: HttpClient) { }

    get(query: GetCommentsQuery) {
        return this.http.ky
            .get(`posts/${query.postId}/comments`, {
                searchParams: {
                    page_id: query.page_id
                }
            })
            .json<GetComment>();
    }
    post(query: PostCommentQuery) {
        return this.http.ky
            .post(`posts/${query.postId}/comments`, {
                searchParams: {
                    page_id: query.page_id,
                    content: query.content
                }
            })
            .json<PostComment>();
    }
}