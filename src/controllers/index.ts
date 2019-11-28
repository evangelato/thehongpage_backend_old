import { Request, Response, NextFunction } from 'express';

function indexRender(_req: Request, res: Response, next: NextFunction): void {
    res.render('index', { title: 'Express' });
}

export default indexRender;
