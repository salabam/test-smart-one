import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets.component';
import { PetsRoutingModule } from './pets-routing.module';
import { PetsService } from './services/pets-service';

@NgModule({
  imports: [
    CommonModule,
    PetsRoutingModule
  ],
  declarations: [
    PetsComponent
  ],
  providers: [
    PetsService
  ]
})
export class PetsModule { }
