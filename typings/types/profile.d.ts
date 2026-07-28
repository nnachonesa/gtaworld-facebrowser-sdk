export interface Profile {
    id: number;
    user_id: number;
    gtaw_character_id: string;
    username: string;
    character_name: string;
    is_minor: boolean;
    gender: string;
    birthday: string;
    age: number;
    location: string | null;
    bio: string | null;
    website: string | null;
    avatar_url: string | null;
    cover_url: string | null;
    cover_position_x: string | null;
    cover_position_y: string | null;
    cover_zoom: string;
    profile_background_url: string | null;
    profile_background_position_x: string;
    profile_background_position_y: string;
    profile_background_zoom: string;
    is_online: boolean;
    last_seen_at: string | null;
    last_activity_at: string | null;
    created_at: string;
    updated_at: string;
    relationship_type: string | null;
    relationship_partner_id: number | null;
    work_title: string | null;
    work_place: string | null;
    work_website: string | null;
    education: string | null;
    default_post_visibility: string;
    who_can_friend: string;
    who_can_message: string;
    who_can_post_on_wall: string;
    block_friend_requests_from_minors: boolean;
    block_page_invites: boolean;
    block_pokes: boolean;
    block_gifts: boolean;
    show_online_status: boolean;
    who_can_see_bio: string;
    who_can_see_work: string;
    who_can_see_education: string;
    who_can_see_relationship: string;
    who_can_see_location: string;
    who_can_see_social_links: string;
    show_role_badge: boolean;
    hide_profile_visits: boolean;
    appear_in_friend_suggestions: boolean;
    can_hide_profile_visits: boolean;
    is_verified: boolean;
    is_memorial: boolean;
    pending_relationship_request: unknown | null;
    notification_settings: NotificationSettings;
    sound_notifications_muted: boolean;
    sound_messages_muted: boolean;
    badge: string | unknown | null;
    legacy_vip: boolean;
    subscription_tier: string;
    featured_in_search: boolean;
    is_moderator: boolean;
    user: User;
    is_active: boolean;
    allow_adult_content: boolean;
    reveal_blurred_media_by_default: boolean;
    old_fb_attribution_declined_at: string | null;
}
export interface User {
    [key: string]: unknown;
}
export interface NotificationSettings {
    [key: string]: unknown;
}
export interface Media {
    [key: string]: unknown;
}
