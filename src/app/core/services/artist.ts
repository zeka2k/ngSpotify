import { v4 as uuid } from 'uuid';
export interface Artist {
  id: string;
  array: any;
  name: string;
  albums: Album[];
  description: string;
}

export interface Album {
  id: string;
  title: string;
  image: string;
  songs: Song[];
  description: string;
  favorite: boolean;
}

export interface Song {
  id: string;
  title: string;
  length: string;
  favorite: boolean;
}

export class Album {
  constructor(title: string, descripton: string, songs: Song[]) {
    this.title = title;
    this.description = descripton;
    this.songs = songs;
  }
}

export interface SongForm {
  songName: string;
  songLength: string;
}

export class Song {
  constructor(
    title: string,
    length: string,
    favorite: boolean,
    id: string,
    albumId: string
  ) {
    this.title = title;
    this.length = length;
    this.favorite = favorite;
  }

  public static fromForm(form: SongForm, albumId: string) {
    let songId = '';
    songId = uuid();
    return new Song(form.songName, form.songLength, false, songId, albumId);
  }

  setvalue(form: SongForm) {
    this.title = form.songName;
    this.length = form.songLength;
  }

  // public static updateFromForm(form: SongForm, id: string, favorite) {
  //   const songId;
  //   return new Song(form.songName, form.songLength, false);
  // }
}

// export function compareCourses(a1: Artist, a2: Artist) {
//   const compare = a1.id - a2.id;

//   if (compare > 0) {
//     return 1;
//   } else if (compare < 0) {
//     return -1;
//   } else return 0;
// }
