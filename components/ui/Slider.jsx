import React from 'react';

export default function Slider({ label }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm">{label}</label>
      <input type="range" min="0" max="100" step="1" className="w-full" />
    </div>
  );
}
