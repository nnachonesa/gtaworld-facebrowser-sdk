"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentAPI = void 0;
class CommentAPI {
    constructor(http) {
        this.http = http;
    }
    get(query) {
        return this.http.ky
            .get(`posts/${query.postId}/comments`, {
            searchParams: {
                page_id: query.page_id
            }
        })
            .json();
    }
    post(query) {
        return this.http.ky
            .post(`posts/${query.postId}/comments`, {
            searchParams: {
                page_id: query.page_id,
                content: query.content
            }
        })
            .json();
    }
}
exports.CommentAPI = CommentAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2NvbW1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLE1BQWEsVUFBVTtJQUNuQixZQUE2QixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUVsRCxHQUFHLENBQUMsS0FBdUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDZCxHQUFHLENBQUMsU0FBUyxLQUFLLENBQUMsTUFBTSxXQUFXLEVBQUU7WUFDbkMsWUFBWSxFQUFFO2dCQUNWLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTzthQUN6QjtTQUNKLENBQUM7YUFDRCxJQUFJLEVBQWMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxDQUFDLEtBQXVCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ2QsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLE1BQU0sV0FBVyxFQUFFO1lBQ3BDLFlBQVksRUFBRTtnQkFDVixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3RCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTzthQUN6QjtTQUNKLENBQUM7YUFDRCxJQUFJLEVBQWUsQ0FBQztJQUM3QixDQUFDO0NBQ0o7QUF0QkQsZ0NBc0JDIn0=