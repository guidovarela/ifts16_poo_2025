
import express from 'express';
import path from 'path';
import translateRouter from './routes/translate.js';

const app = express();
app.use(express.json());
app.use('/api/translate', translateRouter);
app.use(express.static(path.resolve('public')));

app.listen(3000, ()=> console.log("Servidor en http://localhost:3000"));
