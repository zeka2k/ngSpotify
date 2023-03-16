import { Injectable, Input } from '@angular/core';
import { Album, Artist, Song } from './artist';

import albuns from 'src/app/ file/albuns.json';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  @Input() artistList: Artist[] = albuns;
  albums: Album[] = [];
  songs: Song[] = [];

  constructor() {}

  getArtists(): Artist[] {
    return this.artistList;
  }

  getAlbums(artist: string): Album[] {
    this.albums = [];
    for(let i = 0; i < this.artistList.length; i++) {
      if(this.artistList[i].name == artist) {
        for (let j = 0; j < this.artistList[i].albums.length; j++) {
          this.albums.push(this.artistList[i].albums[j]);
        }
        return this.albums;
      }
    }
    return this.albums;
  }

  getSongs(album: string): Song[] {
    this.songs = [];
    for (let i = 0; i < this.albums.length; i++) {
      if (this.albums[i].title == album) {
        for (let j = 0; j < this.albums[i].songs.length; j++) {
          this.songs.push(this.albums[i].songs[j]);
        }
        return this.songs;
      }
    }
    return this.songs;
  }
}
