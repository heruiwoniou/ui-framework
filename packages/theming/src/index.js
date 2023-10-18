import plugin from "tailwindcss/plugin";
import DefaultThemes from "./themes";
import config from "./config";
import { convertThemeToVariables } from "./utils";

export default plugin.withOptions(function ({ themes, dark } = {}) {
  return function ({ addBase }) {
    let order = [];
    const includeThemes = {};
    const defaultThemes = Object.entries(DefaultThemes.themes);

    // add the default themes;
    for (let i = 0; i < defaultThemes.length; i++) {
      const [theme, value] = defaultThemes[i];
      includeThemes[theme] = convertThemeToVariables(value);
    }

    // add the customize themes
    if (Array.isArray(themes) && themes.length > 0) {
      for (let i = 0; i < themes.length; i++) {
        const itemTheme = themes[i];
        if (typeof itemTheme === "object" && itemTheme !== null) {
          const itemThemeEntries = Object.entries(itemTheme);
          // add the to includes
          for (let j = 0; j < itemThemeEntries.length; j++) {
            const [theme, value] = itemThemeEntries[j];
            includeThemes[theme] = convertThemeToVariables(value);
            order.push(theme);
          }
        } else if (Object.hasOwn(includeThemes, itemTheme)) {
          order.push(itemTheme);
        }
      }
    } else {
      order = DefaultThemes.order;
    }

    // inject theme by order
    const injectThemes = {};
    for (let i = 0; i < order.length; i++) {
      const theme = order[i];

      // set default themes
      if (i === 0) {
        injectThemes[":root"] = includeThemes[theme];
      } else if (i === 1) {
        if (dark) {
          if (order[0] !== dark && order.includes(dark)) {
            // set auto dark mode by system
            injectThemes["@media (prefers-color-scheme: dark)"] = {
              [":root"]: includeThemes[dark],
            };
          }
          if (dark === true && order[0] !== "dark" && order.includes("dark")) {
            injectThemes["@media (prefers-color-scheme: dark)"] = {
              [":root"]: includeThemes["dark"],
            };
          }
        }
      }
      // Set unconventional themes
      injectThemes["[data-theme=" + theme + "][data-theme=" + theme + "]"] =
        includeThemes[theme];
    }

    addBase(injectThemes);
  };
}, config);
