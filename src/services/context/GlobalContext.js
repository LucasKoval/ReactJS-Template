import React, { useState, createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { BodyContainer } from '../../styles/globalStyles'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children, themeStyle, setThemeStyle }) => {
  const [sidebarMenu, setSidebarMenu] = useState(false)

  const openMenu = () => setSidebarMenu(true)
  const closeMenu = () => setSidebarMenu(false)

  const values = { themeStyle, setThemeStyle, sidebarMenu, openMenu, closeMenu }

  return (
    <GlobalContext.Provider value={values}>
      <ThemeProvider theme={theme}>
        <BodyContainer className="BodyContainer">
          <Header />
          {children}
          <Footer />
        </BodyContainer>
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}
