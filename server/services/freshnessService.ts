import { getLatestSensorReading } from './sensorService.js';

export const isReadingFresh = async (sensorId, maxAgeMinutes = 60) => {
  const latest = await getLatestSensorReading(sensorId);
  if (!latest) return false;

  const ageMs = Date.now() - new Date(latest.timestamp).getTime();
  return ageMs <= maxAgeMinutes * 60 * 1000;
};

export const getFreshnessStatus = async (sensorId, maxAgeMinutes = 60) => {
  const fresh = await isReadingFresh(sensorId, maxAgeMinutes);
  return fresh ? 'fresh' : 'stale';
};
