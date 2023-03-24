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
  currentArtist!: Artist;

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
    //console.log(album); // esta no album correto mas nao entra no ciclo pois this.albums so e chamado pelo o liked-albums que so nos envia albuns de um dados artista e nao de todos
    this.songs = [];

    for (let i = 0; i < this.albums.length; i++) {
      if (this.albums[i].title == album) {
        for (let j = 0; j < this.albums[i].songs.length; j++) {
          this.songs.push(this.albums[i].songs[j]);
        }
        //console.log(this.songs);
        return this.songs;
      }
    }
    return this.songs;
  }

  addAlbum(artist: string, title: string, songs: Song[]) {
    const album = new Album(title, songs);
    for(let i = 0; i < this.artistList.length; i++) {
      if(this.artistList[i].name == artist) {
        this.artistList[i].albums.push(album);
      }
    }
    return album;
  }
}
