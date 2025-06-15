'use client';

import { useState } from 'react';
import classNames from 'classnames';

import styles from './PlacesList.module.scss';

import { Place } from '@shared-types/place';

import { deletePlace } from '@/lib/api/places';

interface Props {
    initialPlaces: Place[];
}

export default function PlacesList({ initialPlaces }: Props) {
    const [places, setPlaces] = useState(initialPlaces);

    const handleDelete = async (id: string) => {
        try {
            await deletePlace(id)
            setPlaces(prev => prev.filter(place => place.id !== id));
        } catch (error) {
            console.error('Ошибка удаления:', error);
        }
    };

    return (
        <ul className={styles.list}>
            {places.map((place) => (
                <li key={place.id} className={classNames(styles.item)}>
                    <span>{place.name} — {place.country}</span>
                    <button onClick={() => handleDelete(place.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    );
}