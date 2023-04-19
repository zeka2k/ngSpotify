import { Component, OnInit } from '@angular/core';
import { Album, Artist, Song } from '../core/services/artist';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllLikedSongs } from '../core/store/selectors/liked-songs.selectors';
import { Update } from '@ngrx/entity';
import { songUpdated } from '../core/store/actions/songs.actions';

@Component({
  selector: 'ngSpotify-liked-songs',
  templateUrl: './liked-songs.component.html',
  styleUrls: ['./liked-songs.component.scss'],
})
export class LikedSongsComponent implements OnInit {
  songList$!: Observable<Song[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.songList$ = this.store.pipe(select(selectAllLikedSongs));
    console.log(this.songList$);
  }

  /**----> API Request <----**/
  addFavorite(song: Song) {
    if (song != undefined) {
      const update: Update<Song> = {
        id: song.id,
        changes: {favorite: !song.favorite}
      };
  
      this.store.dispatch(songUpdated({update}));
      
      //console.log(album.favorite);
    }
  }
}
