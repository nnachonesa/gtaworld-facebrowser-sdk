import type { HttpClient } from '../http';
import type { MinePagesResponse } from '../types';
export declare class PagesAPI {
    private readonly http;
    constructor(http: HttpClient);
    mine(): Promise<MinePagesResponse>;
}
//# sourceMappingURL=pages.d.ts.map