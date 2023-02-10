import { Component, Input } from '@angular/core';
import { Song } from '../artist';

@Component({
  selector: 'ngSpotify-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent {
  hideSongs = true;
  totalSongs: number = 0;
  totalTime: number = 0;
  minutes = 0;
  seconds = 0;

  @Input() songs: Song[] | undefined;

  ngOnInit(): void {
    if (this.songs != undefined) {
      for (let i = 0; i < this.songs?.length; i++) {
        this.totalSongs++;
        let parts = this.songs[i].length.split(':');
        this.minutes = this.minutes + parseInt(parts[0], 10);
        this.seconds = this.seconds + parseInt(parts[1], 10);
        this.totalTime = this.minutes + this.seconds;
      }
    }
  }

  showSongs() {
    this.hideSongs = !this.hideSongs;
  }

  addFavorite(i: number) {
    if (this.songs != undefined) {
      this.songs[i].favorite = !this.songs[i].favorite;
      console.log(this.songs[i].favorite);
    }
  }
}
