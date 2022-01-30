import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../Pages/landing-page/landing-page.component';
import { AlbumsComponent } from '../Pages/albums/albums.component';
import { BandComponent } from '../Pages/band/band.component';
import { ContactComponent } from '../Pages/contact/contact.component';
import { SocialsComponent } from '../Pages/socials/socials.component';
import { TourComponent } from '../Pages/tour/tour.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent},
  { path: 'albums', component: AlbumsComponent},
  { path: 'band', component: BandComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'socials', component: SocialsComponent},
  { path: 'tour', component: TourComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }