import  nc from 'next-connect';
import database from '../../../config/database';

import {  getSingleAnnouncement, updateAnnouncement, deleteAnnouncement } from '../../../controllers/announcementController';


import onError from '../../../middlewares/errors';


const handler = nc({ onError });

database();

handler.get(getSingleAnnouncement);

handler.put(updateAnnouncement);

handler.delete(deleteAnnouncement);

export default handler