'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Minus, Plus } from 'lucide-react';

const tracks = [
  { title: 'SPECIALZ (Jujutsu Kaisen)', subtitle: 'Anifi', src: '/SPECIALZ (Jujutsu Kaisen).mp3' },
  { title: 'The Pursuit of Happyness', subtitle: 'Leessang', src: '/Leessang.mp3' },
  { title: 'Everybody', subtitle: 'Kanye West', src: '/Everybody.mp3' },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Default to true for auto-play
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50); // Default volume level
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => console.error('Error playing audio:', error));
    }
    setIsPlaying(!isPlaying);
  };

  const skipTrack = (direction) => {
    const newIndex = (currentTrackIndex + direction + tracks.length) % tracks.length;
    setCurrentTrackIndex(newIndex);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
    setDuration(audio.duration);
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    audio.volume = isMuted ? volume / 100 : 0;
    setIsMuted(!isMuted);
  };

  const changeVolume = (delta) => {
    const newVolume = Math.max(0, Math.min(100, volume + delta));
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
    setIsMuted(newVolume === 0);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume / 100; 
    audio.addEventListener('timeupdate', handleTimeUpdate);

    
    if (isPlaying) {
      audio.play().catch((error) => console.error('Auto-play error:', error));
    }

    return () => audio.removeEventListener('timeupdate', handleTimeUpdate);
  }, [volume, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = tracks[currentTrackIndex].src;

    // Auto-play on track change
    if (isPlaying) {
      audio.play().catch((error) => console.error('Auto-play error on track change:', error));
    }
  }, [currentTrackIndex, isPlaying]);

  return (
    <div className="flex flex-col items-center justify-center mt-10 w-full">
      <audio ref={audioRef} src={tracks[currentTrackIndex].src} onEnded={() => skipTrack(1)} />

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
            max={duration || 0}
            value={currentTime || 0}
            onChange={(e) => {
              audioRef.current.currentTime = e.target.value;
            }}
            className="w-full mb-2"
            style={{
              appearance: 'none',
              background: `linear-gradient(to right, #4a4a4a ${
                duration ? (currentTime / duration) * 100 : 0
              }%, #e0e0e0 0%)`,
              height: '8px',
              borderRadius: '5px',
            }}
          />
          <div className="flex justify-between w-full text-sm text-white">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="items-center justify-center gap-3 mt-5 hidden sm:flex">
          <Minus
            className="cursor-pointer text-white text-xl"
            onPointerDown={() => changeVolume(-5)}
            title="Decrease Volume"
          />
          <div
            className="flex flex-col items-center cursor-pointer"
            onPointerDown={toggleMute}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="text-white text-xl" />
            ) : (
              <Volume2 className="text-white text-xl" />
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white font-bold">{isMuted ? '0' : volume}</span>
            <Plus
              className="cursor-pointer text-white text-xl"
              onPointerDown={() => changeVolume(5)}
              title="Increase Volume"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
