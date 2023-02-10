import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LikedAlbumsComponent } from './liked-albums/liked-albums.component';
import { LikedSongsComponent } from './liked-songs/liked-songs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'LikedAlbums', component: LikedAlbumsComponent },
  { path: 'LikedSongs', component: LikedSongsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
