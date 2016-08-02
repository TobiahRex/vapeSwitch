import { Router } from 'express'
import products from './products/index'

const router = Router();
router.use('/products', products);

export default router
