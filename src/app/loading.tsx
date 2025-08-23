'use client';
import Image from 'next/image';
import React from 'react';

type LoaderProps = {
  logoUrl?: string; 
  size?: number;    
};

const Loader = ({ logoUrl, size = 80 }: LoaderProps) => {
  return (
    <div className="flex items-center justify-center h-screen">
      {logoUrl ? (
        <Image
          src='/TestLogo.png'
          alt="Loading..."
          className="animate-spin"
          style={{ width: size, height: size }}
        />
      ) : (
        <div
          className="animate-spin rounded-full border-t-4 border-b-4 border-purple-500"
          style={{ width: size, height: size }}
        />
      )}
    </div>
  );
};

export default Loader;
