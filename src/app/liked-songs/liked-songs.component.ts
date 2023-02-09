import { Component, Input, OnInit } from '@angular/core';
import { Artist, Song } from '../artist';
import albuns from 'src/app/ file/albuns.json';

@Component({
  selector: 'ngSpotify-liked-songs',
  templateUrl: './liked-songs.component.html',
  styleUrls: ['./liked-songs.component.scss'],
})
export class LikedSongsComponent implements OnInit {
  @Input() artists: Artist[] | undefined = albuns;
  likedSongs: Song[] = [];

  constructor() {}

  ngOnInit(): void {
    //? -> can be undefined
    // this.likedSongs = this.artists?.forEach((artist) =>
    //   artist.albums.forEach((album) =>
    //     album.songs.filter((song) => song.favorite)
    //   )
    // );

    if (this.artists != undefined) {
      for (let i = 0; i < this.artists?.length; i++) {
        let albums = this.artists[i].albums;
        for (let j = 0; j < albums.length; j++) {
          let songs = albums[j].songs;
          for (let k = 0; k < songs.length; k++) {
            let song = songs[k];
            if (song.favorite) {
              this.likedSongs.push(song);
            }
          }
        }
      }
    }
  }

  /**----> API Request <----**/
  addFavorite(k: number) {
    if (this.artists != undefined) {
      this.likedSongs[k].favorite = !this.likedSongs[k].favorite;
      this.likedSongs.splice(k, 1); //to remove the now false favorite song from likedSongs
    }
  }
}
