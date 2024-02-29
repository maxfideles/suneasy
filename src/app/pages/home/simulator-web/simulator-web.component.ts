import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simulator-web',
  templateUrl: './simulator-web.component.html',
  styleUrls: ['./simulator-web.component.css']
})
export class SimulatorWebComponent {

  route!:Router

  constructor(private router: Router){

  }

}
