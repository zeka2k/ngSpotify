import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsResolver } from '../core/store/resolvers/artists.resolver';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      artists: ArtistsResolver
    },
    children: [
      {
        path: ':name',
        component: AlbumsComponent,
      },
    ],
    providers: [
      ArtistsResolver
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
