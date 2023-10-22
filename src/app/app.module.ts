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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelsComponent,
    InvertersComponent,
    MenuComponent,
    MenuOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'home', component: HomeComponent},
      {path:'panels', component: PanelsComponent},
      {path: 'inverters', component: InvertersComponent}

    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
