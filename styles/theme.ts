import { createMuiTheme, Theme as OriginalTheme } from '@material-ui/core';

export interface CustomTheme extends OriginalTheme {
  customTheme: {
    colors: {
      terciary: string;
    };
  };
}

export const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#0DB3D9',
      },
      secondary: {
        main: '#F2F2F2',
      },
      text: {
        primary: '#152840',
        secondary: '#F2F2F2',
        disabled: '#516073',
      },
    },
  },
  {
    customTheme: {
      colors: {
        terciary: '#80DDF2',
      },
    },
  }
) as CustomTheme;
