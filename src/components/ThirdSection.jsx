import React from 'react'
import SectionTitle from './SectionTitle'
import ModuleContent from './ModuleContent'
import { mockups } from '../utils/mockups'
import { device } from '../styles/theme'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ThirdSectionContainer = styled.section`
  width: 90%;
  position: relative;
  margin: ${({ theme }) => theme.spacingXXXL} auto 0 auto;

  .sectionTitle {
    text-align: center;
  }

  .modules-grid {
    margin-top: ${({ theme }) => theme.spacingXL};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 12rem;
    max-width: 185rem;
    padding: 0 30rem 0 9rem;

    @media ${device.laptop} {
      grid-gap: 9rem 12rem;
    }

    @media ${device.laptopXS} {
      padding: 0 18rem 0 9rem;
    }
  }

  img {
    position: absolute;
    right: -13vw;
    bottom: -25rem;
    width: 40rem;

    @media ${device.laptop} {
      width: 30rem;
      bottom: -26rem;
    }

    @media ${device.laptopXS} {
      right: -17vw;
    }
  }

  @media ${device.tablet} {
    .modules-grid {
      padding: 0;
      width: 90%;
      margin: ${({ theme }) => theme.spacingXL} auto 0 auto;
    }

    img {
      display: none;
    }
  }

  @media ${device.mobileL} {
    .modules-grid {
      grid-template-columns: 1fr;
      grid-gap: 9rem;
    }
  }
`

const ThirdSection = ({ theme }) => (
  <ThirdSectionContainer>
    <SectionTitle>
      Track it <span className="accent-color">all</span>
    </SectionTitle>

    <div className="modules-grid">
      <ModuleContent title={'Notes'}>
        Capture all your ideas and take notes of everything you need. Organize
        your notes using tags so you can easily filter and find them. Notes can
        be fully customizable with different ways of formatting.
      </ModuleContent>

      <ModuleContent title={'Tasks'}>
        Your ultimate todo list! Add tasks for anything that you want to get
        done, give them a due date, organize them in appropriate inboxes and get
        things done!
      </ModuleContent>

      <ModuleContent title={'Habits'}>
        Want to develop a new habit? Easy! Just add it in here, and everyday
        mark that habit as done or not done for the day. TRCKR will then display
        some statistics on all your habits so you can track your progress.
      </ModuleContent>

      <ModuleContent title={'Expenses'}>
        Tracking your expenses as never been easier - just add any expenses on
        the app and associate them with your own categories. After a while,
        you’ll be able to see detailed statistics on your spendings.
      </ModuleContent>
    </div>
    <img src={mockups.thirdSection[theme]} alt="Habits Stats page" />
  </ThirdSectionContainer>
)

ThirdSection.propTypes = {
  theme: PropTypes.string.isRequired
}

export default ThirdSection
