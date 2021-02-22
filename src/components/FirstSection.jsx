import React from 'react'
import CTA from './CTA'
import SectionTitle from './SectionTitle'
import SectionText from './SectionText'
import { mockups } from '../utils/mockups'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FirstSectionContainer = styled.section`
  width: 90%;
  margin: ${({ theme }) => theme.spacingXXL} auto 0 auto;
  max-width: 130rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ theme }) => theme.spacingM};
  align-items: center;

  .text {
    transform: translateY(-8rem);

    .sectionText {
      margin-top: ${({ theme }) => theme.spacingS};
    }

    .cta {
      display: inline-block;
      margin-top: ${({ theme }) => theme.spacingM};
    }
  }

  img {
    max-width: 100%;
  }
`

const FirstSection = ({ theme }) => (
  <FirstSectionContainer>
    <div className="text">
      <SectionTitle>
        Organization <br />
        made <span className="accent-color">easy</span>.
      </SectionTitle>
      <SectionText>
        Keeping track of everything doesn't have to be hard. Find out how.
      </SectionText>
      <CTA text={'Open App'} />
    </div>
    <img src={mockups.homeAndHabits[theme]} alt="Home and habits page" />
  </FirstSectionContainer>
)

FirstSection.propTypes = {
  theme: PropTypes.string.isRequired
}

export default FirstSection
