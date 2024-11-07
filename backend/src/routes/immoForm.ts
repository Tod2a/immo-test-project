import { Response, Router } from "express";
import { Request } from "express";

import { check, validationResult } from "express-validator";
import HttpStatusCode from "http-status-codes";
import ImmoForm, { TImmoForm } from "../models/immoForm";
import { saveImmoForm } from "../services/immoForm";

const router: Router = Router();

router.post("/",
    check("email", "Please include a valid email").isEmail(),
    check("buildId", "buildId is required").notEmpty(),
    check("name", "Name is required").notEmpty(),
    check("surname", "Surname is required").notEmpty(),
    check("message", "Message is required").notEmpty(),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(HttpStatusCode.BAD_REQUEST)
                .json({ errors: errors.array() });
        }

        const immoFormField: TImmoForm = {
            buildId: req.body.buildId,
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            message: req.body.message
        }

        try {
            const immoForm = await saveImmoForm(immoFormField);

            res.json(immoForm);
        } catch (err: any) {
            console.error(err.message);
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send("Server Error");
        }
    }
)

export default router;