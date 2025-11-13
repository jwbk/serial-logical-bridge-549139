import React from 'react';

export default function SongCard({ title, artist }) {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{artist}</p>
    </div>
  );
}
