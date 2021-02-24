import React from 'react'
import SectionTitle from './SectionTitle'
import SectionText from './SectionText'
import { mockups } from '../utils/mockups'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FourthSectionContainer = styled.section`
  width: 90%;
  position: relative;
  margin: 36rem auto 0 auto;
  text-align: center;

  img {
    max-width: 100%;
    margin-top: ${({ theme }) => theme.spacingXL};
  }
`

const FourthSection = ({ theme }) => (
  <FourthSectionContainer>
    <SectionTitle>
      A website that feels like an <span className="accent-color">app</span>
    </SectionTitle>

    <SectionText limitWidth>
      TRCKR is the ultimate app for you to track everything in your life. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </SectionText>

    <img src={mockups.fourthSection[theme]} alt="Notes and Tasks page" />
  </FourthSectionContainer>
)

FourthSection.propTypes = {
  theme: PropTypes.string.isRequired
}

export default FourthSection
