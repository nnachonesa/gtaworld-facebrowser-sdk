export interface Page {
    id: number;
    name: string;
    username: string;
    category: string;
    avatar_url?: string | null;
    cover_url?: string | null;
    is_verified?: boolean;
    is_gov_agency?: boolean;
}
export interface MinePagesResponse {
    pages: Page[];
}
//# sourceMappingURL=pages.d.ts.map