import * as React from 'react';
import clsx from 'clsx';
import { SITE_NAME } from '@/shared';

type PageProps = {
  size?: 'sm' | 'lg';
  tabTitle?: string;
} & Omit<React.HTMLProps<HTMLDivElement>, 'size'>;

export const Page = ({
  size = 'lg',
  tabTitle,
  children,
  className,
}: PageProps) => {
  React.useEffect(() => {
    if (tabTitle) {
      document.title = `${tabTitle} - ${SITE_NAME}`;
    } else {
      document.title = SITE_NAME;
    }
  });

  return (
    <div
      className={clsx(
        'block w-full mx-auto px-1 pt-2 pb-10 sm:px-0 sm:pt-6 sm:pb-20',
        [size === 'sm' && 'max-w-[30rem]', size === 'lg' && 'max-w-[60rem]'],
        className
      )}
    >
      {children}
    </div>
  );
};
