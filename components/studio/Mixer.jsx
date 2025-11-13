import React from 'react';
import Slider from '@/components/ui/Slider';
import Button from '@/components/ui/Button';

export default function Mixer() {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <h2 className="text-xl font-bold mb-4">Mixer</h2>
      <div className="grid grid-cols-2 gap-4">
        <Slider label="Volume" />
        <Slider label="Bass" />
        <Slider label="Treble" />
        <Slider label="Effects" />
      </div>
      <Button variant="primary">Save Settings</Button>
    </div>
  );
}
