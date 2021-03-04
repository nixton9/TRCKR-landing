import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CTAWrapper = styled.a`
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.alwaysWhite};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontExtraBold};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-transform: uppercase;
  padding: ${({ theme }) => theme.spacingXS} ${({ theme }) => theme.spacingS};
  letter-spacing: 0.03rem;
  box-shadow: 0 10px 26px rgb(125, 65, 255, 0.46);

  &.inverse {
    background-color: ${({ theme }) => theme.alwaysWhite};
    color: ${({ theme }) => theme.accent};
    box-shadow: none;
  }

  &.ghost {
    background-color: transparent;
    box-shadow: none;
  }

  &.ghost-white {
    color: ${({ theme }) => theme.white};
    border: 4px solid ${({ theme }) => theme.white};
    padding: 1.2rem 3rem;
    box-shadow: none;
  }
`
const CTA = ({ text, className }) => (
  <CTAWrapper
    href="https://trckrapp.com"
    className={className ? `${className} cta` : 'cta'}
  >
    {text}
  </CTAWrapper>
)

CTA.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default CTA
