import { Router } from "express";
import { createUserSessionHandler } from "../../controllers/SessionController";
import validateResource from "../../middleware/validateResource";
import { createSessionSchema } from "../../schemas/SessionSchema";

const router = Router();

router.route("/").post(validateResource(createSessionSchema), createUserSessionHandler);

export default router;
