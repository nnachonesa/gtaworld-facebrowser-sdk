"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsAPI = void 0;
class PostsAPI {
    http;
    constructor(http) {
        this.http = http;
    }
    list(query) {
        const searchParams = {
            page_id: query.page_id,
        };
        if (query.cursor) {
            searchParams.cursor = query.cursor;
        }
        return this.http.ky
            .get('posts', {
            searchParams,
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
            .get(`posts/${query.post_id}`, {
            searchParams: {
                page_id: query.page_id,
            },
        })
            .json();
    }
    delete(query) {
        return this.http.ky
            .delete(`posts/${query.post_id}`, {
            searchParams: {
                page_id: query.page_id,
            },
        })
            .then(() => undefined);
    }
    edit(query) {
        return this.http.ky
            .put(`posts/${query.post_id}`, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3Bvc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVlBLE1BQWEsUUFBUTtJQUNTO0lBQTdCLFlBQTZCLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBRWpELElBQUksQ0FBQyxLQUFvQjtRQUN4QixNQUFNLFlBQVksR0FBb0M7WUFDckQsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1NBQ3RCLENBQUM7UUFDRixJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDcEMsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ2pCLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDYixZQUFZO1NBQ1osQ0FBQzthQUNELElBQUksRUFBUyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBcUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksRUFBRSxJQUFJO1NBQ1YsQ0FBQzthQUNELElBQUksRUFBc0IsQ0FBQztJQUM5QixDQUFDO0lBRUQsR0FBRyxDQUFDLEtBQW1CO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ2pCLEdBQUcsQ0FBQyxTQUFTLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUM5QixZQUFZLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2FBQ3RCO1NBQ0QsQ0FBQzthQUNELElBQUksRUFBUSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBc0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDakIsTUFBTSxDQUFDLFNBQVMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2pDLFlBQVksRUFBRTtnQkFDYixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87YUFDdEI7U0FDRCxDQUFDO2FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBb0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDakIsR0FBRyxDQUFDLFNBQVMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzlCLFlBQVksRUFBRTtnQkFDYixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87YUFDdEI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2FBQ3RCO1NBQ0QsQ0FBQzthQUNELElBQUksRUFBUSxDQUFDO0lBQ2hCLENBQUM7Q0FDRDtBQXpERCw0QkF5REMifQ==