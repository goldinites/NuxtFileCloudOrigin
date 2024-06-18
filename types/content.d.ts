declare type ContentTypes = 'folder' | 'image' | 'video' | 'audio' | 'file';

declare interface Content {
    id?: number;
    name?: string;
    type?: ContentTypes;
    url?: string;
    order?: number;
    folder_id?: number | null;
    empty?: boolean;
}
