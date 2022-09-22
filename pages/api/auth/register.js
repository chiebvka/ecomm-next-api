import  nc from 'next-connect';
import database from '../../../config/database';

database();

import { registerUser } from '../../../controllers/authController'

import onError from '../../../middlewares/errors'

const handler = nc({ onError });



handler.post(registerUser)

export default handler;