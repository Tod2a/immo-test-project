import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5050;

const mongoURI = 'mongodb://localhost:27017/immoTest';

app.use(express.json());
app.use(cors());
app.use('/assets/images', express.static('assets/images'));

mongoose.connect(mongoURI)
    .then(() => console.log('Connecté à MongoDB'))
    .catch((err) => console.error('Erreur de connexion à MongoDB:', err));

import Immo from './models/immoModel';

app.get('/api/immo', async (req: Request, res: Response) => {
    try {
        const immos = await Immo.find();
        res.json(immos);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des données', error: err });
    }
});

//app.get('/api/immo/:id', async (req: Request, res: Response) => {
//const { id } = req.params;
//try {
//const immo = await Immo.findById(id);
//if (!immo) {
//return res.status(404).json({ message: 'Bien non trouvé' });
//}
//res.json(immo);
//} catch (err) {
//res.status(500).json({ message: 'Erreur lors de la récupération du bien', error: err });
//}
//});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
