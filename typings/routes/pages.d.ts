import { HttpClient } from "../http";
import { MinePagesResponse } from "../types";
export declare class PagesAPI {
    private readonly http;
    constructor(http: HttpClient);
    mine(): Promise<MinePagesResponse>;
}
