import mongoose from 'mongoose';

const storageUnitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  sensors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sensor' }]
}, {
  timestamps: true
});

const StorageUnit = mongoose.model('StorageUnit', storageUnitSchema);
export default StorageUnit;
