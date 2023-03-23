import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { LikedAlbumsRoutingModule } from "./liked-albums-routing.module";
import { LikedAlbumsComponent } from "./liked-albums.component";

@NgModule({
  declarations: [LikedAlbumsComponent],
  imports: [
    CommonModule,
    LikedAlbumsRoutingModule,
    SharedModule
  ],
})
export class LikedAlbumsModule {}