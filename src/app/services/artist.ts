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

export interface Song {
  title: string;
  length: string;
  favorite: boolean;
}
