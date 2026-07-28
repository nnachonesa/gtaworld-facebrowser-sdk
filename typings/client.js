"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceClient = void 0;
const http_1 = require("./http");
const routes_1 = require("./routes");
class FaceClient {
    constructor(apiKey, baseUrl) {
        const http = new http_1.HttpClient(apiKey, baseUrl);
        this.posts = new routes_1.PostsAPI(http);
        this.comments = new routes_1.CommentAPI(http);
        this.pages = new routes_1.PagesAPI(http);
    }
}
exports.FaceClient = FaceClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBb0M7QUFDcEMscUNBQTBEO0FBRzFELE1BQWEsVUFBVTtJQUtyQixZQUFZLE1BQWMsRUFBRSxPQUFlO1FBQ3pDLE1BQU0sSUFBSSxHQUFHLElBQUksaUJBQVUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLG1CQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBWkQsZ0NBWUMifQ==