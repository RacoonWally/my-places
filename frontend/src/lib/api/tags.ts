import { Tag, TagCreationParams, TagUpdateParams } from '@shared-types/tag';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getTags(): Promise<Tag[]> {
    const res = await fetch(`${baseUrl}/tags`);

    if (!res.ok) {
        throw new Error('Не удалось загрузить список тегов')
    }

    return res.json();
}

export async function getTag(id: string): Promise<Tag> {
    const res = await fetch(`${baseUrl}/tags/${id}`);

    if (!res.ok) {
        throw new Error('Не удалось загрузить тег')
    }

    return res.json();
}

export async function createTag(tag: TagCreationParams): Promise<void> {
    const res = await fetch(`${baseUrl}/tags`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tag),
    });

    if (!res.ok) {
        throw new Error('Не удалось создать тег')
    }
}

export async function updateTag(id: string, tag: TagUpdateParams): Promise<void> {
    const res = await fetch(`${baseUrl}/tags/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tag),
    });

    if (!res.ok) {
        throw new Error('Не удалось обновить тег')
    }
}

export async function deleteTag(id: string): Promise<void> {
    const res = await fetch(`${baseUrl}/tags/${id}`, {
        method: 'DELETE',
    });

    if (!res.ok) {
        throw new Error('Не удалось загрузить список тегов')
    }
}