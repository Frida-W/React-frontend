import React from 'react';
import LanguageBar from './LanguageBar';
import Tag from './Tag';
import { ChatIcon, DiceIcon, PercentIcon, SwordsIcon } from '@/icons';
import { BriefcaseIcon, Cog8ToothIcon } from '@heroicons/react/24/solid';
// import { Logo } from '@/components/Logo';
import Login from './Auth/Login';
import xmaxHeaderBg from '@/assets/summer/header-bg-summer.png';
import { IconButton } from '@/components/IconButton';
import Settings from './Settings';

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
    <div className="relative flex items-center w-full py-6 px-3 lg:px-4 transition-all gap-3 sm:gap-4">
      {/* <Logo></Logo> */}
      <div
        className="absolute w-56 h-28 top-0 left-0 pointer-events-none"
        style={{
          background: `left/cover no-repeat url(${xmaxHeaderBg})`,
        }}
      />
      <div className="hidden lg:flex lg:w-auto lg:space-x-5">
        {tagValues.map((tag) => (
          <Tag key={tag.to} icon={tag.icon} to={tag.to} title={tag.title}></Tag>
        ))}
      </div>
      s
      <div className="flex ml-auto">
        <Login />
      </div>
      <div className="hidden lg:block">
        <LanguageBar />
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden lg:block">
          <IconButton to="">
            <ChatIcon className="text-[#67BE9A]" />
          </IconButton>
        </div>
        <div className="hidden lg:block">
          <Settings></Settings>
        </div>
        <div className="block lg:hidden">x</div>
      </div>
    </div>
  );
};

export default index;
