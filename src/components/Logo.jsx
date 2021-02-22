import React from 'react'
import styled from 'styled-components/macro'

const LogoWrapper = styled.a`
  font-size: 3.5rem;
  font-weight: ${({ theme }) => theme.fontExtraBold};
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
`

export const Logo = () => (
  <LogoWrapper href="https://landing.trckrapp.com">
    Trc<span className="accent-color">k</span>r
  </LogoWrapper>
)
