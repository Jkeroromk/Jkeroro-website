import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

const tracks = [
  { title: 'SPECIALZ (Jujutsu Kaisen)', subtitle: 'Anifi', src: '/SPECIALZ (Jujutsu Kaisen).mp3' },
  { title: 'Track 2', subtitle: '', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { title: 'Track 3', subtitle: '', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.error('Error attempting to play audio:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const skipTrack = (direction) => {
    let newIndex = currentTrackIndex + direction;
    if (newIndex < 0) newIndex = tracks.length - 1;
    if (newIndex >= tracks.length) newIndex = 0;
    setCurrentTrackIndex(newIndex);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
    setDuration(audio.duration);
  };

  const handleSongEnd = () => {
    skipTrack(1);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleSongEnd);
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleSongEnd);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.play().catch((error) => {
        console.error('Error attempting to play audio:', error);
      });
    }
  }, [currentTrackIndex, isPlaying]);

  return (
    <div className="flex flex-col items-center justify-center mt-10 w-full">
      <audio ref={audioRef} src={tracks[currentTrackIndex].src} />
      <div className="flex flex-col items-center bg-opacity-70 p-6 rounded-lg w-72 text-white">
        <h3 className="mb-2 text-xl font-bold">{tracks[currentTrackIndex].title}</h3>
        {tracks[currentTrackIndex].subtitle && (
          <p className="text-sm text-gray-300 mb-5">{tracks[currentTrackIndex].subtitle}</p>
        )}
        <div className="flex justify-between w-full mb-5">
          <SkipBack onClick={() => skipTrack(-1)} className="cursor-pointer text-white text-2xl" />
          <div onClick={togglePlayPause} className="cursor-pointer text-white text-2xl">
            {isPlaying ? <Pause /> : <Play />}
          </div>
          <SkipForward onClick={() => skipTrack(1)} className="cursor-pointer text-white text-2xl" />
        </div>
        <div className="w-full flex flex-col items-center mb-2 mt-2">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => audioRef.current.currentTime = e.target.value}
            className="w-full mb-2"
            style={{
              appearance: 'none',
              background: `linear-gradient(to right, #4a4a4a ${((currentTime / duration) * 100)}%, #e0e0e0 0%)`,
              height: '8px',
              borderRadius: '5px',
            }}
          />
          <div className="flex justify-between w-full text-sm text-white">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
