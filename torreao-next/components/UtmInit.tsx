'use client';
import { useEffect } from 'react';
import { saveUtms, populateUtmFields } from '@/lib/utm';

export default function UtmInit() {
  useEffect(() => {
    saveUtms();
    populateUtmFields();
  }, []);
  return null;
}
