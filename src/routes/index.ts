import express from 'express';
import { getLanding, submitLead } from '../controllers/landing';

const router = express.Router();

/* GET home page. */
router.get('/', getLanding);
router.post('/', submitLead);

export default router;
