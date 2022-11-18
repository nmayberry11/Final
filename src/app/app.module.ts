import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatEquipmentComponent } from './cat-equipment/cat-equipment.component';
import { AlliedEquipmentComponent } from './allied-equipment/allied-equipment.component';
import { TrailersComponent } from './trailers/trailers.component';

@NgModule({
  declarations: [
    AppComponent,
    CatEquipmentComponent,
    AlliedEquipmentComponent,
    TrailersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
