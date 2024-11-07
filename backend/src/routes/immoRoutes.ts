import { Response, Router, Request } from "express";
import HttpStatusCodes from "http-status-codes";
import { getAllImmos, getImmoById } from "../services/immos";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const immos = await getAllImmos();
        res.json(immos);
    } catch (err: any) {
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: 'Erreur lors de la récupération des données', error: err.message });
    }
});

interface IParams {
    id: string;
}

router.get("/:id", async (req: Request<IParams>, res: Response) => {
    const { id } = req.params;
    try {
        const immo = await getImmoById(id);
        res.json(immo);
    } catch (err) {
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: 'Erreur lors de la récupération du bien', error: err });
    }
});

export default router;
