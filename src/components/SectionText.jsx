import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SectionTextWrapper = styled.p`
  color: ${({ theme }) => theme.offWhite};
  font-size: 2.3rem;
  line-height: 4.5rem;
  font-weight: ${({ theme }) => theme.fontLight};
  margin-top: ${({ theme }) => theme.spacingM};

  &.limit-width {
    width: 85%;
    margin-right: auto;
    margin-left: auto;
  }
`
const SectionText = ({ children, limitWidth }) => (
  <SectionTextWrapper
    className={limitWidth ? 'sectionText limit-width' : 'sectionText'}
  >
    {children}
  </SectionTextWrapper>
)

SectionText.propTypes = {
  children: PropTypes.node.isRequired,
  limitWidth: PropTypes.bool
}

export default SectionText
