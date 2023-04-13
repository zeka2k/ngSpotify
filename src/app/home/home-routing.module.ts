import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsResolver } from '../core/store/resolvers/artists.resolver';
import { HomeComponent } from './home.component';
import { AlbumsResolver } from '../core/store/resolvers/albums.resolver';
import { SongsResolver } from '../core/store/resolvers/songs.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      artists: ArtistsResolver,
      albums: AlbumsResolver,
      songs: SongsResolver
    },
    children: [
      {
        path: ':name',
        component: AlbumsComponent,
      },
    ],
    providers: [
      ArtistsResolver,
      AlbumsResolver,
      SongsResolver
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
