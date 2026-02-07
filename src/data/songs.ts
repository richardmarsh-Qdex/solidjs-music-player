export interface Song {
  id: number;
  title: string;
  artist: string;
  duration: number;
  cover: string;
}

export const songs: Song[] = [
  {
    id: 1,
    title: "Song One",
    artist: "Artist One",
    duration: 180,
    cover: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Song Two",
    artist: "Artist Two",
    duration: 210,
    cover: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    title: "Song Three",
    artist: "Artist Three",
    duration: 195,
    cover: "https://via.placeholder.com/150"
  }
];
