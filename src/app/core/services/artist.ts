export interface Artist {
  name: string;
  albums: Album[];
  description: string;
}

export interface Album {
  title: string;
  image: string;
  songs: Song[];
  description: string;
  favorite: boolean;
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
}