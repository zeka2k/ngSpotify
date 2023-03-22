import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { SongsComponent } from './songs/songs.component';

@NgModule({
  declarations: [SongsComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    SongsComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
