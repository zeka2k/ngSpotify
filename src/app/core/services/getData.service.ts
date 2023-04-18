import { Injectable } from '@angular/core';
import { Album, Artist, Song } from './artist';
import { v4 as uuid } from 'uuid';
import albuns from 'src/app/ file/albuns.json';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  artistList: Artist[] = [];
  albums: Album[] = [];
  LikedAlbums: Album[] = [];
  songs: Song[] = [];
  currentArtist!: Artist;

  albumsBehavior: BehaviorSubject<Album[]> = new BehaviorSubject<Album[]>([]);
  albums$: Observable<Album[]> = this.albumsBehavior.asObservable();

  constructor() {
    albuns.forEach((element: Artist) => {
      this.artistList.push(element);
    });
    this.artistList.forEach((artist: Artist) => {
      for (let album of artist.albums) {
        const id = uuid();
        album.id = id;
        for (let song of album.songs) {
          const id = uuid();
          song.id = id;
        }
      }
    });
  }

  getArtists(): Artist[] {
    return this.artistList;
  }

  getAlbums(artist: string): Album[] {
    this.albums = [];

    for (let i = 0; i < this.artistList.length; i++) {
      if (this.artistList[i].name == artist) {
        for (let j = 0; j < this.artistList[i].albums.length; j++) {
          this.albums.push(this.artistList[i].albums[j]);
        }
        return this.albums;
      }
    }
    return this.albums;
  }

  getAlbumsStore(): Album[] {
    this.albums = [];

    this.artistList.forEach((artist: Artist) => {
      for (let album of artist.albums) {
        this.albums.push(album);
      }
    });
    
    return this.albums;
  }

  getLikedAlbumsStore(): Album[] {
    const albuns: Album[] = this.getAlbumsStore();
    for(let album of albuns) {
      if(album.favorite) {
        this.LikedAlbums.push(album);
      }
    }
    return this.LikedAlbums;
  }

  getSongsStore(): Song[] {
    this.songs = [];

    this.artistList.forEach((artist: Artist) => {
      for (let album of artist.albums) {
        for (let song of album.songs) {
          this.songs.push(song);
        }
      }
    });

    return this.songs;
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

  addAlbum(
    artistName: string,
    title: string,
    description: string,
    songs: Song[]
  ) {
    const album = new Album(title, description, songs);
    //console.log(album);

    this.artistList.forEach((artist) => {
      if (artist.name == artistName) {
        //album.id = uuid();
        artist.albums.push(album);
      }
    });

    const newAlbum = [...this.getAlbums(artistName)];
    this.albumsBehavior.next(newAlbum);
  }

  updateAlbum(album: Album) {
    //console.log('antes' + JSON.stringify(this.albums));
    this.albums.forEach((artistAlbum) => {
      console.log(artistAlbum.id);
      console.log(album.id);
      if (artistAlbum.id == album.id) {
        // console.log('album que foi editado' + JSON.stringify(album));
        // console.log('album que ja existia' + JSON.stringify(artistAlbum));
        artistAlbum.title = album.title;
        artistAlbum.description = album.description;
        artistAlbum.songs = album.songs;
        //console.log('depois' + JSON.stringify(this.albums));
      }
    });

    const newAlbum = [...this.albums];
    this.albumsBehavior.next(newAlbum);
    //console.log(this.albumsBehavior.getValue());
  }
}
