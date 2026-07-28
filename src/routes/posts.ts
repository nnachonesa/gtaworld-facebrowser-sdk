import { HttpClient } from "../http";
import {
    CreatePostQuery,
    CreatePostResponse,
    DeletePostQuery,
    EditPostQuery,
    GetPostQuery,
    ListPostQuery,
    Posts,
    Post,
} from "../types";

export class PostsAPI {
    constructor(private readonly http: HttpClient) { }

    list(query: ListPostQuery) {
        return this.http.ky
            .get("posts", {
                searchParams: {
                    page_id: query.pageId,
                    cursor: query.cursor,
                },
            })
            .json<Posts>();
    }

    create(body: CreatePostQuery) {
        return this.http.ky
            .post("posts", {
                json: body,
            })
            .json<CreatePostResponse>();
    }

    get(query: GetPostQuery) {
        return this.http.ky
            .get(`posts/${query.postId}`, {
                searchParams: {
                    page_id: query.pageId,
                },
            })
            .json<CreatePostResponse>();
    }

    delete(query: DeletePostQuery) {
        return this.http.ky.delete(`posts/${query.postId}`, {
            searchParams: {
                page_id: query.page_id,
            },
        });
    }

    edit(query: EditPostQuery) {
        return this.http.ky
            .put(`posts/${query.postId}`, {
                searchParams: {
                    page_id: query.page_id,
                },
                json: {
                    content: query.content,
                },
            })
            .json<Post>();
    }
}