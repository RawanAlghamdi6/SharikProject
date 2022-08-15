import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentComponent } from './apartment/apartment.component';
import { CampComponent } from './camp/camp.component';
import { CarsComponent } from './cars/cars.component';
import { DressComponent } from './dress/dress.component';
import { FarmComponent } from './farm/farm.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { SessionComponent } from './session/session.component';

const routes: Routes = [
  {path:'' , component:HeaderComponent},
  {path:'cars' , component:CarsComponent},
  {path:'farm' , component:FarmComponent},
  {path:'camp' , component:CampComponent},
  {path:'apartment' , component:ApartmentComponent},
  {path:'session' , component:SessionComponent},
  {path:'dress' , component:DressComponent},
  {path:'form' , component:FormComponent},
  {path:'**' , redirectTo:'' , pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
