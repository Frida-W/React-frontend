import type { SVGProps } from 'react';

export const BoxIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      {...props}
    >
      <path
        d="M17 5L9 1L1 5M17 5L9 9M17 5V15L9 19M9 9L1 5M9 9V19M1 5V15L9 19"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};
