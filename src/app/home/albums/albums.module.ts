import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlbumFormDialogComponent } from './album-form-dialog/album-form-dialog.component';


@NgModule({
  declarations: [AlbumsComponent, AlbumFormDialogComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    FormsModule, ReactiveFormsModule,
    SharedModule,
  ],
  exports: [],
})
export class AlbumsModule {}
