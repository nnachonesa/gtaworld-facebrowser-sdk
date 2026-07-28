"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const ky_1 = __importDefault(require("ky"));
class HttpClient {
    constructor(apiKey, baseUrl) {
        this.ky = ky_1.default.create({
            prefix: baseUrl ? baseUrl : "https://face-es.gta.world/api/v1/page-api",
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });
    }
}
exports.HttpClient = HttpClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9odHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRDQUFvQztBQUVwQyxNQUFhLFVBQVU7SUFHckIsWUFBWSxNQUFjLEVBQUUsT0FBZTtRQUN6QyxJQUFJLENBQUMsRUFBRSxHQUFHLFlBQUUsQ0FBQyxNQUFNLENBQUM7WUFDbEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQywyQ0FBMkM7WUFDdkUsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFBRSxVQUFVLE1BQU0sRUFBRTthQUNsQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQVhELGdDQVdDIn0=