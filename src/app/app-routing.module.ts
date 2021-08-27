import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LogoutComponent } from './logout/logout.component';
import { MapsComponent } from './maps/maps.component';
import { PropertyComponent } from './property/property.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  // {path: '', component: LoginUserComponent},
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Register', component: RegisterUserComponent },
  { path: 'Login', component: LoginUserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Maps', component: MapsComponent },
  { path: 'LogOut', component: LogoutComponent },
  { path: 'Property', component: PropertyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
