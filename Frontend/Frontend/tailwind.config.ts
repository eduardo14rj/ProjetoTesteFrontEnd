import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

export default {
  prefix: '',
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '2.25rem',
              fontWeight: '700',
              lineHeight: '2.5rem',
            },
            h2: {
              fontSize: '1.875rem',
              fontWeight: '600',
              lineHeight: '2.25rem',
            },
            h3: {
              fontSize: '1.5rem',
              fontWeight: '600',
              lineHeight: '2rem',
            },
            h4: {
              fontSize: '1.45rem',
              fontWeight: '600',
              lineHeight: '1.75rem',
            },
            h5: {
              fontSize: '1rem',
              fontWeight: '600',
              lineHeight: '1.5rem',
            },
            h6: {
              fontSize: '0.875rem',
              fontWeight: '600',
              lineHeight: '1.25rem',
            },
          },
        },
      },
    },
  },
  plugins: [animate, typography],
} satisfies Config
