'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Minus, Plus } from 'lucide-react';

const tracks = [
  { title: 'SPECIALZ (Jujutsu Kaisen)', subtitle: 'Anifi', src: '/SPECIALZ (Jujutsu Kaisen).mp3' },
  { title: 'The Pursuit of Happyness', subtitle: 'Leessang', src: '/Leessang.mp3' },
  { title: 'Everybody', subtitle: 'Kanye West', src: '/Everybody.mp3' },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50); // Default volume level
  const [isMuted, setIsMuted] = useState(false);
  const [showPermissionPrompt, setShowPermissionPrompt] = useState(true); // Show the prompt initially
  const audioRef = useRef(null);

  const handlePermissionResponse = (allow) => {
    if (allow) {
      const audio = audioRef.current;
      audio.muted = false; // Unmute the audio
      setIsPlaying(true);  // Set playing state to true
      audio.play().catch((error) => console.error('Error playing audio:', error));
    }
    setShowPermissionPrompt(false); // Hide the prompt
  };

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
    setIsPlaying(true); // Automatically play the next track when skipped
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

  // Volume and Mute Control
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
    audio.volume = volume / 100; // Set initial volume
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', () => skipTrack(1)); // Skip to next track when current one ends

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', () => skipTrack(1));
    };
  }, [volume, currentTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = tracks[currentTrackIndex].src;
    setIsPlaying(true); // Start playing the new track immediately when the track index changes
    audio.play().catch((error) => console.error('Error playing audio:', error)); // Play the track right away
  }, [currentTrackIndex]);

  return (
    <div className="flex flex-col items-center justify-center mt-10 w-full">
      {showPermissionPrompt && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">Allow Audio Playback</h2>
            <p className="mb-4">This website requires audio playback to continue. Would you like to enable sound?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handlePermissionResponse(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Allow
              </button>
              <button
                onClick={() => handlePermissionResponse(false)}
                className="bg-red-300 text-black px-4 py-2 rounded-lg"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Audio Element */}
      <audio ref={audioRef} src={tracks[currentTrackIndex].src} muted={isMuted} onEnded={() => skipTrack(1)} />

      {/* Player UI */}
      <div className="flex flex-col items-center bg-opacity-70 p-6 rounded-lg w-72 text-white">
        {/* Track Info */}
        <h3 className="mb-2 text-xl font-bold">{tracks[currentTrackIndex].title}</h3>
        {tracks[currentTrackIndex].subtitle && (
          <p className="text-sm text-gray-300 mb-5">{tracks[currentTrackIndex].subtitle}</p>
        )}

        {/* Playback Controls */}
        <div className="flex justify-between w-full mb-5">
          <SkipBack onClick={() => skipTrack(-1)} className="cursor-pointer text-white text-2xl  hover:scale-[1.5] transition duration-300" />
          <div onClick={togglePlayPause} className="cursor-pointer text-white text-2xl  hover:scale-[1.5] transition duration-300">
            {isPlaying ? <Pause /> : <Play />}
          </div>
          <SkipForward onClick={() => skipTrack(1)} className="cursor-pointer text-white text-2xl  hover:scale-[1.5] transition duration-300" />
        </div>

        {/* Progress Bar */}
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

        {/* Volume Controls */}
        <div className="items-center justify-center gap-3 mt-5 hidden sm:flex">
          <Minus
            className="cursor-pointer text-white text-xl hover:scale-[1.5] transition duration-300"
            onPointerDown={() => changeVolume(-5)} // Works for mobile and desktop
            title="Decrease Volume"
          />
          <div
            className="flex flex-col items-center cursor-pointer"
            onPointerDown={toggleMute} // Works for mobile and desktop
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
              className="cursor-pointer text-white text-xl  hover:scale-[1.5] transition duration-300"
              onPointerDown={() => changeVolume(5)} // Works for mobile and desktop
              title="Increase Volume"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
