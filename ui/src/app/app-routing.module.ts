import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./core/components/admin/admin.module').then(
        (module) => module.AdminModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./core/components/home/home.module').then(
        (module) => module.HomeModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./core/components/contact/contact.module').then(
        (module) => module.ContactModule
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
