'use client';

import { useEffect } from 'react';
import { bootstrapTrackingContext } from '@/lib/tracking';

export default function TrackingBootstrap() {
  useEffect(() => {
    bootstrapTrackingContext();
  }, []);

  return null;
}
