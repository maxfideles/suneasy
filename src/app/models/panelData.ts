export interface PanelData {
  id: number;
  manufacturer: string;
  models: [{
  id: number,
  name: string,
  type: string,
  efficiency: number,
  maximumPower: number,
  voltage: number,
  current: number,
  length: number,
  width: number,
  thickness: number,
  weight: number,
  frameColor: string,
  warrantyYears: number,
  manufacturer: string
  }]
}

export interface PanelInfo{
  id: number,
  name: string,
  type: string,
  efficiency: number,
  maximumPower: number,
  voltage: number,
  current: number,
  length: number,
  width: number,
  thickness: number,
  weight: number,
  frameColor: string,
  warrantyYears: number,
  manufacturer:string
}

