'use client';

import { useEffect, useState, ReactNode } from 'react';
import Intro from '@/components/intro'

type LoadingAniProps = {
  children: ReactNode;
};

export default function LoadingAni({ children }: LoadingAniProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Re-enable scrolling
    }
  }, [loading]);

  return (
    <>
      {loading && (
        <div className="loading-screen">
          <div className="crazy-animation">KABiRAAAA</div>
        </div>
      )}
      <div style={{ display: loading ? 'none' : 'block' }}>{children}</div>
    </>
  );
}