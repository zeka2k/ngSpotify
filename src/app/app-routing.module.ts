import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(
        (mod) => mod.HomeModule
      ),
  },
  {
    path: 'LikedAlbums',
    loadChildren: () =>
      import('./liked-albums/liked-albums.module').then(
        (mod) => mod.LikedAlbumsModule
      ),
  },
  {
    path: 'LikedSongs',
    loadChildren: () =>
      import('./liked-songs/liked-songs.module').then(
        (mod) => mod.LikedSongsModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
