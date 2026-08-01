"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesAPI = void 0;
class PagesAPI {
    constructor(http) {
        this.http = http;
    }
    mine() {
        return this.http.ky
            .get('pages/mine')
            .json();
    }
}
exports.PagesAPI = PagesAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3BhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLE1BQWEsUUFBUTtJQUNqQixZQUE4QixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUVuRCxJQUFJO1FBQ0EsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDZCxHQUFHLENBQUMsWUFBWSxDQUFDO2FBQ2pCLElBQUksRUFBcUIsQ0FBQztJQUNuQyxDQUFDO0NBQ0o7QUFSRCw0QkFRQyJ9