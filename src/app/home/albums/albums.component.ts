import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Album, Artist } from '../../core/services/artist';
import { GetDataService } from '../../core/services/getData.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { AppState } from 'src/app/reducers';
import {Store, select} from '@ngrx/store';
import { selectArtistById } from 'src/app/core/store/selectors/artists.selectors';

@Component({
  selector: 'ngSpotify-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  curentArtist!: string;
  artists$!: Observable<Artist | any>;
  albums!: Album[];
  paramsSubscription!: Subscription;
  albumForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
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
}
