import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatEquipmentComponent } from '../cat-equipment/cat-equipment.component';
import { AlliedEquipmentComponent } from '../allied-equipment/allied-equipment.component';
import { TrailersComponent } from '../trailers/trailers.component';

const appRoutes: Routes = [
  {path: "", redirectTo: "/app-root", pathMatch: "full"},
  {path: "cat-equipment", component: CatEquipmentComponent},
  {path: "allied-equipment", component: AlliedEquipmentComponent},
  {path: "trailers", component: TrailersComponent}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)]
  exports: [RouterModule]
})
export class AppRoutingModule { }
