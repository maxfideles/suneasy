import { InverterData } from "./inverterData";
import { PanelData } from "./panelData";

export interface ResponseData {
    success:boolean,
    count:number,
    data:[PanelData]
}

export interface ResponseInverterData{
    success: boolean,
    count:number,
    data: [InverterData]
}