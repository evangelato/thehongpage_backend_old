import { Request, Response, NextFunction } from 'express';

export function getLanding(_req: Request, res: Response, next: NextFunction): void {
    res.render('landing', { title: 'Express' });
}
