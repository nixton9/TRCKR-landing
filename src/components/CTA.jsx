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

  &.inverse {
    background-color: ${({ theme }) => theme.alwaysWhite};
    color: ${({ theme }) => theme.accent};
  }

  &.ghost {
    background-color: transparent;
  }

  &.ghost-white {
    color: ${({ theme }) => theme.white};
    border: 4px solid ${({ theme }) => theme.white};
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
