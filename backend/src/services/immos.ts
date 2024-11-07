import Immo from '../models/immoModel';

export const getAllImmos = async () => {
    try {
        return await Immo.find();
    } catch (err: any) {
        throw new Error(`Erreur lors de la récupération des données : ${err.message}`);
    }
};

export const getImmoById = async (id: string) => {
    try {
        const immo = await Immo.findById(id);
        if (!immo) {
            throw new Error('Bien non trouvé');
        }
        return immo;
    } catch (err: any) {
        throw new Error(`Erreur lors de la récupération du bien : ${err.message}`);
    }
};