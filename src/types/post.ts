import type { Page } from './pages';
import type { Profile } from './profile';

export interface CreatePostQuery {
    page_id: number
    content: string
}

export interface GetPostQuery {
    postId: number
    pageId: number
}

export interface ListPostQuery {
    pageId: number
    cursor?: string
}

export interface EditPostQuery {
    postId: number
    page_id: number
    content: string
}

export interface DeletePostQuery {
    postId: number
    page_id: number
}

export interface CreatePostResponse {
    post: Post
}

export interface Post {
    id: number
    profile_id: number
    target_profile_id: number | null
    group_id: number | null
    page_id: number
    type: string
    content: string
    visibility: string
    sharing_enabled: boolean
    can_share: boolean
    feeling: string | null
    activity: string | null
    location_tag: string | null
    background_color: string | null
    is_adult_content: boolean | null
    comments_disabled: boolean
    edited_at: string | null
    scheduled_at: string | null
    is_scheduled: boolean
    is_published: boolean
    boosted_at: string | null
    boost_expires_at: string | null
    is_boosted: boolean
    pinned_at: string | null
    is_pinned: boolean
    created_at: string
    updated_at: string
    profile: Profile
    page: Page
    media: unknown[]
    reactions_count: number
    comments_count: number
    shares_count: number
    boost_views_count: number | null
    reaction_counts: unknown[]
    user_reaction: unknown | null
    is_saved: boolean
    is_hidden: boolean
}

export interface PostsLinks {
    first: string | null
    last: string | null
    prev: string | null
    next: string | null
}

export interface PostsMeta {
    path: string
    per_page: number
    next_cursor: string | null
    prev_cursor: string | null
}

export interface Posts {
    data: Post[]
    links: PostsLinks
    meta: PostsMeta
}
