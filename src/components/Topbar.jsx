import React from 'react'
import CTA from './CTA'
import { Logo } from './Logo'
import { ToggleButton } from './ToggleButton'
import { device } from '../styles/theme'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export const TopbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacingS};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundBlack};
  z-index: 11;

  .buttons {
    display: flex;
    align-items: center;

    .toggle-button {
      margin-right: ${({ theme }) => theme.spacingM};
    }
  }

  @media ${device.mobileS} {
    .buttons .toggle-button {
      margin-right: ${({ theme }) => theme.spacingS};
    }
  }
`

const Topbar = ({ theme, setTheme }) => {
  const handleCheck = checked => setTheme(checked ? 'dark' : 'light')

  return (
    <TopbarContainer>
      <Logo />
      <div className="buttons">
        <ToggleButton isChecked={theme === 'dark'} setIsChecked={handleCheck} />
        <CTA text={'Try it now'} />
      </div>
    </TopbarContainer>
  )
}

Topbar.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired
}

export default Topbar
