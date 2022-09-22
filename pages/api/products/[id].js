import  nc from 'next-connect';
import database from '../../../config/database';

import { getSingleProduct, updateProduct } from '../../../controllers/productController'
import { isAuthenticatedUser, authorizeRoles } from '../../../middlewares/auth'

const handler = nc();

database();

handler.get(getSingleProduct);

handler.put(updateProduct);


export default handler;