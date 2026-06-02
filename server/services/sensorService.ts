import SensorReading from '../models/SensorReading.js';

export const getSensorReadings = async (sensorId) => {
  return SensorReading.find({ sensor: sensorId }).sort({ timestamp: -1 });
};

export const getLatestSensorReading = async (sensorId) => {
  return SensorReading.findOne({ sensor: sensorId }).sort({ timestamp: -1 });
};

export const createSensorReading = async (sensorId, value) => {
  return SensorReading.create({ sensor: sensorId, value });
};

export const getAverageSensorValue = async (sensorId, limit = 20) => {
  const readings = await SensorReading.find({ sensor: sensorId }).sort({ timestamp: -1 }).limit(limit);
  if (!readings.length) return null;
  const sum = readings.reduce((total, item) => total + item.value, 0);
  return sum / readings.length;
};
