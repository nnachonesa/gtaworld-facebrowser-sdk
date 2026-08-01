"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmAPI = void 0;
class DmAPI {
    constructor(http) {
        this.http = http;
    }
    list(query) {
        return this.http.ky
            .get('/dms', {
            searchParams: {
                page_id: query.page_id
            }
        })
            .json();
    }
    getMessagesFromDM(query) {
        return this.http.ky
            .get(`/dms/${query.conversationId}/messages`, {
            searchParams: {
                page_id: query.page_id
            }
        })
            .json();
    }
}
exports.DmAPI = DmAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2RtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLE1BQWEsS0FBSztJQUNkLFlBQThCLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBTW5ELElBQUksQ0FBRSxLQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ2QsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNULFlBQVksRUFBRTtnQkFDVixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87YUFDekI7U0FDSixDQUFDO2FBQ0QsSUFBSSxFQUFhLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQixDQUFFLEtBQTJDO1FBQzFELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQ2QsR0FBRyxDQUFDLFFBQVMsS0FBSyxDQUFDLGNBQWUsV0FBVyxFQUFFO1lBQzVDLFlBQVksRUFBRTtnQkFDVixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87YUFDekI7U0FDSixDQUFDO2FBQ0QsSUFBSSxFQUFzQixDQUFDO0lBQ3BDLENBQUM7Q0FDSjtBQTFCRCxzQkEwQkMifQ==