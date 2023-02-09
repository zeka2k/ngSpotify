export interface Artist {
  name: String;
  albums: Album[];
  description: String;
}

export interface Album {
  title: String;
  image: String;
  songs: Song[];
  description: String;
  favorite: boolean;
}

export interface Song {
  title: String;
  length: String;
  favorite: Boolean;
}
