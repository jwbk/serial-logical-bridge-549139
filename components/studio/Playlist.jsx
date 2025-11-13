import React from 'react';
import SongCard from '@/components/studio/SongCard';

export default function Playlist() {
  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-4">Playlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SongCard title="Song 1" artist="Artist 1" />
        <SongCard title="Song 2" artist="Artist 2" />
        <SongCard title="Song 3" artist="Artist 3" />
      </div>
    </div>
  );
}
