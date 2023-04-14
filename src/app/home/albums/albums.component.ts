import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Album, Artist } from '../../core/services/artist';
import { GetDataService } from '../../core/services/getData.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { AlbumFormDialogComponent } from '../../shared/album-form-dialog/album-form-dialog.component';
import { AppState } from 'src/app/reducers';
import {Store, select} from '@ngrx/store';
import { selectArtistById } from 'src/app/core/store/selectors/artists.selectors';

@Component({
  selector: 'ngSpotify-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit, OnDestroy {
  curentArtist!: string;
  artists$!: Observable<Artist | any>;
  albums!: Album[];
  paramsSubscription!: Subscription;
  albumForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private data: GetDataService,
    private dialog: MatDialog,
    public store$: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.curentArtist = params['id'];

      this.artists$ = this.store$.pipe(select(selectArtistById(this.curentArtist)));
      //console.log(this.store$);

      //this.albums = this.data.getAlbums(this.curentArtist);
      //console.log(this.albums);
    });

    // this.data.albums$.subscribe((albums) => {
    //   this.albums = albums;
    //   //console.log(albums);
    // });
  }

  addFavorite(i: number) {
    if (this.albums != undefined) {
      this.albums[i].favorite = !this.albums[i].favorite;
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

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
