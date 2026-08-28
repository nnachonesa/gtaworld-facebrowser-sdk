"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesAPI = void 0;
class PagesAPI {
    http;
    constructor(http) {
        this.http = http;
    }
    mine() {
        return this.http.ky.get('pages/mine').json();
    }
}
exports.PagesAPI = PagesAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3BhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLE1BQWEsUUFBUTtJQUNTO0lBQTdCLFlBQTZCLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBRWpELElBQUk7UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQXFCLENBQUM7SUFDakUsQ0FBQztDQUNEO0FBTkQsNEJBTUMifQ==