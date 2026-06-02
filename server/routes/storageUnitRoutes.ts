import express from 'express';
import {
  getStorageUnits,
  createStorageUnit,
  getStorageUnit,
  updateStorageUnit,
  deleteStorageUnit
} from '../controllers/storageUnitController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getStorageUnits).post(protect, createStorageUnit);
router.route('/:id').get(getStorageUnit).put(protect, updateStorageUnit).delete(protect, deleteStorageUnit);

export default router;
