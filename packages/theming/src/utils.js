import { colord, extend } from "colord";
import mix from "colord/plugins/mix";
import names from "colord/plugins/names";
import lch from "colord/plugins/lch";
import hwb from "colord/plugins/hwb";
import lab from "colord/plugins/lab";
import xyz from "colord/plugins/xyz";

extend([mix, names, lch, hwb, lab, xyz]);

function generateForegroundColorFrom(input, percentage = 0.8) {
  const hsl = colord(input)
    .mix(colord(input).isDark() ? "white" : "black", percentage)
    .toHsl();
  return `${hsl.h} ${hsl.s}% ${hsl.l}%`;
}

function generateDarkenColorFrom(input, percentage = 0.07) {
  const hsl = colord(input).darken(percentage).toHsl();
  return `${hsl.h} ${hsl.s}% ${hsl.l}%`;
}

function generateLightenColorFrom(input, percentage = 0.07) {
  const hsl = colord(input).lighten(percentage).toHsl();
  return `${hsl.h} ${hsl.s}% ${hsl.l}%`;
}

export const variables = {
  primary: "--p",
  "primary-dark": "--pd",
  "primary-light": "--pl",
  "primary-content": "--pc",

  secondary: "--s",
  "secondary-dark": "--sd",
  "secondary-light": "--sl",
  "secondary-content": "--sc",

  accent: "--a",
  "accent-dark": "--ad",
  "accent-light": "--al",
  "accent-content": "--ac",

  neutral: "--n",
  "neutral-dark": "--nd",
  "neutral-light": "--nl",
  "neutral-content": "--nc",

  "base-100": "--b1",
  "base-200": "--b2",
  "base-300": "--b3",
  "base-content": "--bc",

  info: "--in",
  "info-dark": "--ind",
  "info-light": "--inl",
  "info-content": "--inc",

  success: "--su",
  "success-dark": "--sud",
  "success-light": "--sul",
  "success-content": "--suc",

  warning: "--wa",
  "warning-dark": "--wad",
  "warning-light": "--wal",
  "warning-content": "--wac",

  error: "--er",
  "error-dark": "--erd",
  "error-light": "--erl",
  "error-content": "--erc",
};

export const convertThemeToVariables = function (input) {
  const entries = Object.entries(input);
  const resultObj = {};
  for (let i = 0; i < entries.length; i++) {
    const [rule, value] = entries[i];

    if (variables.hasOwnProperty(rule)) {
      const hsl = colord(value).toHsl();
      resultObj[variables[rule]] = `${hsl.h} ${hsl.s}% ${hsl.l}%`;
    } else {
      resultObj[rule] = value;
    }
  }

  // auto generate dark colors
  if (!Object.hasOwn(input, "primary-dark")) {
    resultObj["--pd"] = generateDarkenColorFrom(input["primary"]);
  }
  if (!Object.hasOwn(input, "secondary-dark")) {
    resultObj["--sd"] = generateDarkenColorFrom(input["secondary"]);
  }
  if (!Object.hasOwn(input, "accent-dark")) {
    resultObj["--ad"] = generateDarkenColorFrom(input["accent"]);
  }
  if (!Object.hasOwn(input, "neutral-dark")) {
    resultObj["--nd"] = generateDarkenColorFrom(input["neutral"]);
  }

  // auto generate lighten colors
  if (!Object.hasOwn(input, "primary-light")) {
    resultObj["--pd"] = generateLightenColorFrom(input["primary"]);
  }
  if (!Object.hasOwn(input, "secondary-light")) {
    resultObj["--sd"] = generateLightenColorFrom(input["secondary"]);
  }
  if (!Object.hasOwn(input, "accent-light")) {
    resultObj["--ad"] = generateLightenColorFrom(input["accent"]);
  }
  if (!Object.hasOwn(input, "neutral-light")) {
    resultObj["--nd"] = generateLightenColorFrom(input["neutral"]);
  }

  // auto generate base colors
  if (!Object.hasOwn(input, "base-100")) {
    resultObj["--b1"] = "100 0 0";
  }
  if (!Object.hasOwn(input, "base-200")) {
    resultObj["--b2"] = generateDarkenColorFrom(input["base-100"]);
  }
  if (!Object.hasOwn(input, "base-300")) {
    if (Object.hasOwn(input, "base-200")) {
      resultObj["--b3"] = generateDarkenColorFrom(input["base-200"]);
    } else {
      resultObj["--b3"] = generateDarkenColorFrom(input["base-100"], 0.14);
    }
  }

  // auto generate state colors

  const infoDefault = "hsl(198 93% 60%)";
  if (!Object.hasOwn(input, "info")) {
    resultObj["--in"] = 198 + " " + 93 + "%" + " " + 60 + "%";
  }
  if (!Object.hasOwn(input, "info-dark")) {
    resultObj["--ind"] = generateDarkenColorFrom(input["info"] || infoDefault);
  }
  if (!Object.hasOwn(input, "info-light")) {
    resultObj["--inl"] = generateLightenColorFrom(input["info"] || infoDefault);
  }

  const successDefault = "hsl(158 64% 52%)";
  if (!Object.hasOwn(input, "success")) {
    resultObj["--su"] = 158 + " " + 64 + "%" + " " + 52 + "%";
  }
  if (!Object.hasOwn(input, "success-dark")) {
    resultObj["--sd"] = generateDarkenColorFrom(
      input["info"] || successDefault
    );
  }
  if (!Object.hasOwn(input, "success-light")) {
    resultObj["--sl"] = generateLightenColorFrom(
      input["info"] || successDefault
    );
  }

  const warningDefault = "hsl(43 96% 56%)";
  if (!Object.hasOwn(input, "warning")) {
    resultObj["--wa"] = 43 + " " + 96 + "%" + " " + 56 + "%";
  }
  if (!Object.hasOwn(input, "warning-dark")) {
    resultObj["--wad"] = generateDarkenColorFrom(
      input["warning"] || warningDefault
    );
  }
  if (!Object.hasOwn(input, "warning-light")) {
    resultObj["--wal"] = generateLightenColorFrom(
      input["warning"] || warningDefault
    );
  }

  const errorDefault = "hsl(0 67% 45%)";
  if (!Object.hasOwn(input, "error")) {
    resultObj["--er"] = 0 + " " + 67 + "%" + " " + 45 + "%";
  }
  if (!Object.hasOwn(input, "error-dark")) {
    resultObj["--erd"] = generateDarkenColorFrom(
      input["error"] || errorDefault
    );
  }
  if (!Object.hasOwn(input, "error-light")) {
    resultObj["--erl"] = generateLightenColorFrom(
      input["error"] || errorDefault
    );
  }

  // auto generate content colors
  if (!Object.hasOwn(input, "base-content")) {
    resultObj["--bc"] = generateForegroundColorFrom(input["base-100"]);
  }
  if (!Object.hasOwn(input, "primary-content")) {
    resultObj["--pc"] = generateForegroundColorFrom(input["primary"], 0.95);
  }
  if (!Object.hasOwn(input, "secondary-content")) {
    resultObj["--sc"] = generateForegroundColorFrom(input["secondary"], 0.95);
  }
  if (!Object.hasOwn(input, "accent-content")) {
    resultObj["--ac"] = generateForegroundColorFrom(input["accent"], 0.95);
  }
  if (!Object.hasOwn(input, "neutral-content")) {
    resultObj["--nc"] = generateForegroundColorFrom(input["neutral"], 0.95);
  }
  if (!Object.hasOwn(input, "info-content")) {
    resultObj["--inc"] = generateForegroundColorFrom(input["info"] || infoDefault, 0.95);
  }
  if (!Object.hasOwn(input, "success-content")) {
    resultObj["--suc"] = generateForegroundColorFrom(input["success"] || successDefault, 0.95);
  }
  if (!Object.hasOwn(input, "warning-content")) {
    resultObj["--wac"] = generateForegroundColorFrom(input["warning"] || warningDefault, 0.95);
  }
  if (!Object.hasOwn(input, "error-content")) {
    resultObj["--erc"] = generateForegroundColorFrom(input["error"] || errorDefault, 0.95);
  }

  return resultObj;
};
