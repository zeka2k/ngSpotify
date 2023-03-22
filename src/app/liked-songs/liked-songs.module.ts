import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LikedSongsRoutingModule } from "./liked-songs-routing.module";
import { LikedSongsComponent } from "./liked-songs.component";

@NgModule({
  declarations: [LikedSongsComponent],
  imports: [
    CommonModule,
    LikedSongsRoutingModule
  ],
})
export class LikedSongsModule {}