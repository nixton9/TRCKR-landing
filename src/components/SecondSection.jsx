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
      TRCKR helps you keep everything in place - your notes, tasks, expenses and
      habits - all in one place! Organizing your stuff and following your
      progress has never been easier, helping you to stay productive. TRCKR's
      notifications will remind you of your tasks for each day and will make
      sure you keep focused on following your habits. Scroll down to find out
      more about the app.
    </SectionText>
  </SecondSectionContainer>
)

export default SecondSection
