import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Album } from 'src/app/core/services/artist';
import { GetDataService } from 'src/app/core/services/getData.service';
import { AppState } from 'src/app/reducers';
import { AlbumFormDialogComponent } from 'src/app/shared/album-form-dialog/album-form-dialog.component';
import {Store, select} from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { selectAlbumsById } from 'src/app/core/store/selectors/albums.selectors';
import { Update } from '@ngrx/entity';
import { albumUpdated } from 'src/app/core/store/actions/albums.actions';

@Component({
  selector: 'ngSpotify-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input() albumId!: string;
  @Input() curentArtist!: string;
  album$!: Observable<Album | any>;
  
  constructor(
    private data: GetDataService,
    private dialog: MatDialog,
    public store$: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.album$ = this.store$.pipe(select(selectAlbumsById(this.albumId)));
  }

  addFavorite(album: Album) {
    if (album != undefined) {
      const update: Update<Album> = {
        id: album.id,
        changes: {favorite: !album.favorite}
      };
  
      this.store$.dispatch(albumUpdated({update}));
      
      //console.log(album.favorite);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlbumFormDialogComponent, {
      width: '500px',
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result.title != '') {
    //     this.data.addAlbum(
    //       this.curentArtist,
    //       result.title,
    //       result.description,
    //       result.songs
    //     );
    //   }
    // });
  }

  openEditDialog(album: Album): void {
    const dialogRef = this.dialog.open(AlbumFormDialogComponent, {
      width: '500px',
      data: album,
    });

    dialogRef.afterClosed().subscribe((albumEdited: Album) => {
      this.data.updateAlbum(albumEdited);
    });
  }
}
