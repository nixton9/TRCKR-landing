import React from 'react'
import SectionTitle from './SectionTitle'
import SectionText from './SectionText'
import { mockups } from '../utils/mockups'
import { device } from '../styles/theme'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FourthSectionContainer = styled.section`
  width: 90%;
  margin: 39rem auto 0 auto;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: ${({ theme }) => theme.spacingL};

  .text {
    align-self: center;
    max-width: 65rem;

    h3 {
      font-size: 4.5rem;
      font-weight: ${({ theme }) => theme.fontBold};
    }

    .sectionText {
      margin-left: 1rem;
    }
  }

  img {
    max-width: 100%;
    width: 40rem;
    margin: 0 auto;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    margin: 33rem auto 0 auto;

    img {
      width: 33rem;
    }

    .text {
      max-width: 75rem;
      margin: 0 auto;
    }
  }
`

const FourthSection = ({ theme }) => (
  <FourthSectionContainer>
    {/*  <SectionTitle>
      A website that feels like an <span className="accent-color">app</span>
    </SectionTitle> */}

    <img src={mockups.fourthSection[theme]} alt="Notes and Tasks page" />

    <div className="text">
      <SectionTitle>
        Track it how <span className="accent-color">you</span> want to
      </SectionTitle>

      <SectionText>
        TRCKR is the ultimate app for you to track everything in your life.
        Lorem ipsum dolor sit amet, consectetur adipiscing. And it's also really
        cool since you can do this and that and that and this.
      </SectionText>
    </div>
  </FourthSectionContainer>
)

FourthSection.propTypes = {
  theme: PropTypes.string.isRequired
}

export default FourthSection
