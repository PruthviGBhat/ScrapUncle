
import express from 'express';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js'
import { updateUser } from './updatecontrol.js';
import { deleteUser } from './deletecontrol.js';
import { getListing } from './UserListingControl.js';
import { verifyToken } from '../error/verifyToken.js';

const router = express.Router();

const error = (statusCode, message) => ({ statusCode, message }); 

router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/listings/:id', verifyToken, getListing);

export default router;
