import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'destinations',
    loadChildren: () => import('./modules/destinations/destinations.module').then(m => m.DestinationsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./modules/sign/sign.module').then(m => m.SignModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./modules/bookings/bookings.module').then(m => m.BookingsModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }