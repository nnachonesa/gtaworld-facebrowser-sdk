export interface DmQuery {
    page_id: number;
}
export interface DmReponse {
    conversations: DmConversations[];
    meta: DmMeta;
}
interface DmConversations {
    id: number;
    profile: DmProfile;
    last_message: DmLastMessage;
    last_message_at: string;
}
interface DmLastMessage {
    id: number;
    content: string;
    from_page: boolean;
    created_at: string;
}
interface DmProfile {
    id: number;
    username: string;
    character_name: string;
    avatar_url: string;
}
interface DmMeta {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}
export interface DmMessagesResponse {
    messages: [
        {
            id: number;
            content: string;
            from_page: boolean;
            sender: {
                type: string;
                page: {
                    id: number;
                    name: string;
                };
            };
            created_at: string;
        }
    ];
    next_cursor: boolean;
    prev_cursor: boolean;
}
export {};
