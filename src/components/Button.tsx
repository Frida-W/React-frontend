import { ButtonColor } from '@/styles';
import { clsx } from 'clsx';
import React, { useRef } from 'react';
import { useButton } from 'react-aria';
import { Link } from 'react-router-dom';

type ButtonProps<C extends React.ElementType> = {
  color?: ButtonColor;
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  loading?: boolean;
  to?: string;
  text?: boolean;
  link?: boolean;
  onClick?: () => void;
  onPress?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<C>, 'size' | 'to' | 'prefix'>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps<any>>(
  <C extends React.ElementType = 'button'>(
    {
      color = 'primary',
      size = 'md',
      to = '',
      prefix,
      suffix,
      text,
      link,
      onClick,
      onPress,
      loading,
      disabled = false,
      children,
      className,
      ...props
    }: ButtonProps<C>, // React.forwardRef((props, ref)=>{return})
    forwardedRef: any
  ) => {
    const Component = to ? Link : 'button';
    const { buttonProps, isPressed } = useButton(
      {
        ...props,
        onPress: onClick ?? onPress,
        elementType: Component,
        isDisabled: disabled,
      },
      forwardedRef
    );

    return (
      <Component
        className={clsx(
          'relative whitespace-nowrap leading-4 normal-case outline-0 select-none inline-flex items-center justify-center gap-2 transition-all',
          [
            size === 'xs' && 'h-[1.8rem] text-3xs px-2 rounded-md',
            size === 'sm' && 'h-8 text-xs px-3 rounded-md',
            size === 'md' && 'h-10 text-sm px-4 rounded-lg',
            size === 'lg' && 'h-12 text-sm px-5 rounded-lg',
            size === 'xl' && 'h-16 text-sm px-7 rounded-lg',
          ],
          text && [
            color === 'gold' && 'text-gold',
            color === 'blue' && 'text-blue-400',
            color === 'primary' && 'hover:text-gray-300',
            color === 'red' && 'text-red-400 hover:text-red-300',
            color === 'gray' && 'text-gray-400 hover:text-gray-300',
          ],
          text &&
            !disabled &&
            !loading && [color === 'gold' && 'hover:text-gold2'],
          !text && [
            color === 'primary' &&
              'bg-green-100 text-black-100 disabled:bg-[#458786] disabled:text-[#2a4a62]',
            color === 'blue' &&
              'bg-[#5d7ef2] text-white disabled:bg-[#3f5195] disabled:text-[#607abd]',
            color === 'green' &&
              'bg-green-200 text-black-100 disabled:opacity-75 disabled:bg-green-100 disabled:text-gray-600',
            color === 'darkgreen' && 'bg-[#2C3D54] text-[#83D1B4]',
            color === 'gray' && 'bg-[#707aa7] text-[#f6f8ff]',
            color === 'darkgray' && 'bg-[#3a4268] text-[#bebfd6]',
            color === 'pink' && 'bg-[#ffbfb1cc] text-[#292149]',
            color === 'red' &&
              'bg-[#ff5732cc] text-[#f6f8ff] disabled:brightness-75',
            color === 'white' && 'bg-[#ededed] text-[#292149]',
            color === 'gold' && 'bg-gold text-[#292149] disabled:opacity-75',
            color === 'purple' &&
              'bg-[#8376d2] text-white disabled:bg-[#4e4589] disabled:text-[#607abd]',
            color === 'black' && 'bg-[#171a21] text-white',
          ],
          !text &&
            !disabled &&
            !loading && [
              color === 'primary' && 'hover:bg-[#89e5ca] hover:text-[#435e78]',
              color === 'blue' && 'hover:bg-[#708fff]',
              color === 'green' && 'hover:bg-[#8af29b] hover:text-[#457859]',
              color === 'darkgreen' && 'hover:opacity-75',
              color === 'gray' && 'hover:bg-[#606a96] hover:text-[#d6dbf2]',
              color === 'darkgray' && 'hover:bg-[#3f4872] hover:text-[#c7c8dc]',
              color === 'pink' && 'hover:bg-[#ffbfb1]',
              color === 'red' && 'hover:bg-[#ff7454]',
              color === 'white' && 'hover:bg-[#ffffffb3]',
              color === 'gold' && 'hover:bg-gold2',
              color === 'purple' && 'hover:bg-[#9f93e6]',
              color === 'black' && 'hover:bg-[#1f232c]',
            ],
          link
            ? 'font-normal underline underline-offset-4 !px-0'
            : 'font-semibold',
          className
        )}
        {...(buttonProps as any)}
        to={to}
        ref={forwardedRef}
        onClick={onClick}
      >
        <div
          className={clsx(
            'w-full h-full flex items-center justify-center',
            loading && 'opacity-0'
          )}
        >
          {children}
        </div>
      </Component>
    );
  }
);
Button.displayName = 'Button';
//支持高阶组件（HOC）：当使用高阶组件时，包装后的组件名称通常会变得不直观。通过显式设置 displayName，可以使得调试信息更具可读性。
