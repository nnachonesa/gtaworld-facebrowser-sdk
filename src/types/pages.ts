export interface Page {
	id: number;
	name: string;
	username: string;
	category: string;
}

export interface MinePagesResponse {
	pages: Page[];
}
