import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './pages/cats/cats.component';
import { DogsComponent } from './pages/dogs/dogs.component';
import { PetsComponent } from './pets.component';

const routes: Routes = [
    { path: '', component: PetsComponent, children: [
        { path: '', redirectTo: 'dogs', pathMatch: 'full' },
        { path: 'dogs', component: DogsComponent },
        { path: 'cats', component: CatsComponent }
      ]
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
