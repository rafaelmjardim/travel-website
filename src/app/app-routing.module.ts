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
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'destinations',
    loadChildren: () => import('./pages/destinations/destinations.module').then(m => m.DestinationsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/sign/sign.module').then(m => m.SignModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./pages/bookings/bookings.module').then(m => m.BookingsModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }