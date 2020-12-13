import React from 'react'

import Logo from 'components/Logos/Logo2021'
import { Subtitle, Title } from 'styles/typography'

const Diilikone = () => {
  return (
    <>
      <Title align="center" color="white" weight={900} shadow>
        Äpy 2019 julkaistaan 23.4. kello 19.00{' '}
        <a href="https://www.facebook.com/events/2284149608508832/">
          Äpy-Gaalassa
        </a>
      </Title>
      <Logo />
      <Subtitle align="center" color="white" weight={600} shadow>
        Äpyn painos on nyt loppuundiilattu ja myyjärekisteröinti on sulkeutunut.
        Saat Äpyn käsiisi myyjiltä julkaisun jälkeen. Nähdään gaalassa!
      </Subtitle>
    </>
  )
}

export default Diilikone
