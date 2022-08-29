import { css } from '@emotion/react'
import { RepeatWrapping } from 'three'

const pxToRem = (px: number) => `${px / 16}rem`

const mode = process.env.THEME
const pageBackground = '/images/tausta-2023.jpg'
const font = 'futura-pt, sans-serif'
const themeColors = ['#f15853']

const apyRed = '#f15853'
const apyYellow = '#fbf267'

const highlightColor =
  themeColors[Math.floor(Math.random() * themeColors.length)]

const theme = {
  mode: mode,
  rem: pxToRem,
  page: {
    backgroundColor: mode === 'ajaton' ? 'rgb(22, 23, 25)' : apyRed,
    backgroundImage: mode === 'ajaton' ? 'none' : `url('${pageBackground}')`,
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'top center',
  },
  colors: {
    '2021': themeColors,
    highlight: highlightColor,
    trueBlack: '#000',
    black: '#555',
    white: '#fff',
    grey: '#858585',
    'grey-light': '#ededed',
    'grey-dark': '#545454',
    primary: '#27AF81',
    magenta: '#E1034F',
    red: '#F94F59',
    teal: '#017E8A',
    orangeish: '#FFCE00',
    'light-green': '#CFEB99',
    'light-pink': '#FEEAE4',
    turquoise: '#1FD8AB',
  },
  spacing: {
    none: '0rem',
    xxsmall: '0.125rem',
    xsmall: '0.25rem',
    small: '0.5rem',
    default: '1rem',
    medium: '1.5rem',
    large: '2rem',
    xlarge: '2.5rem',
    xxlarge: '3rem',
    xxxlarge: '4rem',
  },
  typography: {
    title: css`
      font-family: ${font};
      font-size: 2.3rem;
      font-weight: bold;
      letter-spacing: 0.1rem;
      line-height: 1.3;

      @media only screen and (max-width: 600px) {
        font-size: 2rem;
      }
    `,
    'title-2': css`
      font-family: ${font};
      font-size: 1.8rem;
      font-weight: black;
      letter-spacing: 0.1rem;
      line-height: 1.3;

      @media only screen and (max-width: 600px) {
        font-size: 1.5rem;
      }
    `,
    subtitle: css`
      font-family: ${font};
      font-size: 1.4rem;
      font-weight: bold;
      letter-spacing: 0.1rem;
      line-height: 1.5;

      @media only screen and (max-width: 600px) {
        font-size: 1.1rem;
      }
    `,
    body: css`
      font-family: ${font};
      font-size: 1rem;
      line-height: 1.8;

      @media only screen and (max-width: 600px) {
        font-size: 0.9rem;
      }
    `,
    detail: css`
      font-family: ${font};
      font-size: 0.9rem;
      line-height: 1.2;

      @media only screen and (max-width: 600px) {
        font-size: 1rem;
      }
    `,
    small: css`
      font-family: ${font};
      font-size: 0.7rem;
      line-height: 1.2;

      @media only screen and (max-width: 600px) {
        font-size: 0.5rem;
      }
    `,
    action: css`
      font-family: ${font};
      font-size: 1rem;
      letter-spacing: 0.1rem;
      line-height: 1.4;

      @media only screen and (max-width: 600px) {
        font-size: 0.8rem;
      }
    `,
  },
  shadow: {
    light: '0 0.125rem 0.5rem rgba(0, 0, 0, 0.1)',
    default: '0 0.125rem 0.5rem rgba(0, 0, 0, 0.2)',
    strong: '0 0.125rem 0.5rem rgba(0, 0, 0, 0.5)',
    text: '3px 3px rgba(241, 89, 84, 1.0)',
  },
  borderRadius: {
    small: pxToRem(3),
    default: pxToRem(15),
    large: pxToRem(30),
  },
}

export type Theme = typeof theme
export type Color = keyof Theme['colors']
export type Spacing = keyof Theme['spacing']
export type Typography = keyof Theme['typography']

export default theme
