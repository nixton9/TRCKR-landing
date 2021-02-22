import React from 'react'
import SectionTitle from './SectionTitle'
import ModuleContent from './ModuleContent'
import { mockups } from '../utils/mockups'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ThirdSectionContainer = styled.section`
  width: 90%;
  position: relative;
  margin: ${({ theme }) => theme.spacingXXL} auto 0 auto;

  .sectionTitle {
    text-align: center;
  }

  .modules-grid {
    margin-top: ${({ theme }) => theme.spacingL};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 12rem;
    padding: 0 30rem 0 9rem;
  }

  img {
    position: absolute;
    width: 45rem;
    right: -20rem;
    bottom: -23rem;
  }
`

const ThirdSection = ({ theme }) => (
  <ThirdSectionContainer>
    <SectionTitle>
      Track it <span className="accent-color">all</span>
    </SectionTitle>

    <div className="modules-grid">
      <ModuleContent title={'Notes'}>
        Notes are where you can do this and that and that and this sdks keep all
        like a pro.
      </ModuleContent>

      <ModuleContent title={'Tasks'}>
        Notes are where you can do this and that and that and this sdks keep all
        like a pro and this one is kind of bigger.
      </ModuleContent>

      <ModuleContent title={'Habits'}>
        Notes are where you can do this and that and that and this sdks keep all
        like a pro and this one will be even bigger than the other three texts
        that we have here on this page.
      </ModuleContent>

      <ModuleContent title={'Expenses'}>
        Notes are where you can do this and that and that and this sdks keep all
        like a pro.
      </ModuleContent>
    </div>
    <img src={mockups.habitsStats[theme]} alt="Habits Stats page" />
  </ThirdSectionContainer>
)

ThirdSection.propTypes = {
  theme: PropTypes.string.isRequired
}

export default ThirdSection