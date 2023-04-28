import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterPlayerComponent } from './register-player/register-player.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SeePlayersComponent } from './see-players/see-players.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register-player', component: RegisterPlayerComponent},
  { path: 'see-all-players', component: SeePlayersComponent},
  { path: 'gallery', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }