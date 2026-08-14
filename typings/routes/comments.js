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
                page_id: query.page_id,
            },
        })
            .json();
    }
    post(query) {
        return this.http.ky
            .post(`posts/${query.postId}/comments`, {
            searchParams: {
                page_id: query.page_id,
                content: query.content,
            },
        })
            .json();
    }
}
exports.CommentAPI = CommentAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2NvbW1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLE1BQWEsVUFBVTtJQUN0QixZQUE2QixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUVqRCxHQUFHLENBQUMsS0FBdUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDakIsR0FBRyxDQUFDLFNBQVMsS0FBSyxDQUFDLE1BQU0sV0FBVyxFQUFFO1lBQ3RDLFlBQVksRUFBRTtnQkFDYixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87YUFDdEI7U0FDRCxDQUFDO2FBQ0QsSUFBSSxFQUFjLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksQ0FBQyxLQUF1QjtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNqQixJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsTUFBTSxXQUFXLEVBQUU7WUFDdkMsWUFBWSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDdEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2FBQ3RCO1NBQ0QsQ0FBQzthQUNELElBQUksRUFBZSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRDtBQXZCRCxnQ0F1QkMifQ==