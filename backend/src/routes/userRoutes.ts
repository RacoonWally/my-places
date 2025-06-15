import { Router } from 'express';

import { prisma } from '../prisma';
import { Place } from '@shared-types/place';
import { User, UserCreationParams, UserUpdateParams } from '@shared-types/user';

const router = Router();

// GET /user — Получить пользователя
router.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const user: User | null = await prisma.user.findFirst({
            where: { id: userId },
        });

        res.json(user);
    } catch (error) {
        res.status(400).json({ error: 'Ошибка при получении пользователя' });
    }
});

// GET /user/:userId/places — Получить все места пользователя
router.get('/user/:userId/places', async (req, res) => {
    const { userId } = req.params;

    try {
        const places: Place[] = await prisma.place.findMany({
            where: { userId },
            include: { tags: true },
        });

        res.json(places);
    } catch (error) {
        res.status(400).json({ error: 'Ошибка при получении мест' });
    }
});

// POST /user — Создать пользователя
router.post('/', async (req, res): Promise<void> => {
    const creationParams: UserCreationParams = req.body;

    try {
        const user = await prisma.user.create({
            data: creationParams,
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Ошибка при создании пользователя' });
    }
});

// PATCH /user/:id — Обновить пользователя
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const updateParams: UserUpdateParams = req.body;

    try {
        const user = await prisma.user.update({
            where: { id },
            data: updateParams,
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Ошибка при обновлении пользователя' });
    }
})

export default router;