import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { NewAlbumFormComponent } from "./new-album-form.component";

@NgModule({
  declarations: [
    NewAlbumFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: []
})
export class AlbumsModule {}
