import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { PetsComponent } from './pets.component';
import { PetsRoutingModule } from './pets-routing.module';
import { PetsService } from './services/pets-service';
import { PetsGridComponent } from './components/pets-grid/pets-grid.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { DogsComponent } from './pages/dogs/dogs.component';
import { CatsComponent } from './pages/cats/cats.component';

@NgModule({
  imports: [
    CommonModule,
    PetsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule
  ],
  declarations: [
    PetsComponent,
    PetsGridComponent,
    PetCardComponent,
    DogsComponent,
    CatsComponent
  ],
  providers: [
    PetsService
  ]
})
export class PetsModule { }
