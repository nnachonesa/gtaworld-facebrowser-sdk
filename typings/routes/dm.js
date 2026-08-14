"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmAPI = void 0;
class DmAPI {
    constructor(http) {
        this.http = http;
    }
    list(query) {
        return this.http.ky
            .get('dms', {
            searchParams: {
                page_id: query.page_id,
            },
        })
            .json();
    }
    getMessagesFromDM(query) {
        return this.http.ky
            .get(`dms/${query.conversationId}/messages`, {
            searchParams: {
                page_id: query.page_id,
            },
        })
            .json();
    }
}
exports.DmAPI = DmAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2RtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLE1BQWEsS0FBSztJQUNqQixZQUE2QixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUNqRCxJQUFJLENBQUMsS0FBYztRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNqQixHQUFHLENBQUMsS0FBSyxFQUFFO1lBQ1gsWUFBWSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTzthQUN0QjtTQUNELENBQUM7YUFDRCxJQUFJLEVBQWEsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBMkM7UUFDNUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDakIsR0FBRyxDQUFDLE9BQU8sS0FBSyxDQUFDLGNBQWMsV0FBVyxFQUFFO1lBQzVDLFlBQVksRUFBRTtnQkFDYixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87YUFDdEI7U0FDRCxDQUFDO2FBQ0QsSUFBSSxFQUFzQixDQUFDO0lBQzlCLENBQUM7Q0FDRDtBQXJCRCxzQkFxQkMifQ==