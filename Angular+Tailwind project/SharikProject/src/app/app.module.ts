import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsComponent } from './cars/cars.component';
import { FormComponent } from './form/form.component';
import { FarmComponent } from './farm/farm.component';
import { CampComponent } from './camp/camp.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { SessionComponent } from './session/session.component';
import { DressComponent } from './dress/dress.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent,
    FormComponent,
    FarmComponent,
    CampComponent,
    ApartmentComponent,
    SessionComponent,
    DressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
