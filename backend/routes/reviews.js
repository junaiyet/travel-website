import express from 'express';
import { creteReview } from '../controllers/reviewController.js';
import { verifyUser } from '../utils/verifyToken.js';
const router = express.Router();
router.post('/:tourId',verifyUser,creteReview);
export default router;
