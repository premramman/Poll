import status from "./status";

export interface PostModel {
    "id": number,
    "content": string,
    "category": string,
    "tags": string[],
    "likes": number,
    "dislikes": number,
    "views": number,
    "comments": number,
    "liked": boolean,
    "disliked": boolean,
    "createdAt": string,
    "updatedAt": string,
    "userId": number,
    "username": string,
    "userAvatar": string
}

export interface PostListResponse<T> {
    status: status,
    total: number,
    offset: number,
    limit: number,
    data: T[]
}

export interface PostResponse<T> {
    status: status,
    data: T
}

export interface PostListQueryArgs {
    offset: number,
    limit: number
}
