import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PanelsComponent } from './pages/panels/panels.component';
import { InvertersComponent } from './pages/inverters/inverters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelsComponent,
    InvertersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'panels', component: PanelsComponent},
      {path: 'inverters', component: InvertersComponent}

    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
