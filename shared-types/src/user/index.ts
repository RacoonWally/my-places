export interface User {
    id: string;
    name: string;
    email: string;
}

export interface UserCreationParams {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

export interface UserUpdateParams {
    name: string;
    email: string;
}