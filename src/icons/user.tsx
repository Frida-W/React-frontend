import type { SVGProps } from 'react';

export const UserIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        background: 'linear-gradient(0deg, #445283 0%, #445283 100%)',
      }}
      {...props}
    >
      <path
        transform="matrix(1,0,0,1,0,1)"
        fill="#7F8FCA"
        d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5z"
      />
      <circle fill="#7F8FCA" cx="10" cy="7" r="4" />
    </svg>
  );
};
