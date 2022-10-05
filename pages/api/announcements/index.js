import  nc from 'next-connect';
import database from '../../../config/database';

import { getAnnouncement, newAnnouncement } from '../../../controllers/announcementController';


import onError from '../../../middlewares/errors';


const handler = nc({ onError });

database();

handler.get(getAnnouncement);

handler.post(newAnnouncement);

export default handler