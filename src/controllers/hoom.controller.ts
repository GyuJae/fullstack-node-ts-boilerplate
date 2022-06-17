import { Response } from 'express';

export const home = (_, res: Response) => res.render('home', {pageTitle: 'Home'})