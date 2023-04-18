import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsResolver } from './core/store/resolvers/albums.resolver';
import { ArtistsResolver } from './core/store/resolvers/artists.resolver';
import { SongsResolver } from './core/store/resolvers/songs.resolver';
import { LikedAlbumsResolver } from './core/store/resolvers/liked-albums.resolver';
import { LikedSongsResolver } from './core/store/resolvers/liked-songs.resolver';

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
      resolve: {
        artists: ArtistsResolver,
        albums: AlbumsResolver,
        songs: SongsResolver,
      },
      providers: [
        ArtistsResolver,
        AlbumsResolver,
        SongsResolver,
      ]
  },
  {
    path: 'LikedAlbums',
    loadChildren: () =>
      import('./liked-albums/liked-albums.module').then(
        (mod) => mod.LikedAlbumsModule
      ),
      resolve: {
        likedAlbums: LikedAlbumsResolver,
      },
      providers: [
        LikedAlbumsResolver,
      ]
  },
  {
    path: 'LikedSongs',
    loadChildren: () =>
      import('./liked-songs/liked-songs.module').then(
        (mod) => mod.LikedSongsModule
      ),
      resolve: {
        likedSongs: LikedSongsResolver,
      },
      providers: [
        LikedSongsResolver,
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
