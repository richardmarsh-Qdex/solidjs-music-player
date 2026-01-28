import { Component, Show } from 'solid-js';

interface PlayerProps {
  song: Song;
  isPlaying: boolean;
  currentTime: number;
  onPlay: () => void;
  onPause: () => void;
  onTimeUpdate: (time: number) => void;
}

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: number;
  cover: string;
}

const Player: Component<PlayerProps> = (props) => {
  return (
    <div class="player">
      <div class="cover">
        <img src={props.song.cover} alt={props.song.title} />
      </div>
      <div class="info">
        <h2>{props.song.title}</h2>
        <p>{props.song.artist}</p>
      </div>
      <div class="controls">
        <button onClick={props.isPlaying ? props.onPause : props.onPlay}>
          {props.isPlaying ? '⏸' : '▶'}
        </button>
        <div class="progress">
          <input
            type="range"
            min="0"
            max={props.song.duration}
            value={props.currentTime}
            onInput={(e) => props.onTimeUpdate(Number(e.currentTarget.value))}
          />
          <span>{formatTime(props.currentTime)} / {formatTime(props.song.duration)}</span>
        </div>
      </div>
    </div>
  );
};

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default Player;
