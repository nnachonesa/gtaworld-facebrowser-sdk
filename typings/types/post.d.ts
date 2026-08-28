import type { Page } from './pages';
import type { Profile } from './profile';
export interface CreatePostQuery {
    page_id: number;
    content: string;
}
export interface GetPostQuery {
    post_id: number;
    page_id: number;
}
export interface ListPostQuery {
    page_id: number;
    cursor?: string;
}
export interface EditPostQuery {
    post_id: number;
    page_id: number;
    content: string;
}
export interface DeletePostQuery {
    post_id: number;
    page_id: number;
}
export interface CreatePostResponse {
    post: Post;
}
export interface Media {
    id: number;
    url: string;
    type: string;
    thumbnail_url?: string | null;
}
export interface ReactionCount {
    type: string;
    count: number;
}
export interface UserReaction {
    type: string;
    created_at: string;
}
export interface Post {
    id: number;
    profile_id: number;
    target_profile_id: number | null;
    group_id: number | null;
    page_id: number;
    type: string;
    content: string;
    visibility: string;
    sharing_enabled: boolean;
    can_share: boolean;
    feeling: string | null;
    activity: string | null;
    location_tag: string | null;
    background_color: string | null;
    is_adult_content: boolean | null;
    comments_disabled: boolean;
    edited_at: string | null;
    scheduled_at: string | null;
    is_scheduled: boolean;
    is_published: boolean;
    boosted_at: string | null;
    boost_expires_at: string | null;
    is_boosted: boolean;
    pinned_at: string | null;
    is_pinned: boolean;
    created_at: string;
    updated_at: string;
    profile: Profile;
    page: Page;
    media: Media[];
    reactions_count: number;
    comments_count: number;
    shares_count: number;
    boost_views_count: number | null;
    reaction_counts: ReactionCount[];
    user_reaction: UserReaction | null;
    is_saved: boolean;
    is_hidden: boolean;
}
export interface PostsLinks {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
}
export interface PostsMeta {
    path: string;
    per_page: number;
    next_cursor: string | null;
    prev_cursor: string | null;
}
export interface Posts {
    data: Post[];
    links: PostsLinks;
    meta: PostsMeta;
}
//# sourceMappingURL=post.d.ts.map