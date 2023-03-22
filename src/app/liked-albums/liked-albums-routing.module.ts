import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from '../shared/songs/songs.component';
import { LikedAlbumsComponent } from './liked-albums.component';

const routes: Routes = [
  {
    path: '',
    component: LikedAlbumsComponent,
    children: [
      {
        path: ':name',
        component: SongsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LikedAlbumsRoutingModule {}
