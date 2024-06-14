import React from 'react';
import LanguageBar from './LanguageBar';
import AuthButton from './Auth/AuthButton';
import Tag from './Tag';
import { DiceIcon, PercentIcon, SwordsIcon } from '@/icons';
import { BriefcaseIcon } from '@heroicons/react/24/solid';
import { Logo } from '@/Components/Logo';

const tagValues = [
  {
    icon: <SwordsIcon className="w-5 h-5" />,
    title: 'Battle',
    to: '/battle',
  },
  {
    icon: <DiceIcon className="w-5 h-5" />,
    title: 'Roll',
    to: '/roll',
  },
  {
    icon: <PercentIcon className="w-5 h-5" />,
    title: 'Percent',
    to: '/percent',
  },
  {
    icon: <BriefcaseIcon className="w-5 h-5" />,
    title: 'Partnership',
    to: '/partnership',
  },
];

const index = () => {
  return (
    <div className="">
      <div className="flex flex-row items-center">
        <Logo></Logo>
        <div className="flex flex-row items-center">
          {tagValues.map((tag) => (
            <Tag
              key={tag.to}
              icon={tag.icon}
              title={tag.title}
              to={tag.to}
            ></Tag>
          ))}
        </div>
        <AuthButton></AuthButton>
        <LanguageBar></LanguageBar>
        <div>setting</div>
      </div>
    </div>
  );
};

export default index;
