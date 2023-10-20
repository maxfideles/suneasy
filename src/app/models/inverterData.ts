export interface InverterData{
    id: number,
    manufacturer: string,
    models: [InverterInfo]
  }

  export interface InverterInfo{
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
