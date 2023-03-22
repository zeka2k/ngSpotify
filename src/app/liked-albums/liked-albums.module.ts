import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LikedAlbumsRoutingModule } from "./liked-albums-routing.module";
import { LikedAlbumsComponent } from "./liked-albums.component";

@NgModule({
  declarations: [LikedAlbumsComponent],
  imports: [
    CommonModule,
    LikedAlbumsRoutingModule
  ],
})
export class LikedAlbumsModule {}