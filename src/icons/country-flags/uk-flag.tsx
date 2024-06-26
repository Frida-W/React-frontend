import { SVGProps } from 'react';

export const UkFlagIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_270_60788)">
        <rect width="20" height="15" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V15H20V0H0Z"
          fill="#3195F9"
        />
        <mask
          id="mask0_270_60788"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V15H20V0H0Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_270_60788)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 7.5V15H20V7.5H0Z"
            fill="#FECA00"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_270_60788">
          <rect width="20" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
