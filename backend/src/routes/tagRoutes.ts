import { Router } from 'express';

import { prisma } from '../prisma';
import { Tag, TagCreationParams, TagUpdateParams } from '@shared-types/tag';

const router = Router();

// POST /tags — создать тег
router.post('/', async (req, res): Promise<void> => {
    const createParams: TagCreationParams = req.body;

    try {
        const tag = await prisma.tag.create({ data: createParams });
        res.status(201).json(tag);
    } catch (error) {
        res.status(400).json({ error: 'Ошибка при создании тега' });
    }
});

// GET /tags — Получить все теги
router.get('/', async (req, res): Promise<void> => {
    try {
        const tags: Tag[] = await prisma.tag.findMany();
        res.json(tags);
    } catch (error) {
        res.status(400).json({ error: 'Ошибка при получении тегов' });
    }
});

// GET /tags — Получить тег
router.get('/:id', async (req, res): Promise<void> => {
    const { id } = req.params;

    try {
        const tag: Tag | null = await prisma.tag.findFirst({ where: { id }})

        res.json(tag)
    } catch (error) {
        res.status(400).json({ error: 'Ошибка при получении тега' });
    }
})

// Patch /tags/:id — Обновить тег
router.patch('/:id', async (req, res): Promise<void> => {
    const { id } = req.params;
    const updateParams: TagUpdateParams = req.body;

    try {
        await prisma.tag.update({
            where: { id },
            data: updateParams,
        })

        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: 'Ошибка при обновлении тега' });
    }
})

// DELETE /tags/:id — Удалить тег
router.delete('/:id', async (req, res): Promise<void> => {
    const { id } = req.params;

    try {
        prisma.tag.delete({ where: { id } });

        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: 'Ошибка при удалении тега' });
    }
})


export default router;