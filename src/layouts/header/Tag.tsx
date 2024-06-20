import clsx from 'clsx';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

type TagProps = {
  icon?: React.ReactElement;
  title?: string;
} & LinkProps;
const Tag = ({ icon, title, to = '', ...props }: TagProps) => {
  return (
    <Link
      to={to}
      {...props}
      className={clsx(
        'relative flex items-center gap-2 transition-all duration-200 [&>svg]:text-secondary [&>svg]:transition-all [&>svg]:duration-200 [&>svg]:ease-out [&>svg]:hover:text-white'
        // [selected ? 'text-primary' : 'hover:text-white text-primary-light']
      )}
    >
      {icon && icon}
      <div className={clsx('capitalize text-xs font-black')}>{title}</div>
    </Link>
  );
};

export default Tag;
