import express from 'express';
import './config/database.js';
const app = express();
const port = Number.parseInt(process.env.PORT ?? '8000', 10);
app.use(express.json());
app.get('/api/health', (_request, response) => {
    response.json({ status: 'ok' });
});
app.listen(port, '0.0.0.0', () => {
    console.log(`OctoFit API listening on port ${port}`);
});
