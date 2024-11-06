import { Response, Router, Request } from "express";
import HttpStatusCodes from "http-status-codes";
import Immo from "../models/immoModel";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const immos = await Immo.find();
        res.json(immos);
    } catch (err) {
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erreur lors de la récupération des données', error: err });
    }
});

interface IParams {
    id: string;
}

router.get("/:id", async (req: Request<IParams>, res: Response) => {
    const { id } = req.params;
    try {
        const immo = await Immo.findById(id);
        if (!immo) {
            return res.status(HttpStatusCodes.NOT_FOUND).json({ message: 'Bien non trouvé' });
        }
        res.json(immo);
    } catch (err) {
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erreur lors de la récupération du bien', error: err });
    }
});

export default router;
