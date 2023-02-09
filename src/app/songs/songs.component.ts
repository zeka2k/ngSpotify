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
  songTime: string = "";

  @Input() songs: Song[] | undefined;

  ngOnInit(): void {
    if (this.songs != undefined) {
      for (let i = 0; i < this.songs?.length; i++) {
        // this.songTime = this.songs[i].length.toString();
        // this.totalTime = this.totalTime + parseFloat(this.songTime);
        this.totalSongs++;
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
