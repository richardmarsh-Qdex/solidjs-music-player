import { Component, createSignal, For } from 'solid-js';
import Player from './components/Player';
import Playlist from './components/Playlist';
import { songs } from './data/songs';

const App: Component = () => {
  const [currentSong, setCurrentSong] = createSignal(songs[0]);
  const [isPlaying, setIsPlaying] = createSignal(false);
  const [currentTime, setCurrentTime] = createSignal(0);

  return (
    <div class="app">
      <h1>Music Player</h1>
      <Player
        song={currentSong()}
        isPlaying={isPlaying()}
        currentTime={currentTime()}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={setCurrentTime}
      />
      <Playlist
        songs={songs}
        currentSong={currentSong()}
        onSelectSong={setCurrentSong}
      />
    </div>
  );
};

export default App;
