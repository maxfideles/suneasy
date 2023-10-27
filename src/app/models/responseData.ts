import { PanelData } from "./panelData";

export interface ResponseData {
    success:boolean,
    count:number,
    data:[PanelData]
}