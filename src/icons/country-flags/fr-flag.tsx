import { SVGProps } from 'react';

export const FrFlagIcon = (
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
            d="M14 0H20V15H14V0Z"
            fill="#F50100"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H7V15H0V0Z"
            fill="#2E42A5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 0H14V15H6V0Z"
            fill="#F7FCFF"
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
