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
        this.dm = new routes_1.DmAPI(http);
    }
}
exports.FaceClient = FaceClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBb0M7QUFDcEMscUNBQWlFO0FBRWpFLE1BQWEsVUFBVTtJQU1uQixZQUFhLE1BQWMsRUFBRSxPQUFnQjtRQUN6QyxNQUFNLElBQUksR0FBRyxJQUFJLGlCQUFVLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxjQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKO0FBZEQsZ0NBY0MifQ==