import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './src/router';

import { initDB } from './src/class';

initDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
	res.json('OK!!');
});

app.use(router);
app.listen(8000, () => console.log('Conectado a porta 8000!'));
