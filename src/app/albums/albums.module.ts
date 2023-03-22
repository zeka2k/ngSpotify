import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewAlbumFormComponent } from '../new-album-form/new-album-form.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AlbumsComponent } from '../albums/albums.component';
import { RouterModule } from '@angular/router';
// import do input

@NgModule({
  declarations: [NewAlbumFormComponent, AlbumsComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [NewAlbumFormComponent],
})
export class AlbumsModule {}
