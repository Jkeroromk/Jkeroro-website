import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat } from 'lucide-react';

const tracks = [
  { title: 'SPECIALZ (Jujutsu Kaisen)', subtitle: 'Anifi', src: '/SPECIALZ (Jujutsu Kaisen).mp3' },
  { title: 'Track 2', subtitle: '', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { title: 'Track 3', subtitle: '', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(100);
  const [isLoop, setIsLoop] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipTrack = (direction) => {
    let newIndex = currentTrackIndex + direction;
    if (newIndex < 0) newIndex = tracks.length - 1;
    if (newIndex >= tracks.length) newIndex = 0;
    setCurrentTrackIndex(newIndex);
  };

  const handleVolumeChange = (e) => {
    const volumeValue = e.target.value;
    audioRef.current.volume = volumeValue / 100;
    setVolume(volumeValue);
  };

  const handleRandomize = () => {
    const randomIndex = Math.floor(Math.random() * tracks.length);
    setCurrentTrackIndex(randomIndex);
    setIsRandom(!isRandom);
  };

  const handleLoop = () => {
    const loop = !isLoop;
    audioRef.current.loop = loop;
    setIsLoop(loop);
  };

  // Update the current time and duration
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
    setDuration(audio.duration);
  };

  // Format time into mm:ss format
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <audio ref={audioRef} src={tracks[currentTrackIndex].src} />
      <div className="flex flex-col items-center bg-opacity-70 p-6 rounded-lg w-72 text-white">
        {/* Track Title */}
        <h3 className="mb-2 text-xl font-bold">{tracks[currentTrackIndex].title}</h3>

        {/* Track Subtitle (artist or singer name) */}
        {tracks[currentTrackIndex].subtitle && (
          <p className="text-sm text-gray-300 mb-5">{tracks[currentTrackIndex].subtitle}</p>
        )}

        {/* Play / Pause and Skip Controls */}
        <div className="flex justify-between w-full mb-5">
          <SkipBack onClick={() => skipTrack(-1)} className="cursor-pointer text-white text-2xl" />
          <div onClick={togglePlayPause} className="cursor-pointer text-white text-2xl">
            {isPlaying ? <Pause /> : <Play />}
          </div>
          <SkipForward onClick={() => skipTrack(1)} className="cursor-pointer text-white text-2xl" />
        </div>

        {/* Progress Bar */}
        <div className="w-full flex flex-col items-center mb-5">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => audioRef.current.currentTime = e.target.value}
            className="w-full mb-2"
          />
          <div className="flex justify-between w-full text-sm text-white">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume Control - Moved closer to progress bar */}
        <div className="flex flex-row items-center w-full mb-5">
          <Volume2 className="cursor-pointer text-white text-2xl" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="ml-2 w-2/6"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
