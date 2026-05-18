/** Public image paths (respect Vite base URL for GitHub Pages). */
const base = import.meta.env.BASE_URL

export const images = {
  heroKitchen: `${base}images/hero-kitchen.jpg`,
  gallery: {
    k1Before: `${base}images/kitchen-before.jpg`,
    k1After: `${base}images/kitchen-after.jpg`,
    b1Before: `${base}images/bath-before.jpg`,
    b1After: `${base}images/bath-after.jpg`,
    k2Before: `${base}images/kitchen2-before.jpg`,
    k2After: `${base}images/kitchen2-after.jpg`,
    b2Before: `${base}images/bath2-before.jpg`,
    b2After: `${base}images/bath2-after.jpg`,
  },
} as const
