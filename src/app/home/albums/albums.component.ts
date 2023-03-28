import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Album } from '../../core/services/artist';
import { GetDataService } from '../../core/services/getData.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlbumFormDialogComponent } from '../../shared/album-form-dialog/album-form-dialog.component';

@Component({
  selector: 'ngSpotify-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit, OnDestroy {
  curentArtist!: string;
  albums!: Album[];
  paramsSubscription!: Subscription;
  albumForm!: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private data: GetDataService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.albumForm = this.fb.group({
      title: ['', Validators.required],
      songs: [[]],
    });
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.curentArtist = params['name'];
      this.albums = this.data.getAlbums(this.curentArtist);
      //console.log(this.albums);
    });

    this.data.albums$.subscribe(albums => {
      this.albums = albums;
    });
  }

  addFavorite(i: number) {
    if (this.albums != undefined) {
      this.albums[i].favorite = !this.albums[i].favorite;
      console.log(this.albums[i].favorite);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlbumFormDialogComponent, {
      width: '500px',
      data: { albumForm: this.albumForm },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.data.addAlbum(this.curentArtist, result.title, result.description, result.songs);
    });

  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
