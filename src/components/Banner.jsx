import React from 'react'
import CTA from './CTA'
import { mockups } from '../utils/mockups'
import { device } from '../styles/theme'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BannerContainer = styled.div`
  width: 90%;
  min-height: 60rem;
  margin: ${({ theme }) => theme.spacingXXL} auto 0 auto;
  background-color: ${({ theme }) => theme.accent};
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 50px;
  overflow: hidden;

  .content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .wrapper {
      transform: translateY(-1rem);

      h3 {
        color: ${({ theme }) => theme.alwaysWhite};
        font-size: 4.6rem;
        line-height: 7.2rem;
        font-weight: ${({ theme }) => theme.fontBold};
      }

      .buttons {
        margin-top: ${({ theme }) => theme.spacingL};

        .cta:nth-child(2) {
          margin-left: ${({ theme }) => theme.spacingS};
        }
      }
    }
  }

  .mockup {
    height: 100%;
    position: relative;

    img {
      width: 30rem;
      position: absolute;
      bottom: -9rem;
      left: 20%;
    }
  }

  @media ${device.laptopXS} {
    min-height: 50rem;
    grid-template-columns: 3fr 2fr;

    .content {
      padding-left: ${({ theme }) => theme.spacingS};
    }

    .mockup img {
      width: 27rem;
      left: 15%;
    }
  }
`

const Banner = ({ theme }) => (
  <BannerContainer>
    <div className="content">
      <div className="wrapper">
        <h3>
          Tracking made easy.
          <br />
          Sign up now.
        </h3>
        <div className="buttons">
          <CTA text={'Download the app'} className={'inverse'} />
          <CTA text={'Visit web app'} className={'ghost'} />
        </div>
      </div>
    </div>
    <div className="mockup">
      <img src={mockups.banner[theme]} alt="Signup page" />
    </div>
  </BannerContainer>
)

Banner.propTypes = {
  theme: PropTypes.string.isRequired
}

export default Banner
