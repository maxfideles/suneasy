import { Component, Input, OnInit } from '@angular/core';
import { simulatorResponse } from 'src/app/models/simulatorResponse';

@Component({
  selector: 'app-results-detailed',
  templateUrl: './results-detailed.component.html',
  styleUrls: ['./results-detailed.component.css']
})
export class ResultsDetailedComponent implements OnInit {

  dummy:string = "Teste"

  @Input()
  resultInfo!:simulatorResponse

  constructor() {

   }

  ngOnInit(): void {
  }

}
