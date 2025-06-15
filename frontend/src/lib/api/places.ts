import { Place, PlaceCreationParams, PlaceUpdateParams } from '@shared-types/place';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getPlaces(): Promise<Place[]> {
    const res = await fetch(`${baseUrl}/places`);

    if (!res.ok) {
        throw new Error('Не удалось загрузить список мест')
    }

    return res.json();
}

export async function getPlace(id: string): Promise<Place> {
    const res = await fetch(`${baseUrl}/places/${id}`);

    if (!res.ok) {
        throw new Error('Не удалось загрузить место')
    }

    return res.json();
}

export async function createPlace(place: PlaceCreationParams): Promise<void> {
    const res = await fetch(`${baseUrl}/places`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(place),
    });

    if (!res.ok) {
        throw new Error('Не удалось создать место')
    }
}

export async function updatePlace(id: string, place: PlaceUpdateParams): Promise<void> {
    const res = await fetch(`${baseUrl}/places/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(place),
    });

    if (!res.ok) {
        throw new Error('Не удалось обновить место')
    }
}

export async function deletePlace(id: string): Promise<void> {
    const res = await fetch(`${baseUrl}/places/${id}`, {
        method: 'DELETE',
    });

    if (!res.ok) {
        throw new Error('Не удалось загрузить список мест')
    }
}

export async function connectTagsToPlace(placeId: string, tagIds: string[]): Promise<void> {
    const res = await fetch(`${baseUrl}/places/${placeId}/tags`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tagIds }),
    });

    if (!res.ok) {
        throw new Error('Не удалось привязать теги к месту')
    }
}

export async function disconnectTagsFromPlace(placeId: string, tagIds: string[]): Promise<void> {
    const res = await fetch(`${baseUrl}/places/${placeId}/tags/disconnect`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tagIds }),
    });

    if (!res.ok) {
        throw new Error('Не удалось отвязать теги от места')
    }
}