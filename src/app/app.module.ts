import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PanelsComponent } from './pages/panels/panels.component';
import { InvertersComponent } from './pages/inverters/inverters.component';
import { MenuComponent } from './menu/menu.component';
import { MenuOptionsComponent } from './menu/menu-options/menu-options.component';
import { CardComponent } from './pages/inverters/card/card.component';
import { CardPanelsComponent } from './pages/panels/card-panels/card-panels.component';
import { PanelComponent } from './pages/panels/card-panels/panel/panel.component';
import { InverterComponent } from './pages/inverters/card/inverter/inverter.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { MainCardComponent } from './pages/home/main-card/main-card.component';
import { PanelCardComponent } from './pages/home/panel-card/panel-card.component';
import { IrradCardComponent } from './pages/home/irrad-card/irrad-card.component';
import { SimulatorCardComponent } from './pages/home/simulator-card/simulator-card.component';
import { InverterCardComponent } from './pages/home/inverter-card/inverter-card.component';
import { SimulatorComponent } from './pages/simulator/simulator.component'
import  { FormsModule } from '@angular/forms';
import { ResultsDetailedComponent } from './pages/simulator/results-detailed/results-detailed.component'
import {  NgxMaskModule } from 'ngx-mask';
import { SimulatorWebComponent } from './pages/home/simulator-web/simulator-web.component';
import { SubscriptionComponent } from './pages/home/subscription/subscription.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelsComponent,
    InvertersComponent,
    MenuComponent,
    MenuOptionsComponent,
    CardComponent,
    CardPanelsComponent,
    PanelComponent,
    InverterComponent,
    CitiesComponent,
    MainCardComponent,
    PanelCardComponent,
    IrradCardComponent,
    SimulatorCardComponent,
    InverterCardComponent,
    SimulatorComponent,
    ResultsDetailedComponent,
    SimulatorWebComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule,
    RouterModule.forRoot([
      {path:'home', component: HomeComponent},
      {path:'panels', component: PanelsComponent},
      {path: 'inverters', component: InvertersComponent},
      {path:'cities', component: CitiesComponent},
      {path:'simulator', component: SimulatorComponent },
      {path:'', component:HomeComponent}

    ], {useHash:true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
