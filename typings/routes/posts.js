"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsAPI = void 0;
class PostsAPI {
    constructor(http) {
        this.http = http;
    }
    list(query) {
        return this.http.ky
            .get('posts', {
            searchParams: {
                page_id: query.pageId,
                cursor: query.cursor
            }
        })
            .json();
    }
    create(body) {
        return this.http.ky
            .post('posts', {
            json: body
        })
            .json();
    }
    get(query) {
        return this.http.ky
            .get(`posts/${query.postId}`, {
            searchParams: {
                page_id: query.pageId
            }
        })
            .json();
    }
    delete(query) {
        return this.http.ky.delete(`posts/${query.postId}`, {
            searchParams: {
                page_id: query.page_id
            }
        });
    }
    edit(query) {
        return this.http.ky
            .put(`posts/${query.postId}`, {
            searchParams: {
                page_id: query.page_id
            },
            json: {
                content: query.content
            }
        })
            .json();
    }
}
exports.PostsAPI = PostsAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3Bvc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVlBLE1BQWEsUUFBUTtJQUNqQixZQUE4QixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUVuRCxJQUFJLENBQUUsS0FBb0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDZCxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQ1YsWUFBWSxFQUFFO2dCQUNWLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTTtnQkFDckIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO2FBQ3ZCO1NBQ0osQ0FBQzthQUNELElBQUksRUFBUyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxNQUFNLENBQUUsSUFBcUI7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDZCxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDO2FBQ0QsSUFBSSxFQUFzQixDQUFDO0lBQ3BDLENBQUM7SUFFRCxHQUFHLENBQUUsS0FBbUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDZCxHQUFHLENBQUMsU0FBVSxLQUFLLENBQUMsTUFBTyxFQUFFLEVBQUU7WUFDNUIsWUFBWSxFQUFFO2dCQUNWLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTTthQUN4QjtTQUNKLENBQUM7YUFDRCxJQUFJLEVBQXNCLENBQUM7SUFDcEMsQ0FBQztJQUVELE1BQU0sQ0FBRSxLQUFzQjtRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFVLEtBQUssQ0FBQyxNQUFPLEVBQUUsRUFBRTtZQUNsRCxZQUFZLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2FBQ3pCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELElBQUksQ0FBRSxLQUFvQjtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNkLEdBQUcsQ0FBQyxTQUFVLEtBQUssQ0FBQyxNQUFPLEVBQUUsRUFBRTtZQUM1QixZQUFZLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2FBQ3pCO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTzthQUN6QjtTQUNKLENBQUM7YUFDRCxJQUFJLEVBQVEsQ0FBQztJQUN0QixDQUFDO0NBQ0o7QUFwREQsNEJBb0RDIn0=