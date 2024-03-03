import express from 'express';
import { createListing} from './listingcontrol.js';
// import { getListing} from './UserListingControl.js';
import { deleteListing} from './deletelistingcontrol.js';
import { verifyToken } from '../error/verifyToken.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
// router.get('/get/:id', getListing);


export default router;