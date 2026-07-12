import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// GitHub Pages projectsite: https://jordiezoe.github.io/BKExamen/
export default defineConfig({
  base: '/BKExamen/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'BKExamen — Bouwkunde BT1/BT2',
        short_name: 'BKExamen',
        description:
          'Oefenexamen Bouwkunde BT1/BT2 (SVMNIVO Makelaar Wonen) in de stijl van de echte proeftoets.',
        theme_color: '#c8763b',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/BKExamen/',
        scope: '/BKExamen/',
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,webp,woff2}'],
        // Bijlage-PDF's kunnen groot zijn; sla ze via runtime cache op.
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.endsWith('.pdf'),
            handler: 'CacheFirst',
            options: { cacheName: 'bijlagen-pdf', expiration: { maxEntries: 20 } },
          },
        ],
      },
    }),
  ],
})
