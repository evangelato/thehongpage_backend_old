import { Request, Response, NextFunction } from 'express';
import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', function(_req: Request, res: Response, next: NextFunction) {
    res.send('respond with a resource');
});

export default router;
