import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { LikedSongsRoutingModule } from "./liked-songs-routing.module";
import { LikedSongsComponent } from "./liked-songs.component";

@NgModule({
  declarations: [LikedSongsComponent],
  imports: [
    CommonModule,
    LikedSongsRoutingModule,
    SharedModule
  ],
})
export class LikedSongsModule {}