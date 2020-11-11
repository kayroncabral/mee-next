import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

import {
  PRIMARY_MAIN,
  PRIMARY_LIGHT,
  PRIMARY_DARK,
  PRIMARY_CONTRAST_TEXT,
  SECONDARY_MAIN,
  SECONDARY_LIGHT,
  SECONDARY_DARK,
  SECONDARY_CONTRAST_TEXT
} from "src/utils/constants";

const theme = responsiveFontSizes(
  createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          textTransform: "none"
        }
      }
    },
    palette: {
      type: "light",
      primary: {
        main: PRIMARY_MAIN,
        light: PRIMARY_LIGHT,
        dark: PRIMARY_DARK,
        contrastText: PRIMARY_CONTRAST_TEXT
      },
      secondary: {
        main: SECONDARY_MAIN,
        light: SECONDARY_LIGHT,
        dark: SECONDARY_DARK,
        contrastText: SECONDARY_CONTRAST_TEXT
      }
    }
  })
);

export default theme;
