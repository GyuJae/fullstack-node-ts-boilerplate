import { Response } from 'express';

export const home = (_, res: Response) => res.render('index.html', {pageTitle: 'Home'})