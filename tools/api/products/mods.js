import { Router } from 'express'
import Mod from '../../db/mod'
const router = Router();

router.route('/')
.get((req, res) => Mod.find({}, res.handle))
.post((req, res) => Mod.create(req.body, res.handle))

router.route('/:id')
.delete((req, res) => Mod.removeOne(req.params.id, res.handle))
.put((req, res) => Mod.updateMod(req.params.id, req.body, res.handle));

export default router;
