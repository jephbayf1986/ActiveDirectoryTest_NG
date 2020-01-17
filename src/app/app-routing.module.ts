import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Adal-Angular4
//import { AdalGuard } from 'adal-angular4';
//MS Adal-Angular6
import { AuthenticationGuard } from 'microsoft-adal-angular6';

import { PublicPageComponent } from './public-page/public-page.component';
import { ProtectedPageComponent } from './protected-page/protected-page.component';
import { TestApiComponent } from './test-api/test-api.component';
import { AdminOnlyApiComponent } from './admin-only-api/admin-only-api.component';
import { SignInCallbackComponent } from './sign-in-callback/sign-in-callback.component';
import { ProfileComponent } from './profile/profile.component';
import { UnprotectedPageComponent } from './unprotected-page/unprotected-page.component';
import { SwearWordsComponent } from './swear-words/swear-words.component';

const routes: Routes = [
  { path: '', component: PublicPageComponent, pathMatch: 'full', canActivate: [AuthenticationGuard]},
  { path: 'protected', component: ProtectedPageComponent, canActivate: [AuthenticationGuard] },
  { path: 'unprotected', component: UnprotectedPageComponent, canActivate: [AuthenticationGuard] },
  { path: 'test-api', component: TestApiComponent, canActivate: [AuthenticationGuard] },
  { path: 'admin-only-api', component: AdminOnlyApiComponent, canActivate: [AuthenticationGuard] },
  { path: 'swearwords', component: SwearWordsComponent, canActivate: [AuthenticationGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuard] },
  { path: 'signin-oidc', component: SignInCallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const RouteComponents = [
  PublicPageComponent,
  ProtectedPageComponent,
  UnprotectedPageComponent,
  TestApiComponent,
  AdminOnlyApiComponent,
  SwearWordsComponent,
  ProfileComponent,
  SignInCallbackComponent
]