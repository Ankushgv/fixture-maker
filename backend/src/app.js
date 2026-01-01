import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

import matchRoutes from "./routes/matchRoutes.js"

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../frontend/dist')));
app.use("/api/matches", matchRoutes)

app.get('/:any', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'))
})

export default app;
