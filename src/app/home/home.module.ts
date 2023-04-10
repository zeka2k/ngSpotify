import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { AlbumsComponent } from "./albums/albums.component";
import { ArtistsResolver } from "../core/store/resolvers/artists.resolver";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ArtistsEffects } from "../core/store/effects/artists.effects";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [HomeComponent, AlbumsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    EffectsModule.forFeature([ArtistsEffects])
  ],
  providers: [ArtistsResolver]
})
export class HomeModule {}