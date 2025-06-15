import { ReactNode } from 'react';

import './globals.scss';
import { Footer } from '@/app/components/Footer/Footer';
import { Header } from '@/app/components/Header/Header';

export const metadata = {
    title: 'Places to Visit',
    description: 'Храни интересные места, которые ты хочешь посетить',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
        <body>
            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </body>
        </html>
    );
}