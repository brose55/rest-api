import { Router } from 'express'
import { createUserHandler } from '../../controllers/UserController';
import validateResource from '../../middleware/validateResource';
import { createUserSchema } from '../../schemas/UserSchema';

const router = Router()

router.route('/').post(validateResource(createUserSchema), createUserHandler)

export default router;