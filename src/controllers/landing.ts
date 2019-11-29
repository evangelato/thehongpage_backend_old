import { Request, Response, NextFunction } from 'express';

export function getLanding(_req: Request, res: Response, _next: NextFunction): void {
    res.render('landing', { title: 'Express' });
}

export function submitLead(req: Request, res: Response, _next: NextFunction): void {
    console.log('Lead email:', req.body.leadEmail);
    res.redirect('/');
}
