import { Global, css } from '@emotion/react'

import MontserratBlack from 'public/fonts/2021/montserrat-black.woff2'
import MontserratBold from 'public/fonts/2021/montserrat-bold.woff2'
import MontserratRegular from 'public/fonts/2021/montserrat-regular.woff2'
import LibreBaskervilleRegular from 'public/fonts/ajaton/librebaskerville-regular.woff2'

const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Libre Baskerville';
        font-style: normal;
        font-weight: normal;
        src: url(${LibreBaskervilleRegular}) format('woff2');
      }

      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: normal;
        src: url(${MontserratRegular}) format('woff2');
      }

      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        src: url(${MontserratBold}) format('woff2');
      }

      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        src: url(${MontserratBlack}) format('woff2');
      }

      html,
      body {
        font-family: ${process.env.THEME === 'ajaton'
          ? 'Libre Baskerville'
          : 'Montserrat'};
      }
    `}
  />
)

export default Fonts
