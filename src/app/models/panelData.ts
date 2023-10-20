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

export interface InverterData{
    id: number,
    manufacturer: string,
    models: [InverterInfo]
  }

  export interface InverterInfo  {
    id: number,
    name: string,
    type: string,
    capacity: number,
    efficiency: number,
    inputVoltageMin: number,
    inputVoltageMax: number,
    outputVoltage: number,
    numberMPPTs: number,
    maxInputCurrent: number,
    maxOutputCurrent: number,
    maxInputShortCircuitCurrent: number,
    gridConnection: string,
    gridVoltage: number,
    weight: number,
    warrantyYears: number,
    manufacturer: string
  }

