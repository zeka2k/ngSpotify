import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { reducers, metaReducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { ArtistsEffects } from './core/store/effects/artists.effects';
import { AlbumsEffects } from './core/store/effects/albums.effects';
import { SongsEffects } from './core/store/effects/songs.effects';
import { LikedAlbumsEffects } from './core/store/effects/liked-albums.effects';
//import { LikedSongsEffects } from './core/store/effects/liked-songs.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      ArtistsEffects,
      AlbumsEffects,
      SongsEffects, 
      LikedAlbumsEffects,
      //LikedSongsEffects
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
