import express from 'express';
import {
  createInquiry,
  getInquiries,
  deleteInquiry,
  updateInquiryStatus,
} from '../controllers/inquiryController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, getInquiries).post(createInquiry);
router
  .route('/:id')
  .delete(protect, deleteInquiry)
  .put(protect, updateInquiryStatus);

export default router;
