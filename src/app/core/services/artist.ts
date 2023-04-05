export interface Artist {
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
  public title: string;
  public length: string;
  public favorite: boolean;

  constructor(title: string, length: string, favorite: boolean) {
    this.title = title;
    this.length = length;
    this.favorite = favorite;
  }

  public static fromForm(form: SongForm) {
    return new Song(form.songName, form.songLength, false);
  }
}

// export function compareCourses(a1: Artist, a2: Artist) {
//   const compare = a1.id - a2.id;

//   if (compare > 0) {
//     return 1;
//   } else if (compare < 0) {
//     return -1;
//   } else return 0;
// }
