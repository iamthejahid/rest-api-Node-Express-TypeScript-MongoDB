import express from 'express';

import { register } from '../controllers/authetication';

export default (router : express.Router) => {
  return router.post('/auth/register', register);
}