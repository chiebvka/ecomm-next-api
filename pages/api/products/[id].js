import  nc from 'next-connect';
import database from '../../../config/database';

import { getSingleProduct, updateProduct, deleteProduct } from '../../../controllers/productController'
import { isAuthenticatedUser, authorizeRoles } from '../../../middlewares/auth';

import onError from '../../../middlewares/errors'

const handler = nc({ onError });

database();

handler.get(getSingleProduct);

handler.put(updateProduct);

handler.delete(deleteProduct);


export default handler;