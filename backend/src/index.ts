import express from 'express';

import userRoutes from './routes/userRoutes';
import placeRoutes from './routes/placeRoutes';
import tagRoutes from './routes/tagRoutes';

const app = express();
const port = 3101;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/places', placeRoutes);
app.use('/tags', tagRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});