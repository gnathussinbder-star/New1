import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hussien Badr English Academy',
    short_name: 'HB English',
    description: 'Learn English with clarity. Grow with confidence.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F7FA',
    theme_color: '#102B4C',
    icons: [
      { src: '/assets/hb-icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/assets/hb-icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
