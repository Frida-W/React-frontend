import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

type TagProps = {
  icon?: React.ReactElement;
  title?: string;
} & LinkProps;
const Tag = ({ icon, title, to = '', ...props }: TagProps) => {
  return (
    <Link to={to} {...props} className="flex items-center gap-2">
      <div className="">{icon}</div>
      <div>{title}</div>
    </Link>
  );
};

export default Tag;
