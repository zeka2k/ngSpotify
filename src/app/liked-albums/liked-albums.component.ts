import { Component, OnInit } from '@angular/core';
import { Album } from '../core/services/artist';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { selectAllLikedAlbums } from '../core/store/selectors/liked-albums.selectors';
import { albumUpdated } from 'src/app/core/store/actions/albums.actions';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'ngSpotify-liked-albums',
  templateUrl: './liked-albums.component.html',
  styleUrls: ['./liked-albums.component.scss'],
})
export class LikedAlbumsComponent implements OnInit {
  albumList$!: Observable<Album[]>;
  curentAlbum!: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.albumList$ = this.store.pipe(select(selectAllLikedAlbums));
  }

  addFavorite(album: Album) {
    if (album != undefined) {
      const update: Update<Album> = {
        id: album.id,
        changes: {favorite: !album.favorite}
      };
  
      this.store.dispatch(albumUpdated({update}));
      
      //console.log(album.favorite);
    }
  }
}
