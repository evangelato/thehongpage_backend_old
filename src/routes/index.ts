import express from 'express';
import { getLanding } from '../controllers/landing';

const router = express.Router();

/* GET home page. */
router.get('/', getLanding);

export default router;
