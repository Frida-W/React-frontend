import type { SVGProps } from 'react';

export const CircleArrowRightIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 59 59"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle opacity="0.2" cx="29.5" cy="29.5" r="29.5" fill="white" />
      <g opacity="0.7">
        <rect x="19" y="26" width="12" height="7" rx="1" fill="white" />
        <path
          d="M39.2929 30.2071L31.2071 38.2929C30.5771 38.9229 29.5 38.4767 29.5 37.5858V21.4142C29.5 20.5233 30.5771 20.0771 31.2071 20.7071L39.2929 28.7929C39.6834 29.1834 39.6834 29.8166 39.2929 30.2071Z"
          fill="white"
        />
      </g>
    </svg>
  );
};
