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

export const variables = {
  primary: "--p",
  "primary-focus": "--pf",
  "primary-content": "--pc",

  secondary: "--s",
  "secondary-focus": "--sf",
  "secondary-content": "--sc",

  accent: "--a",
  "accent-focus": "--af",
  "accent-content": "--ac",

  neutral: "--n",
  "neutral-focus": "--nf",
  "neutral-content": "--nc",

  "base-100": "--b1",
  "base-200": "--b2",
  "base-300": "--b3",
  "base-content": "--bc",

  info: "--in",
  "info-content": "--inc",

  success: "--su",
  "success-content": "--suc",

  warning: "--wa",
  "warning-content": "--wac",

  error: "--er",
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

  // auto generate focus colors
  if (!Object.hasOwn(input, "primary-focus")) {
    resultObj["--pf"] = generateDarkenColorFrom(input["primary"]);
  }
  if (!Object.hasOwn(input, "secondary-focus")) {
    resultObj["--sf"] = generateDarkenColorFrom(input["secondary"]);
  }
  if (!Object.hasOwn(input, "accent-focus")) {
    resultObj["--af"] = generateDarkenColorFrom(input["accent"]);
  }
  if (!Object.hasOwn(input, "neutral-focus")) {
    resultObj["--nf"] = generateDarkenColorFrom(input["neutral"]);
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

  if (!Object.hasOwn(input, "info")) {
    resultObj["--in"] = 198 + " " + 93 + "%" + " " + 60 + "%";
  }
  if (!Object.hasOwn(input, "success")) {
    resultObj["--su"] = 158 + " " + 64 + "%" + " " + 52 + "%";
  }
  if (!Object.hasOwn(input, "warning")) {
    resultObj["--wa"] = 43 + " " + 96 + "%" + " " + 56 + "%";
  }
  if (!Object.hasOwn(input, "error")) {
    resultObj["--er"] = 0 + " " + 67 + "%" + " " + 45 + "%";
  }

  // auto generate content colors
  if (!Object.hasOwn(input, "base-content")) {
    resultObj["--bc"] = generateForegroundColorFrom(input["base-100"]);
  }
  if (!Object.hasOwn(input, "primary-content")) {
    resultObj["--pc"] = generateForegroundColorFrom(input["primary"]);
  }
  if (!Object.hasOwn(input, "secondary-content")) {
    resultObj["--sc"] = generateForegroundColorFrom(input["secondary"]);
  }
  if (!Object.hasOwn(input, "accent-content")) {
    resultObj["--ac"] = generateForegroundColorFrom(input["accent"]);
  }
  if (!Object.hasOwn(input, "neutral-content")) {
    resultObj["--nc"] = generateForegroundColorFrom(input["neutral"]);
  }
  if (!Object.hasOwn(input, "info-content")) {
    if (Object.hasOwn(input, "info")) {
      resultObj["--inc"] = generateForegroundColorFrom(input["info"]);
    } else {
      resultObj["--inc"] = 198 + " " + 100 + "%" + " " + 12 + "%";
    }
  }
  if (!Object.hasOwn(input, "success-content")) {
    if (Object.hasOwn(input, "success")) {
      resultObj["--suc"] = generateForegroundColorFrom(input["success"]);
    } else {
      resultObj["--suc"] = 158 + " " + 100 + "%" + " " + 10 + "%";
    }
  }
  if (!Object.hasOwn(input, "warning-content")) {
    if (Object.hasOwn(input, "warning")) {
      resultObj["--wac"] = generateForegroundColorFrom(input["warning"]);
    } else {
      resultObj["--wac"] = 43 + " " + 100 + "%" + " " + 11 + "%";
    }
  }
  if (!Object.hasOwn(input, "error-content")) {
    if (Object.hasOwn(input, "error")) {
      resultObj["--erc"] = generateForegroundColorFrom(input["error"]);
    } else {
      resultObj["--erc"] = 0 + " " + 100 + "%" + " " + 14 + "%";
    }
  }

  return resultObj;
};
