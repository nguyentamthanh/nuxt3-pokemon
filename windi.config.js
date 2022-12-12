import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
  theme: {
    extend: {
      backgroundImage: {
        faceFront: "url('../assets/images/icon_back.png')",
      },
    },
    colors: {
      primaryDark: "#212121",
      primaryLight: "#f3f3f3",
    },
    fontFamily: {
      thanhkun: "Odibee Sans",
    },
  },
});
