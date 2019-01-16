import React from 'react'
import styled from 'styled-components'

const StyledLamp = styled.svg`
    width:25px;
    height:25px;
    fill: ${props => (props.isLight ? '#003aff' : 'black')};
`;

/* eslint-disable no-tabs, no-mixed-spaces-and-tabs */
export const LongLights = ({ isLight }) => (
  <StyledLamp
    version="1.1"
    id="Layer_1"
    viewBox="0 0 504.657 504.657"
    xmlSpace="preserve"
    isLight={isLight}
  >

    <g>
      <g>
        <g>
          <path
            d="M252.878,76.041c-82.315,0.059-159.82,27.824-207.201,75.063C15.796,180.9,0,215.959,0,252.488
      c0,96.709,113.437,175.725,252.861,176.128h0.017c3.693,0,7.16-3.072,8.234-6.606c33.951-111.322,33.868-228.914-0.235-340.035
      C259.802,78.458,256.554,76.049,252.878,76.041z"
          />
          <path
            d="M496.263,201.602H311.607c-4.633,0-8.393,3.76-8.393,8.393s3.76,8.393,8.393,8.393h184.656
      c4.633,0,8.393-3.76,8.393-8.393S500.896,201.602,496.263,201.602z"
          />
          <path
            d="M496.263,285.537H311.607c-4.633,0-8.393,3.76-8.393,8.393s3.76,8.393,8.393,8.393h184.656
      c4.633,0,8.393-3.76,8.393-8.393S500.896,285.537,496.263,285.537z"
          />
          <path
            d="M496.263,369.471H311.607c-4.633,0-8.393,3.76-8.393,8.393c0,4.633,3.76,8.393,8.393,8.393h184.656
      c4.633,0,8.393-3.76,8.393-8.393C504.657,373.232,500.896,369.471,496.263,369.471z"
          />
          <path
            d="M311.607,134.455h184.656c4.633,0,8.393-3.76,8.393-8.393s-3.76-8.393-8.393-8.393H311.607
      c-4.633,0-8.393,3.76-8.393,8.393S306.974,134.455,311.607,134.455z"
          />
        </g>
      </g>
    </g>

  </StyledLamp>
)
