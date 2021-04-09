import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CookieModule } from 'ngx-cookie';
import { CustomFormsModule } from 'ng2-validation';
import { ConcertsComponent } from './concerts/concerts.component';
import { ArtistRegistrationComponent } from './registrations/artist-registration/artist-registration.component';
import { ConcertRegistrationComponent } from './registrations/concert-registration/concert-registration.component';
import { VenueRegistrationComponent } from './registrations/venue-registration/venue-registration.component';
import { LocationRegistrationComponent } from './registrations/location-registration/location-registration.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthInterceptor} from './_helper/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EnterPageComponent } from './enter-page/enter-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcertsComponent,
    ArtistRegistrationComponent,
    ConcertRegistrationComponent,
    VenueRegistrationComponent,
    LocationRegistrationComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavigationComponent,
    EnterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    CustomFormsModule,
    CookieModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
