import * as React from 'react';
import clsx from 'clsx';
import type { AriaDialogProps } from 'react-aria';
import { useDialog } from 'react-aria';
import { styled } from 'styled-components';
import icon from '@/assets/withdrawal/danger.webp';
// import { Image } from '@/components';

const StyledIcon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 4.8rem;
  height: 4.8rem;
  margin: 0.7rem;
  background-image: linear-gradient(
    180deg,
    rgba(87, 71, 52, 0.5) 19.05%,
    rgba(123, 97, 47, 0.5) 100%
  );
  border-radius: 4.8rem;
  color: #7d92ff;
  font-size: 3.2rem;
  line-height: 4.8rem;
`;

interface DialogProps extends AriaDialogProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  guardModal?: boolean;
}

export function Dialog({
  title,
  children,
  description,
  className,
  guardModal = false,
  ...props
}: DialogProps) {
  const ref = React.useRef(null);
  const { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div
      className={clsx(
        '',
        guardModal ? 'px-4 sm:px-7 pt-10 pb-8' : 'p-4 sm:p-7',
        className
      )}
      {...dialogProps}
      ref={ref}
    >
      {guardModal && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-14">
          <StyledIcon>{/* <Image src={icon} alt="" /> */}</StyledIcon>
        </div>
      )}

      {title && (
        <h3 className="mb-1 text-lg font-semibold text-center" {...titleProps}>
          {title}
        </h3>
      )}

      {description && (
        <h4
          className="mb-0.5 text-[0.55rem] text-center text-[#8d9cc4] leading-3"
          {...titleProps}
        >
          {description}
        </h4>
      )}

      {children}
    </div>
  );
}
