import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AngularFireModule } from '@angular/fire';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { CardComponent } from './card/card.component';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "src/environments/environment";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { LogoutComponent } from './logout/logout.component';
import { MatInputModule } from '@angular/material/input';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GoogleMapsModule } from '@angular/google-maps';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { PropertyComponent } from './property/property.component';
import { ExampleComponent } from './example/example.component';
// import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
// import { AuthGuard } from './auth/auth.guard';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './booking/booking.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { PropertyService } from './services/property.service';
import { AuthGuard2 } from './services/authguard.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterUserComponent,
    LoginUserComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    SliderComponent,
    CardComponent,
    LogoutComponent,
    PropertyComponent,
    ExampleComponent,
    DashboardComponent,
    SplashScreenComponent,
    AdminComponent,
    BookingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    FlexLayoutModule,
    NgbModule,
    AngularFireModule,
    MatInputModule,
    SlickCarouselModule,
    ShareIconsModule,
    GoogleMapsModule,
    NgxSpinnerModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'demoo-projectt'),
  ],
  providers: [AuthService, AuthGuard2,PropertyService],

  //     provide: 'SocialAuthServiceConfig',
  //     useValue: {
  //       autoLogin: false,
  //       providers: [
  //         {
  //           id: GoogleLoginProvider.PROVIDER_ID,
  //           provider: new GoogleLoginProvider(
  //            '932254480272-8k8e1jjv493do40g8nb08jnm0tiqg2mn.apps.googleusercontent.com'
  //           )
  //         }
  //       ]
  //     } as SocialAuthServiceConfig
  //   }
  // ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
