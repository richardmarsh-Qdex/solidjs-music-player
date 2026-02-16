import { Component, For } from 'solid-js';

interface PlaylistProps {
  songs: Song[];
  currentSong: Song;
  onSelectSong: (song: Song) => void;
}

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: number;
  cover: string;
}

const Playlist: Component<PlaylistProps> = (props) => {
  return (
    <div class="playlist">
      <h2>Playlist</h2>
      <ul>
        <For each={props.songs}>
          {(song) => (
            <li
              class={song.id === props.currentSong.id ? 'active' : ''}
              onClick={() => props.onSelectSong(song)}
            >
              <img src={song.cover} alt={song.title} />
              <div>
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default Playlist;
