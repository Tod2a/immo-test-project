import { Response, Router } from "express";
import { Request } from "express";

import { check, validationResult } from "express-validator";
import HttpStatusCode from "http-status-codes";
import ImmoForm, { TImmoForm } from "../models/immoForm";
import { saveImmoForm } from "../services/immoForm";

const router: Router = Router();

router.post("/",
    [check("email", "please include a valid email").isEmail()]
)

export default router;