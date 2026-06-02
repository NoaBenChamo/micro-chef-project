import StorageUnit from '../models/StorageUnit.js';

export const getStorageUnits = async (req, res, next) => {
  try {
    const storageUnits = await StorageUnit.find().populate('sensors');
    res.json(storageUnits);
  } catch (error) {
    next(error);
  }
};

export const createStorageUnit = async (req, res, next) => {
  try {
    const storageUnit = await StorageUnit.create(req.body);
    res.status(201).json(storageUnit);
  } catch (error) {
    next(error);
  }
};

export const getStorageUnit = async (req, res, next) => {
  try {
    const storageUnit = await StorageUnit.findById(req.params.id).populate('sensors');
    if (!storageUnit) return res.status(404).json({ message: 'StorageUnit not found' });
    res.json(storageUnit);
  } catch (error) {
    next(error);
  }
};

export const updateStorageUnit = async (req, res, next) => {
  try {
    const storageUnit = await StorageUnit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!storageUnit) return res.status(404).json({ message: 'StorageUnit not found' });
    res.json(storageUnit);
  } catch (error) {
    next(error);
  }
};

export const deleteStorageUnit = async (req, res, next) => {
  try {
    await StorageUnit.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
