import React from 'react';
import Mixer from '@/components/studio/Mixer';
import Playlist from '@/components/studio/Playlist';

export default function StudioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">DJ Mixing Studio</h1>
      <Mixer />
      <Playlist />
    </div>
  );
}
