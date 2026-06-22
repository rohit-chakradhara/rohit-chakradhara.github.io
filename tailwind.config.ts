import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px rgba(15,23,42,0.12)",
        soft: "0 10px 40px rgba(15,23,42,0.12)"
      },
      backgroundImage: {
        "mesh-light":
          "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.18), transparent 28%), radial-gradient(circle at 80% 0%, rgba(14,165,233,0.16), transparent 22%), radial-gradient(circle at 100% 50%, rgba(244,114,182,0.15), transparent 25%), linear-gradient(180deg, rgba(255,255,255,0.72), rgba(255,255,255,0.92))",
        "mesh-dark":
          "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.20), transparent 28%), radial-gradient(circle at 80% 0%, rgba(14,165,233,0.16), transparent 22%), radial-gradient(circle at 100% 50%, rgba(244,114,182,0.12), transparent 25%), linear-gradient(180deg, rgba(2,6,23,0.88), rgba(15,23,42,0.94))"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        sheen: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        }
      },
      animation: {
        floaty: "floaty 8s ease-in-out infinite",
        sheen: "sheen 6s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
