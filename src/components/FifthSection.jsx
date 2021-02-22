import React from 'react'
import CTA from './CTA'
import styled from 'styled-components'

const FifthSectionContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 55rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.black};
  margin-top: ${({ theme }) => theme.spacingXL};

  h3 {
    color: ${({ theme }) => theme.white};
    font-weight: ${({ theme }) => theme.fontBold};
    font-size: 4.4rem;
    line-height: 6.7rem;
    margin-right: ${({ theme }) => theme.spacingXL};
  }

  .buttons {
    .cta:nth-child(2) {
      margin-left: ${({ theme }) => theme.spacingS};
    }
  }

  .footer {
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    color: ${({ theme }) => theme.offWhite};
    font-size: 1.3rem;
    text-align: center;
  }
`

const FifthSection = () => (
  <FifthSectionContainer>
    <h3>
      Start getting things <br />
      <span className="accent-color">done</span> today. Try it!
    </h3>
    <div className="buttons">
      <CTA text="Google Play" />
      <CTA text="Web App" className="ghost ghost-white" />
    </div>
    <p className="footer">Eduardo Araújo @copyright alta cena | 2021 | TRCKR</p>
  </FifthSectionContainer>
)

export default FifthSection
