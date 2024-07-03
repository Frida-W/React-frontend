import * as React from 'react';
import styled from 'styled-components';

const StyledDividerRoot = styled.div<{ $withText: boolean; $dashed: boolean }>`
  margin: 1.2rem 0;
  position: relative;
  width: 100%;
  height: 1px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    height: 1px;
    width: ${(p) => (p.$withText ? '45%' : '50%')};
    border-top-width: 1px;
    border-color: #414c7e;
    border-style: ${(p) => (p.$dashed ? 'dashed' : 'solid')};
  }

  &::before {
    top: 50%;
    left: 0;
  }

  &::after {
    top: 50%;
    right: 0;
  }
`;

const StyledDividerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  color: #8d9cc3;
  padding: 7px;
  font-size: 0.6rem;
  transform: translate(-50%, -50%);
  text-transform: none;
  font-weight: 400;
  line-height: 0.6rem;
`;

type DividerProps = { dashed?: boolean } & React.HTMLProps<'div'>;

export const Divider = ({ children, dashed, className }: DividerProps) => {
  return (
    <StyledDividerRoot
      className={className}
      $withText={!!children}
      $dashed={!!dashed}
    >
      {children && <StyledDividerText>{children}</StyledDividerText>}
    </StyledDividerRoot>
  );
};
