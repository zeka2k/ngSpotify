import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewAlbumFormComponent } from './new-album-form/new-album-form.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewAlbumFormModule } from './new-album-form/new-album-form.module';
// import do input

@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    SharedModule,
    RouterModule,
    NewAlbumFormModule
  ],
  exports: [],
})
export class AlbumsModule {}
