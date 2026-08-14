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
                cursor: query.cursor,
            },
        })
            .json();
    }
    create(body) {
        return this.http.ky
            .post('posts', {
            json: body,
        })
            .json();
    }
    get(query) {
        return this.http.ky
            .get(`posts/${query.postId}`, {
            searchParams: {
                page_id: query.pageId,
            },
        })
            .json();
    }
    delete(query) {
        return this.http.ky.delete(`posts/${query.postId}`, {
            searchParams: {
                page_id: query.page_id,
            },
        });
    }
    edit(query) {
        return this.http.ky
            .put(`posts/${query.postId}`, {
            searchParams: {
                page_id: query.page_id,
            },
            json: {
                content: query.content,
            },
        })
            .json();
    }
}
exports.PostsAPI = PostsAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3Bvc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVlBLE1BQWEsUUFBUTtJQUNwQixZQUE2QixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUVqRCxJQUFJLENBQUMsS0FBb0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDakIsR0FBRyxDQUFDLE9BQU8sRUFBRTtZQUNiLFlBQVksRUFBRTtnQkFDYixPQUFPLEVBQUUsS0FBSyxDQUFDLE1BQU07Z0JBQ3JCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTthQUNwQjtTQUNELENBQUM7YUFDRCxJQUFJLEVBQVMsQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQXFCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLEVBQUUsSUFBSTtTQUNWLENBQUM7YUFDRCxJQUFJLEVBQXNCLENBQUM7SUFDOUIsQ0FBQztJQUVELEdBQUcsQ0FBQyxLQUFtQjtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNqQixHQUFHLENBQUMsU0FBUyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDN0IsWUFBWSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTTthQUNyQjtTQUNELENBQUM7YUFDRCxJQUFJLEVBQVEsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQXNCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ25ELFlBQVksRUFBRTtnQkFDYixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87YUFDdEI7U0FDRCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQW9CO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ2pCLEdBQUcsQ0FBQyxTQUFTLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUM3QixZQUFZLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2FBQ3RCO1lBQ0QsSUFBSSxFQUFFO2dCQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTzthQUN0QjtTQUNELENBQUM7YUFDRCxJQUFJLEVBQVEsQ0FBQztJQUNoQixDQUFDO0NBQ0Q7QUFwREQsNEJBb0RDIn0=