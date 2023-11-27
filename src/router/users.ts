import express from 'express';


import { getAllUsers } from '../controllers/users';

import { isAuthenticate } from '../middlewares';




export default (router : express.Router) => {
  return router.get ('/users', isAuthenticate, getAllUsers);
}