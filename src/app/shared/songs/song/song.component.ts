import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from 'src/app/core/services/artist';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { selectSongsById } from 'src/app/core/store/selectors/songs.selectors';
import { Update } from '@ngrx/entity';
import { songUpdated } from 'src/app/core/store/actions/songs.actions';

@Component({
  selector: 'ngSpotify-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent {
  @Input() songId!: string;
  song$!: Observable<Song | any>;

  constructor(public store$: Store<AppState>) {}

  ngOnInit(): void {
    this.song$ = this.store$.pipe(select(selectSongsById(this.songId)));
  }

  addFavorite(song: Song) {
    if (song != undefined) {
      const update: Update<Song> = {
        id: song.id,
        changes: { favorite: !song.favorite },
      };

      this.store$.dispatch(songUpdated({ update }));
    }
  }
}
