import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
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
        (m) => m.ContactModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./core/components/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
