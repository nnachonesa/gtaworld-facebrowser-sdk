"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const ky_1 = __importDefault(require("ky"));
class HttpClient {
    ky;
    constructor(apiKey, baseUrl) {
        if (!apiKey || typeof apiKey !== 'string' || apiKey.trim().length === 0) {
            throw new Error('FaceClient: apiKey es requerido y debe ser un string no vacío');
        }
        const base = baseUrl ?? 'https://face-es.gta.world/api/v1/page-api/';
        const normalizedBase = base.endsWith('/') ? base : `${base}/`;
        this.ky = ky_1.default.create({
            prefix: normalizedBase,
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
            timeout: 15_000,
            retry: {
                limit: 2,
                methods: ['get'],
                statusCodes: [408, 429, 500, 502, 503, 504],
            },
            hooks: {
                beforeError: [
                    ({ error }) => {
                        // ky v2 pasa {request, options, error, retryCount}
                        const httpError = error;
                        const response = httpError.response;
                        if (response) {
                            if (response.status === 401) {
                                httpError.message = 'FaceBrowser API: 401 Unauthorized — verifica tu API key';
                            }
                            else if (response.status === 404) {
                                // response.url puede no estar en Response nativo, usar request url si hace falta
                                const url = response.url ?? 'unknown';
                                httpError.message = `FaceBrowser API: 404 Not Found — ${url}`;
                            }
                            else if (response.status === 429) {
                                httpError.message = 'FaceBrowser API: 429 Rate Limited — reintenta más tarde';
                            }
                        }
                        return error;
                    },
                ],
            },
        });
    }
}
exports.HttpClient = HttpClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9odHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRDQUF5QztBQUV6QyxNQUFhLFVBQVU7SUFDTixFQUFFLENBQWE7SUFFL0IsWUFBWSxNQUFjLEVBQUUsT0FBZ0I7UUFDM0MsSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUN6RSxNQUFNLElBQUksS0FBSyxDQUFDLCtEQUErRCxDQUFDLENBQUM7UUFDbEYsQ0FBQztRQUVELE1BQU0sSUFBSSxHQUFHLE9BQU8sSUFBSSw0Q0FBNEMsQ0FBQztRQUNyRSxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUM7UUFFOUQsSUFBSSxDQUFDLEVBQUUsR0FBRyxZQUFFLENBQUMsTUFBTSxDQUFDO1lBQ25CLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLE9BQU8sRUFBRTtnQkFDUixhQUFhLEVBQUUsVUFBVSxNQUFNLEVBQUU7YUFDakM7WUFDRCxPQUFPLEVBQUUsTUFBTTtZQUNmLEtBQUssRUFBRTtnQkFDTixLQUFLLEVBQUUsQ0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hCLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2FBQzNDO1lBQ0QsS0FBSyxFQUFFO2dCQUNOLFdBQVcsRUFBRTtvQkFDWixDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTt3QkFDYixtREFBbUQ7d0JBQ25ELE1BQU0sU0FBUyxHQUFHLEtBQTRELENBQUM7d0JBQy9FLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7d0JBQ3BDLElBQUksUUFBUSxFQUFFLENBQUM7NEJBQ2QsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO2dDQUM3QixTQUFTLENBQUMsT0FBTyxHQUFHLHlEQUF5RCxDQUFDOzRCQUMvRSxDQUFDO2lDQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztnQ0FDcEMsaUZBQWlGO2dDQUNqRixNQUFNLEdBQUcsR0FBSSxRQUF3QyxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUM7Z0NBQ3ZFLFNBQVMsQ0FBQyxPQUFPLEdBQUcsb0NBQW9DLEdBQUcsRUFBRSxDQUFDOzRCQUMvRCxDQUFDO2lDQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztnQ0FDcEMsU0FBUyxDQUFDLE9BQU8sR0FBRyx5REFBeUQsQ0FBQzs0QkFDL0UsQ0FBQzt3QkFDRixDQUFDO3dCQUNELE9BQU8sS0FBSyxDQUFDO29CQUNkLENBQUM7aUJBQ0Q7YUFDRDtTQUNELENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRDtBQTdDRCxnQ0E2Q0MifQ==