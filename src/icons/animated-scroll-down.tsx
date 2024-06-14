import type { SVGProps } from 'react';
import styled from 'styled-components';

const StyledWheel = styled.path`
  animation: scroll ease 1.5s infinite;

  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(100px);
    }
  }
`;

export const AnimatedScrollDownIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="currentColor"
      viewBox="0 0 247 390"
      {...props}
    >
      <StyledWheel
        id="wheel"
        d="M123.359,79.775l0,72.843"
        stroke="currentColor"
        strokeWidth="20px"
        fill="none"
      />
      <path
        id="mouse"
        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
        stroke="currentColor"
        strokeWidth="20px"
        fill="none"
      />
    </svg>
  );
};
