import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MakesComponent } from './makes/makes.component';
import { ModelsComponent } from './models/models.component';
import { MpgComponent } from './mpg/mpg.component';
import { SpecsComponent } from './specs/specs.component';

@NgModule({
  declarations: [
    AppComponent,
    MakesComponent,
    ModelsComponent,
    MpgComponent,
    SpecsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
