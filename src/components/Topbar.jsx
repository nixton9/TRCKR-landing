import React from 'react'
import CTA from './CTA'
import { Logo } from './Logo'
import styled from 'styled-components/macro'

export const TopbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 95%;
  padding: ${({ theme }) => theme.spacingS};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundBlack};
  z-index: 11;
`

export const Topbar = () => (
  <TopbarContainer>
    <Logo />
    <CTA text={'Try it now'} />
  </TopbarContainer>
)
