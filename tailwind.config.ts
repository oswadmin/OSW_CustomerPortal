import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    screens: {
      phone: '0px',
      desktop: '1024px', // For desktops (1024px and up)
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        phone: '360px',
        desktop: '1024px', // Fixed width on desktop,
      }
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans]
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        //orange: '#f57305',
        orange: '#F77C00',
        orange_light: '#fea400',
        blue: '#060082',
        blue_dark: '#030041',
        blue_light: '#5451A1',
        gray_light: '#BFBFBF',
        gray: '#808080',
        gray_dark: '#404040',
        bg_secondary: '#e6e6e6',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        backgroundImage: {
          'footer-img': "url('/OSW_Surface_Washing_1.jpg')",
        },

      },
      boxShadow: {
        'md': '2px 2px 2px rgba(100, 0, 100, 0.55)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 2px)",
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
        'rise-up': {
          '0%': { 
            transform: 'translateY(100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
        'slide-down': {
          '0%': { 
            transform: 'translateY(0)',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(100%)',
            opacity: '0'
          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "rise-up": "rise-up 1s ease-out",
        "slide-down": "slide-down 1s ease-in",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config