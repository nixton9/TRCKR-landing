import React, { useState } from 'react'
import Topbar from '../components/Topbar'
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import FourthSection from '../components/FourthSection'
import FifthSection from '../components/FifthSection'
import Banner from '../components/Banner'
import { darkTheme, lightTheme } from '../styles/theme'
import { GlobalStyle } from '../styles/globalStyles'
import { ThemeProvider } from 'styled-components'

const IndexPage = () => {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <main>
        <Topbar theme={theme} setTheme={setTheme} />
        <FirstSection theme={theme} />
        <SecondSection />
        <Banner theme={theme} />
        <ThirdSection theme={theme} />
        <FourthSection theme={theme} />
      </main>
      <FifthSection />
    </ThemeProvider>
  )
}

export default IndexPage
