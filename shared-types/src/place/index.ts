import { Tag } from '@shared-types/tag';

export interface Place {
    id: string;
    name: string;
    userId: string;
    country: string;
    description?: string | null;
    imageUrl?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    tags?: Tag[];
}

export interface PlaceCreationParams {
    id: string;
    name: string;
    country: string;
    userId: string;
    description?: string | null;
    imageUrl?: string | null;
    latitude?: number | null;
    longitude?: number | null;
}

export interface PlaceUpdateParams {
    name?: string;
    country?: string;
    description?: string;
    imageUrl?: string;
    latitude?: number;
    longitude?: number;
    userId?: string;
}