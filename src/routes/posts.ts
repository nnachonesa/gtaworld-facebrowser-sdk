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

    /**
     *
     *
     * @param {ListPostQuery} query
     * @return {*} 
     * @memberof PostsAPI
     */
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

    /**
     *
     *
     * @param {CreatePostQuery} body
     * @return {*} 
     * @memberof PostsAPI
     */
    create(body: CreatePostQuery) {
        return this.http.ky
            .post("posts", {
                json: body,
            })
            .json<CreatePostResponse>();
    }

    /**
     *
     *
     * @param {GetPostQuery} query
     * @return {*} 
     * @memberof PostsAPI
     */
    get(query: GetPostQuery) {
        return this.http.ky
            .get(`posts/${query.postId}`, {
                searchParams: {
                    page_id: query.pageId,
                },
            })
            .json<CreatePostResponse>();
    }

    /**
     *
     *
     * @param {DeletePostQuery} query
     * @return {*} 
     * @memberof PostsAPI
     */
    delete(query: DeletePostQuery) {
        return this.http.ky.delete(`posts/${query.postId}`, {
            searchParams: {
                page_id: query.page_id,
            },
        });
    }

    /**
     *
     *
     * @param {EditPostQuery} query
     * @return {*} 
     * @memberof PostsAPI
     */
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