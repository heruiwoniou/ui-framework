import type plugin from "tailwindcss/plugin";

declare const theming: ReturnType<typeof plugin>;

export default theming;

type CustomTheme = Record<string, Record<string, string>>;

type Theme = "light" | "dark";

interface ThemingConfig {
  /*
   * A custom theme list, you can customize or use strings to load the system's own theme
   *
   * */
  themes?: (Theme | CustomTheme)[];
  /*
   * Whether to enable the dark mode. If true, the system automatically uses the dark theme.
   * You can also use a string to specify the theme in the theme list as the dark theme
   *
   * */
  dark?: string | true;
}

export type { ThemingConfig as Config, Theme, CustomTheme };
