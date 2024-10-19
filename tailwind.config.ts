import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        big: "1024px",
      },
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
        arial: ["Arial", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      filter: {
        white:
          "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
      },
      boxShadow: {
        cartSahdow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        accountSahdow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        contactShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
      },
      colors: {
        "main-color": "#da4445",
        "border-color": "#bdbdbd",
        "main-hover-bg": "rgb(195 42 43)",
        "secondary-hover-bg": "#f1f1f1",
        "lis-hover-color": "rgb(59 59 59)",
        "navigator-hover-color": "#6b6b6b",
        "footer-lis-hover": "#b5b5b5",
      },
      animation: {
        "go-up": "go-up 0.5s linear infinite",
        coolHorizontalShake: "coolHorizontalShake 0.5s ",
        bounceFromTop: "bounceFromTop 1s",
      },
      keyframes: {
        "go-up": { "100%": { bottom: "20px" } },
        coolHorizontalShake: {
          "3%, 21%, 39%, 57%, 74%, 92%": { transform: "translateX(8px)" },
          "6%, 24%, 42%, 60%, 77%, 95%": { transform: "translateX(3px)" },
          "9%, 27%, 45%, 63%, 80%, 98%": { transform: "translateX(-8px)" },
        },
        bounceFromTop: {
          "0%, 25%, 55%, 85%, 100%": {
            "animation-timing-function": "ease-out",
            transform: "translate3d(0, 0, 0)",
          },
          "41%, 44%": {
            "animation-timing-function": "ease-in",
            transform: "translate3d(0, -10px, 0) scale3d(1, 1.6, 1)",
          },
          "70%": {
            "animation-timing-function": "ease-in",
            transform: "translate3d(0, -2.5px, 0)",
          },
          "90%": {
            transform: "translate3d(0, -0.5px, 0)",
          },
        },
      },
      backgroundImage: {
        "instagram-gradient":
          "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".filter-white": {
          filter:
            "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
        },
      });
    },
  ],
};

export default config;
