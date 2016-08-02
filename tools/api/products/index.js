import { Router } from 'express'
import mods from './mods'
const router = Router();
router.use('/mods', mods);

export default router
