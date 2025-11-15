/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* light-rice-paper */
        input: "var(--color-input)", /* rice-paper */
        ring: "var(--color-ring)", /* turmeric-gold */
        background: "var(--color-background)", /* coconut-cream */
        foreground: "var(--color-foreground)", /* dark-tamarind */
        primary: {
          DEFAULT: "var(--color-primary)", /* turmeric-gold */
          foreground: "var(--color-primary-foreground)", /* dark-tamarind */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* curry-leaf-green */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* paprika-warmth */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* rice-paper */
          foreground: "var(--color-muted-foreground)", /* mild-spice */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* cinnamon-spice */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* pure-white */
          foreground: "var(--color-popover-foreground)", /* dark-tamarind */
        },
        card: {
          DEFAULT: "var(--color-card)", /* pure-white */
          foreground: "var(--color-card-foreground)", /* dark-tamarind */
        },
        success: {
          DEFAULT: "var(--color-success)", /* fresh-herb */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* gentle-saffron */
          foreground: "var(--color-warning-foreground)", /* dark-tamarind */
        },
        error: {
          DEFAULT: "var(--color-error)", /* paprika-warmth */
          foreground: "var(--color-error-foreground)", /* white */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spice-rotate": {
          "0%": { filter: "hue-rotate(0deg)" },
          "50%": { filter: "hue-rotate(15deg)" },
          "100%": { filter: "hue-rotate(0deg)" },
        },
        "cultural-breathe": {
          "0%, 100%": { 
            transform: "scaleX(1)", 
            letterSpacing: "-0.02em" 
          },
          "50%": { 
            transform: "scaleX(1.02)", 
            letterSpacing: "0.05em" 
          },
        },
        "heritage-glow": {
          "0%, 100%": { 
            boxShadow: "0 4px 20px rgba(212, 165, 116, 0.15)" 
          },
          "50%": { 
            boxShadow: "0 8px 30px rgba(212, 165, 116, 0.25)" 
          },
        },
        "coconut-reveal": {
          "0%": { 
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" 
          },
          "100%": { 
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spice-rotate": "spice-rotate 4s ease-in-out infinite",
        "cultural-breathe": "cultural-breathe 2.5s ease-in-out infinite",
        "heritage-glow": "heritage-glow 3s ease-in-out infinite",
        "coconut-reveal": "coconut-reveal 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
      },
      spacing: {
        '13': '3.25rem', /* 52px - golden ratio */
        '21': '5.25rem', /* 84px - golden ratio */
        '34': '8.5rem',  /* 136px - golden ratio */
        '55': '13.75rem', /* 220px - golden ratio */
      },
      boxShadow: {
        'heritage': '0 4px 20px rgba(212, 165, 116, 0.15)',
        'cultural': '0 8px 30px rgba(212, 165, 116, 0.25)',
        'warm': '0 2px 10px rgba(212, 165, 116, 0.1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}