import { clsx } from 'clsx';
import React from 'react';
import { useButton } from 'react-aria';
import { Link, LinkProps } from 'react-router-dom';

type IconButtonProps<C extends React.ElementType> = {
  color?: 'primary';
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg';
  to?: LinkProps['to'];
  as?: C;
  clean?: boolean;
  loading?: boolean;
} & Omit<React.ComponentPropsWithoutRef<C>, 'size' | 'to' | 'prefix'>;

export const IconButton = React.forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      size = 'sm',
      color = 'primary',
      children,
      className,
      to = '',
      clean = false,
      onClick,
      onPress,
      disabled,
      loading,
      ...props
    }: IconButtonProps<C>,
    forwardedRef: any
  ) => {
    const Component = to ? Link : 'button';
    const { buttonProps, isPressed } = useButton(
      {
        ...props,
        onPress: onClick ? onClick : onPress,
        elementType: Component,
        isDisabled: disabled || loading,
      },
      forwardedRef
    );

    return (
      <Component
        className={clsx(
          'flex items-center justify-center rounded-lg transition-all ',
          [
            color === 'primary' &&
              'bg-white bg-opacity-10 hover:bg-opacity-30 ',
          ],
          [
            size === '2xs' && 'w-4 h-4 text-2xs p-0.5 [&>svg]:w-3 [&>svg]:h-3',
            size === 'xs' && 'w-6 h-6 text-xs p-1 [&>svg]:w-4 [&>svg]:h-4',
            size === 'sm' && 'w-9 h-9 text-xs p-2 [&>svg]:w-4 [&>svg]:h-4',
            size === 'md' && 'w-11 h-11 text-sm p-2 [&>svg]:w-5 [&>svg]:h-5',
            size === 'lg' && 'w-12 h-12 text-base p-2 [&>svg]:w-6 [&>svg]:h-6',
          ]
        )}
        to={to}
        onClick={onClick as any}
        {...(buttonProps as any)}
        ref={forwardedRef}
      >
        {children}
      </Component>
    );
  }
);
