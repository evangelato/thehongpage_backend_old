import { Request, Response, NextFunction } from 'express';

function usersRender(_req: Request, res: Response, next: NextFunction): void {
    res.send('respond with a resource');
}

export default usersRender;
