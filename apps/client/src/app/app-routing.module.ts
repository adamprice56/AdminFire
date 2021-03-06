import { AuthGuard } from './guards/auth.guard';
import { ExtraOptions, RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { SessionComponent } from './session/session.component';
import { RegisterComponent } from './session/register/register.component';
import { LoginComponent } from './session/login/login.component';
import { ForgotPasswordComponent } from './session/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'auth',
    component: SessionComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'forgot',
        component: ForgotPasswordComponent
      }, {
        path: 'login',
        component: LoginComponent
      }, {
        path: 'register',
        component: RegisterComponent
      }]
  },
  { path: 'pages', loadChildren: 'apps/client/src/app/pages/pages.module#PagesModule', canActivate: [AuthGuard] },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' }
];

const config: ExtraOptions = {
  useHash: true,
  preloadingStrategy : PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
