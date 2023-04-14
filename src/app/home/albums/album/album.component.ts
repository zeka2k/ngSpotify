import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/core/services/artist';
import { GetDataService } from 'src/app/core/services/getData.service';
import { AppState } from 'src/app/reducers';
import { AlbumFormDialogComponent } from 'src/app/shared/album-form-dialog/album-form-dialog.component';
import {Store, select} from '@ngrx/store';

@Component({
  selector: 'ngSpotify-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  @Input() albums!: Album[];
  @Input() curentArtist!: string;
  
  constructor(
    private data: GetDataService,
    private dialog: MatDialog,
    public store$: Store<AppState>
  ) {}

  addFavorite(i: number) {
    if (this.albums != undefined) {
      this.albums[i].favorite = !this.albums[i].favorite; // usar a store e o selectByIdAlbum para ir buscar o algum
      //console.log(this.albums[i].favorite);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlbumFormDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.title != '') {
        this.data.addAlbum(
          this.curentArtist,
          result.title,
          result.description,
          result.songs
        );
      }
    });
  }

  openEditDialog(album: Album): void {
    const dialogRef = this.dialog.open(AlbumFormDialogComponent, {
      width: '500px',
      data: album,
    });

    dialogRef.afterClosed().subscribe((albumEdited: Album) => {
      // const update: Update<Album> = {
      //   id: albumEdited.id,
      //   changes: albumEdited
      // }
      // this.store.dispatch(albumUpdated({update}));
      this.data.updateAlbum(albumEdited);
    });
  }
}
