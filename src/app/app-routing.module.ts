import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LogoutComponent } from './logout/logout.component';
import { MapsComponent } from './maps/maps.component';
import { PropertyComponent } from './property/property.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AuthGuard2 } from './services/authguard.service';

const routes: Routes = [
  // {path: '', component: LoginUserComponent},
  { path: '', redirectTo: '/Login', pathMatch: 'full', },
  { path: 'Register', component: RegisterUserComponent },
  { path: 'Login', component: LoginUserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Maps', component: MapsComponent },
  { path: 'LogOut', component: LogoutComponent },
  { path: 'Property', component: PropertyComponent },
  { path: 'Admin', component: AdminComponent,canActivate:[AuthGuard2] },
  { path: 'Booking', component: BookingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
  providers: [AuthGuard2]
})
export class AppRoutingModule { }
