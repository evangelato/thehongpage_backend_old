import express from 'express';
import indexRender from '../controllers/index';

const router = express.Router();

/* GET home page. */
router.get('/', indexRender);

export default router;
