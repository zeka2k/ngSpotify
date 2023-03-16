import { Component, Input, OnInit } from '@angular/core';
import { Artist, Song } from '../services/artist';
import albuns from 'src/app/ file/albuns.json';

@Component({
  selector: 'ngSpotify-liked-songs',
  templateUrl: './liked-songs.component.html',
  styleUrls: ['./liked-songs.component.scss'],
})
export class LikedSongsComponent implements OnInit {
  @Input() artists: Artist[] | undefined = albuns;
  likedSongs: Song[] | undefined = [];

  constructor() {}

  ngOnInit(): void {
    this.likedSongs = this.artists
      ?.map((artist) =>
        artist.albums
          .map((album) => album.songs.filter((song) => song.favorite))
          .flat()
      )
      .flat();
  }

  /**----> API Request <----**/
  addFavorite(k: number) {
    if (this.artists != undefined && this.likedSongs != undefined) {
      this.likedSongs[k].favorite = !this.likedSongs[k].favorite;
      this.likedSongs.splice(k, 1); //to remove the now false favorite song from likedSongs
    }
  }
}
