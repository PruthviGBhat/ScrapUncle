import express from 'express';
import { createListing} from './listingcontrol.js';
import { deleteListing} from './deletelistingcontrol.js';
import { verifyToken } from '../error/verifyToken.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);


export default router;