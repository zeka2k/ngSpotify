import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';


@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    SharedModule,
  ],
  exports: [],
})
export class AlbumsModule {}
