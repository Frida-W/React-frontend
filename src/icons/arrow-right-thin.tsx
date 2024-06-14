import type { SVGProps } from 'react';

export const ArrowRightThinIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.23429 2.63434C8.54671 2.32192 9.05324 2.32192 9.36566 2.63434L14.1657 7.43434C14.4781 7.74676 14.4781 8.25329 14.1657 8.56571L9.36566 13.3657C9.05324 13.6781 8.54671 13.6781 8.23429 13.3657C7.92187 13.0533 7.92187 12.5468 8.23429 12.2343L11.6686 8.80002L2.39998 8.80003C1.95815 8.80002 1.59998 8.44185 1.59998 8.00002C1.59998 7.5582 1.95815 7.20002 2.39998 7.20002H11.6686L8.23429 3.76571C7.92187 3.45329 7.92187 2.94676 8.23429 2.63434Z"
        fill="white"
      />
    </svg>
  );
};
