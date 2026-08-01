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
            prefix: baseUrl !== null && baseUrl !== void 0 ? baseUrl : 'https://face-es.gta.world/api/v1/page-api',
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
    }
}
exports.HttpClient = HttpClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9odHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRDQUF5QztBQUV6QyxNQUFhLFVBQVU7SUFHbkIsWUFBYSxNQUFjLEVBQUUsT0FBZ0I7UUFDekMsSUFBSSxDQUFDLEVBQUUsR0FBRyxZQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2hCLE1BQU0sRUFBRSxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSwyQ0FBMkM7WUFDOUQsT0FBTyxFQUFFO2dCQUNMLGFBQWEsRUFBRSxVQUFXLE1BQU8sRUFBRTthQUN0QztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQVhELGdDQVdDIn0=