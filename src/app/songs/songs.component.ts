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
        let parts = this.songs[i].length.split(':').map(x => parseInt(x, 10));
        this.totalTime += parts[0] * 60 + parts[1];
        this.totalSongs++;
      }
      this.minutes = Math.floor(this.totalTime / 60);
      this.seconds = this.totalTime % 60;
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
