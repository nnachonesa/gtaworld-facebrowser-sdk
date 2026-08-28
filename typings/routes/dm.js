"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmAPI = void 0;
class DmAPI {
    http;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2RtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLE1BQWEsS0FBSztJQUNZO0lBQTdCLFlBQTZCLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBQ2pELElBQUksQ0FBQyxLQUFjO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ2pCLEdBQUcsQ0FBQyxLQUFLLEVBQUU7WUFDWCxZQUFZLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2FBQ3RCO1NBQ0QsQ0FBQzthQUNELElBQUksRUFBYyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUEyQztRQUM1RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTthQUNqQixHQUFHLENBQUMsT0FBTyxLQUFLLENBQUMsY0FBYyxXQUFXLEVBQUU7WUFDNUMsWUFBWSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTzthQUN0QjtTQUNELENBQUM7YUFDRCxJQUFJLEVBQXNCLENBQUM7SUFDOUIsQ0FBQztDQUNEO0FBckJELHNCQXFCQyJ9