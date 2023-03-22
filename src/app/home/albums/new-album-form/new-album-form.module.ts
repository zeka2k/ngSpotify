import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SharedModule } from "src/app/shared/shared.module";
import { NewAlbumFormComponent } from "./new-album-form.component";

@NgModule({
  declarations: [
    NewAlbumFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: []
})
export class AlbumsModule {}
