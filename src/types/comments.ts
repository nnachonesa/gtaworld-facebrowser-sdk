import type { Profile } from './profile';

export interface GetCommentsQuery {
	page_id: number;
	post_id: number;
}

export interface PostCommentQuery {
	page_id: number;
	post_id: number;
	content: string;
}

export interface PostComment {
	id: number;
	post_id: number;
	profile_id: number;
	parent_id: string | number | null;
	content: string;
	edited_at: null;
	created_at: string;
	updated_at: string;
	author_display_name: string | null;
	profile: Profile;
	page: PageComment;
	replies_count: number;
	reactions_count: number;
	reaction_counts: [];
}

interface PageComment {
	id: number;
	name: string;
	username: string;
	avatar_url: string | null;
	is_verified: boolean;
	is_gov_agency: boolean;
}

export interface GetComment {
	comments: PostComment[];
	meta: CommentsMeta;
}

export interface CommentsMeta {
	current_page: number;
	last_page: number;
	per_page: number;
	total: number;
}
