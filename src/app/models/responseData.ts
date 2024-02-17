import { InverterData } from "./inverterData";
import { PanelData, PanelInfo } from "./panelData";

export interface ResponseData {
    success:boolean,
    count:number,
    data:[PanelInfo]
}

export interface ResponseInverterData{
    success: boolean,
    count:number,
    data: [InverterData]
}