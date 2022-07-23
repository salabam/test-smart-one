import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { PetsComponent } from './pets.component';
import { PetsRoutingModule } from './pets-routing.module';
import { PetsService } from './services/pets-service';
import { PetsGridComponent } from './components/pets-grid/pets-grid.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { DogsComponent } from './pages/dogs/dogs.component';
import { CatsComponent } from './pages/cats/cats.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    PetsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  declarations: [
    PetsComponent,
    PetsGridComponent,
    PetCardComponent,
    DogsComponent,
    CatsComponent,
    FilterComponent
  ],
  providers: [
    PetsService
  ]
})
export class PetsModule { }
