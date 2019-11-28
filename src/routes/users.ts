import express from 'express';
import usersRender from '../controllers';

const router = express.Router();

/* GET users listing. */
router.get('/', usersRender);

export default router;
