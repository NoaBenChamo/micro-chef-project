import Sensor from '../models/Sensor.js';

export const getSensors = async (req, res, next) => {
  try {
    const sensors = await Sensor.find().populate('storageUnit');
    res.json(sensors);
  } catch (error) {
    next(error);
  }
};

export const createSensor = async (req, res, next) => {
  try {
    const sensor = await Sensor.create(req.body);
    res.status(201).json(sensor);
  } catch (error) {
    next(error);
  }
};

export const getSensor = async (req, res, next) => {
  try {
    const sensor = await Sensor.findById(req.params.id).populate('storageUnit');
    if (!sensor) return res.status(404).json({ message: 'Sensor not found' });
    res.json(sensor);
  } catch (error) {
    next(error);
  }
};

export const updateSensor = async (req, res, next) => {
  try {
    const sensor = await Sensor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sensor) return res.status(404).json({ message: 'Sensor not found' });
    res.json(sensor);
  } catch (error) {
    next(error);
  }
};

export const deleteSensor = async (req, res, next) => {
  try {
    await Sensor.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
