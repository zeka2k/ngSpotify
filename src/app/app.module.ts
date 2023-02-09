import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { SongsComponent } from './songs/songs.component';
import { LikedAlbumsComponent } from './liked-albums/liked-albums.component';
import { LikedSongsComponent } from './liked-songs/liked-songs.component';
import { HomeComponent } from './home/home.component';

const appRoute: Routes = [
  {path:'', component: HomeComponent},
  {path:'LikedAlbums', component: LikedAlbumsComponent},
  {path:'LikedSongs', component: LikedSongsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    SongsComponent,
    LikedAlbumsComponent,
    LikedSongsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
