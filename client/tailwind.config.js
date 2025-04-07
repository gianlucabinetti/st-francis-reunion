// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      // ✅ Custom Font Families
      fontFamily: {
        playwrite: ['"Playwrite AU NSW"', 'serif'],
        inter: ['"Inter_18pt"', 'sans-serif'],
      },

      // ✅ Color Palette
      colors: {
        primary: '#1540ff',     // Deep royal blue (CTA base)
        accent: '#00AEEF',      // Aqua (hover / secondary)
        light: '#f9fbff',       // Soft background
        surface: '#ffffff',     // Cards/containers
        nav: '#d5e2bc',         // Optional nav tone
        dark: '#111827',        // Dark sections (hero/footer)

        // Gray scale (extends default)
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          600: '#4b5563',
          800: '#1f2937',
        },
      },
    },
  },

  plugins: [],
};
