import classNames from 'classnames';

import styles from './page.module.scss';
import { getPlaces } from '@/lib/api/places';
import PlacesList from '@/app/components/PlacesList/PlacesList';

export default async function PlacesPage() {
    const places = await getPlaces();

    return (
        <main>
            <h1 className={classNames([styles.root])}>Места</h1>
            <PlacesList initialPlaces={places} />;
        </main>
    );
}