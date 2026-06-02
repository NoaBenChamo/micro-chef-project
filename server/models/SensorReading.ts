import mongoose from 'mongoose';

const sensorReadingSchema = new mongoose.Schema({
  sensor: { type: mongoose.Schema.Types.ObjectId, ref: 'Sensor', required: true },
  value: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

const SensorReading = mongoose.model('SensorReading', sensorReadingSchema);
export default SensorReading;
