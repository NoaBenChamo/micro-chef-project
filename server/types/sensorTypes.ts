export interface StorageUnitData {
  name: string;
  location: string;
  capacity: number;
  sensors?: string[];
}

export interface SensorData {
  name: string;
  type: string;
  unit: string;
  storageUnit?: string;
  threshold?: number;
}

export interface SensorReadingData {
  sensor: string;
  value: number;
  timestamp?: string;
}
