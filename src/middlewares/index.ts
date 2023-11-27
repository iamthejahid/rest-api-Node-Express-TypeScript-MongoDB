import express from 'express';

import {get, merge} from 'lodash';

import { getUsersBySessionToken } from '../db/users';


export const isAuthenticate = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {
        const sessionToken = req.cookies['COOKIE-AUTH'];
        if(!sessionToken) {
            return res.sendStatus(403);
        } 
        const exisitingUser =  await getUsersBySessionToken(sessionToken); 
        if(!exisitingUser) {
            return res.sendStatus(403 );
        }
        merge(req, {identity : exisitingUser});
        next();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }


}