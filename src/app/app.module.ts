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
import { PanelComponent } from './pages/panels/card-panels/panel/panel.component'

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
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'home', component: HomeComponent},
      {path:'panels', component: PanelsComponent},
      {path: 'inverters', component: InvertersComponent},
      {path:'', redirectTo:'home', pathMatch:'full'}

    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
