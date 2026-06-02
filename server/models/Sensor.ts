import mongoose from 'mongoose';

const sensorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  unit: { type: String, required: true },
  storageUnit: { type: mongoose.Schema.Types.ObjectId, ref: 'StorageUnit' },
  threshold: { type: Number }
}, {
  timestamps: true
});

const Sensor = mongoose.model('Sensor', sensorSchema);
export default Sensor;
