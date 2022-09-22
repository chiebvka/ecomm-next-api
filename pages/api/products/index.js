import  nc from 'next-connect';
import database from '../../../config/database';

import { getProducts, newProduct } from '../../../controllers/productController'
import { allRooms } from '../../../controllers/productController'
import { getUserProfile } from '../../../controllers/authController';
import { isAuthenticatedUser, authorizeRoles } from '../../../middlewares/auth'

const handler = nc();

database();

handler.get(getProducts);

handler.post(newProduct);

// handler
//     .use(isAuthenticatedUser)
//     .post(getProducts)

export default handler;