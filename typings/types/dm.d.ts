/**
 * GET /dms — Query: page_id — List page DMs
 * GET /dms/{conversationId}/messages — Query: page_id — DM messages
 *
 */
export interface DmQuery {
    page_id: number;
}
export interface DmResponse {
    conversations: DmConversations[];
    meta: DmMeta;
}
/** @deprecated Usa DmResponse (typo corregido) */
export type DmReponse = DmResponse;
export interface DmConversations {
    id: number;
    profile: DmProfile;
    last_message: DmLastMessage;
    last_message_at: string;
}
export interface DmLastMessage {
    id: number;
    content: string;
    from_page: boolean;
    created_at: string;
}
export interface DmProfile {
    id: number;
    username: string;
    character_name: string;
    avatar_url: string;
}
export interface DmMeta {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}
export type DmSender = {
    type: 'page';
    page: {
        id: number;
        name: string;
    };
} | {
    type: 'profile';
    profile: DmProfile;
} | {
    type: string;
    page?: {
        id: number;
        name: string;
    };
    profile?: DmProfile;
};
export interface DmMessage {
    id: number;
    content: string;
    from_page: boolean;
    sender: DmSender;
    created_at: string;
}
export interface DmMessagesResponse {
    messages: DmMessage[];
    next_cursor: string | null;
    prev_cursor: string | null;
}
//# sourceMappingURL=dm.d.ts.map