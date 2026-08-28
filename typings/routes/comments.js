"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentAPI = void 0;
class CommentAPI {
    http;
    constructor(http) {
        this.http = http;
    }
    get(query) {
        return this.http.ky
            .get(`posts/${query.post_id}/comments`, {
            searchParams: {
                page_id: query.page_id,
            },
        })
            .json();
    }
    post(query) {
        return this.http.ky
            .post(`posts/${query.post_id}/comments`, {
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
exports.CommentAPI = CommentAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2NvbW1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLE1BQWEsVUFBVTtJQUNPO0lBQTdCLFlBQTZCLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBRWpELEdBQUcsQ0FBQyxLQUF1QjtRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNqQixHQUFHLENBQUMsU0FBUyxLQUFLLENBQUMsT0FBTyxXQUFXLEVBQUU7WUFDdkMsWUFBWSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTzthQUN0QjtTQUNELENBQUM7YUFDRCxJQUFJLEVBQWMsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQXVCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ2pCLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxPQUFPLFdBQVcsRUFBRTtZQUN4QyxZQUFZLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2FBQ3RCO1lBQ0QsSUFBSSxFQUFFO2dCQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTzthQUN0QjtTQUNELENBQUM7YUFDRCxJQUFJLEVBQWUsQ0FBQztJQUN2QixDQUFDO0NBQ0Q7QUF6QkQsZ0NBeUJDIn0=