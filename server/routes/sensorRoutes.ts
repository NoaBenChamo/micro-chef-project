import express from 'express';
import {
  getSensors,
  createSensor,
  getSensor,
  updateSensor,
  deleteSensor
} from '../controllers/sensorController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getSensors).post(protect, createSensor);
router.route('/:id').get(getSensor).put(protect, updateSensor).delete(protect, deleteSensor);

export default router;
