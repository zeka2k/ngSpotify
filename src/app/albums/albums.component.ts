import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Album } from '../services/artist';
import { GetDataService } from '../services/getData.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewAlbumFormComponent } from '../new-album-form/new-album-form.component';


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

  constructor(private route: ActivatedRoute, private data: GetDataService, private dialog: MatDialog, private fb: FormBuilder) {
    this.albumForm = this.fb.group({
      title: ['', Validators.required],
      songs: [[]]
    });
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.curentArtist = params['name'];
      this.albums = this.data.getAlbums(this.curentArtist);
      //console.log(this.albums);
    });
  }

  addFavorite(i: number) {
    if (this.albums != undefined) {
      this.albums[i].favorite = !this.albums[i].favorite;
      console.log(this.albums[i].favorite);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewAlbumFormComponent, {
      width: '500px',
      data: { albumForm: this.albumForm }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
