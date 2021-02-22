import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SectionTextWrapper = styled.p`
  color: ${({ theme }) => theme.offWhite};
  font-size: 2.3rem;
  line-height: 4.5rem;
  font-weight: ${({ theme }) => theme.fontLight};
  margin-top: ${({ theme }) => theme.spacingM};
`
const SectionText = ({ children }) => (
  <SectionTextWrapper className="sectionText">{children}</SectionTextWrapper>
)

SectionText.propTypes = {
  children: PropTypes.node.isRequired
}

export default SectionText
