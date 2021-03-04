import React from 'react'
import SectionTitle from './SectionTitle'
import SectionText from './SectionText'
import styled from 'styled-components'

const SecondSectionContainer = styled.section`
  width: 90%;
  margin: ${({ theme }) => theme.spacingXXXL} auto 0 auto;

  .sectionTitle,
  .sectionText {
    text-align: center;
  }

  .sectionText {
    line-height: 5.5rem;
  }
`

const SecondSection = () => (
  <SecondSectionContainer>
    <SectionTitle>
      The ultimate <span className="accent-color">tracking</span> tool
    </SectionTitle>
    <SectionText limitWidth>
      TRCKR is the ultimate app for you to track everything in your life. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip.
    </SectionText>
  </SecondSectionContainer>
)

export default SecondSection
