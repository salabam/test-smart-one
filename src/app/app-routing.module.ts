import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@core/components/not-found/not-found.component';
import { WelcomeComponent } from '@core/components/welcome/welcome.component';
import { AuthGuard } from '@core/services/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'pets', canActivate: [ AuthGuard ], loadChildren: () => import('./modules/pets/pets.module').then(m => m.PetsModule) },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
