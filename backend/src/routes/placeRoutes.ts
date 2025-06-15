import { Router } from 'express';

import { prisma } from '../prisma';
import { Place, PlaceCreationParams, PlaceUpdateParams } from '@shared-types/place';

const router = Router();

// GET /places — Получить все места
router.get('/', async (req, res) => {
    try {
        const places: Place[] = await prisma.place.findMany({
            include: { tags: true },
        });

        res.json(places);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при получении мест' });
    }
});

// POST /places — Создать место
router.post('/', async (req, res): Promise<void> => {
    const creationParams: PlaceCreationParams = req.body

    try {
        const place = await prisma.place.create({
            data: creationParams,
        });

        res.status(201).json(place);
    } catch (error) {
        res.status(400).json({ error: 'Ошибка при создании места' });
    }
});

// DELETE /places/:id — Удалить место
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.place.delete({
            where: { id },
        });

        res.status(204).send(); // 204 — No Content
    } catch (error) {
        res.status(400).json({ error: 'Ошибка при удалении места' });
    }
});

// PATCH /places/:id — Обновить место
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const updateData: PlaceUpdateParams = req.body;

    try {
        await prisma.place.update({
            where: { id },
            data: updateData,
        });

        res.status(200).send(); // 200 OK — успешно обновлено
    } catch (error) {
        res.status(400).json({ error: 'Ошибка при обновлении места' });
    }
});

// POST /places/:placeId/tags — привязать теги к месту
router.post('/:placeId/tags', async (req, res) => {
    const { placeId } = req.params;
    const { tagIds } = req.body;

    try {
        const place = await prisma.place.update({
            where: { id: placeId },
            data: {
                tags: {
                    connect: tagIds.map((id: string) => ({ id })),
                },
            },
            include: { tags: true },
        });

        res.json(place);
    } catch (error) {
        res.status(400).json({ error: 'Ошибка при привязке тегов' });
    }
});

// POST /places/:placeId/tags/disconnect — Удалить связь места с тегами
router.post('/:placeId/tags/disconnect', async (req, res) => {
    const { placeId } = req.params;
    const { tagIds } = req.body;

    try {
        const place = await prisma.place.update({
            where: { id: placeId },
            data: {
                tags: {
                    disconnect: tagIds.map((id: string) => ({ id })),
                },
            },
            include: { tags: true },
        });

        res.json(place);
    } catch (error) {
        res.status(400).json({ error: 'Ошибка при удалении связи с тегами' });
    }
});

export default router;