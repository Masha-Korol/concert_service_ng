import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConcertsComponent} from './concerts/concerts.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {EnterPageComponent} from './enter-page/enter-page.component';
import {LocationRegistrationComponent} from './registrations/location-registration/location-registration.component';
import {VenueRegistrationComponent} from './registrations/venue-registration/venue-registration.component';
import {ArtistRegistrationComponent} from './registrations/artist-registration/artist-registration.component';
import {ConcertRegistrationComponent} from './registrations/concert-registration/concert-registration.component';

const routes: Routes = [
  {path: '', component: EnterPageComponent},
  {path: 'concerts', component: ConcertsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'new-location', component: LocationRegistrationComponent},
  {path: 'new-venue', component: VenueRegistrationComponent},
  {path: 'new-artist', component: ArtistRegistrationComponent},
  {path: 'new-concert', component: ConcertRegistrationComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
