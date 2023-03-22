import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { LikedAlbumsComponent } from './liked-albums/liked-albums.component';
import { LikedSongsComponent } from './liked-songs/liked-songs.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewAlbumFormComponent } from './new-album-form/new-album-form.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    LikedAlbumsComponent,
    LikedSongsComponent,
    HomeComponent,
    NewAlbumFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
