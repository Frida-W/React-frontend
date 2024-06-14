import { SVGProps } from 'react';

export const DeFlagIcon = (
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
      <g clipPath="url(#clip0_270_67746)">
        <g clipPath="url(#clip1_270_67746)">
          <rect width="20" height="15" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 10H20V15H0V10Z"
            fill="#FFD018"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 5H20V10H0V5Z"
            fill="#E31D1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H20V5H0V0Z"
            fill="#272727"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_270_67746">
          <rect width="20" height="15" rx="1.5" fill="white" />
        </clipPath>
        <clipPath id="clip1_270_67746">
          <rect width="20" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
