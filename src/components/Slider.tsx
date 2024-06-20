import { SliderState, useSliderState } from 'react-stately';
import {
  AriaSliderProps,
  mergeProps,
  Orientation,
  useFocusRing,
  useNumberFormatter,
  useSlider,
  useSliderThumb,
  VisuallyHidden,
} from 'react-aria';
import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

const StyledTrack = styled.div<{
  width: string;
  $color: SliderColor;
  $multiple: boolean;
  $startPoint: string;
}>`
  &::before {
    content: attr(x);
    display: block;
    position: absolute;
    background: ${({ $color }) =>
      $color === 'green-dark' ? '#1a1d3c' : '#CD5752'};
  }
  &.horizontal:before {
    height: 8px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 3px;
  }
  &.vertical {
    width: 30px;
    height: 100%;
  }
  &.vertical:before {
    width: 8px;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    content: attr(x);
    display: block;
    position: absolute;
    background: #98e184;
    border-radius: 3px;
  }
  &.horizontal:after {
    height: 8px;
    width: ${(p) => p.width};
    top: 50%;
    transform: translateY(-50%);
    left: ${({ $startPoint }) => $startPoint};
  }
`;

type SliderColor = 'green-dark' | 'green-red';

type SliderProps = {
  formatOptions?: Intl.NumberFormatOptions;
  displayValueOnThumb?: boolean;
  color?: SliderColor;
  disabled?: boolean;
  multiple?: boolean;
} & AriaSliderProps;
export const Slider = ({
  displayValueOnThumb = false,
  color = 'green-dark',
  disabled,
  multiple = false,
  ...props
}: SliderProps) => {
  const trackRef = React.useRef(null);
  const numberFormatter = useNumberFormatter(props.formatOptions);
  const state = useSliderState({
    ...props,
    numberFormatter,
    isDisabled: disabled,
  });
  const { groupProps, trackProps, labelProps, outputProps } = useSlider(
    props,
    state,
    trackRef
  );
  const min = props.minValue ?? 0;
  const max = props.maxValue ?? 100;

  const getWidth = () => {
    const widthNumber = multiple
      ? (state.values[1] - state.values[0]) / (max - min)
      : (state.values[0] - min) / (max - min);

    return `${widthNumber * 100}%`;
  };

  const getStartPoint = () => {
    const startNumber = multiple ? (state.values[0] - min) / (max - min) : 0;
    return `${startNumber * 100}%`;
  };

  return (
    <div
      {...groupProps}
      className={clsx(
        'slider flex',
        state.orientation === 'horizontal' &&
          'flex-col w-full min-w-[4rem] [&>.track]:h-8 [&>.track]:w-full',
        state.orientation === 'vertical' && 'h-[10rem]',
        disabled && 'opacity-80'
      )}
    >
      {/* Create a container for the label and output element. */}
      {props.label && (
        <div className="label-container  flex justify-between">
          <label {...labelProps}>{props.label}</label>
          <output {...outputProps}>{state.getThumbValueLabel(0)}</output>
        </div>
      )}
      {/* The track element holds the visible track line and the thumb. */}

      <StyledTrack
        {...trackProps}
        ref={trackRef}
        className={clsx(
          'track cursor-pointer',
          state.isDisabled ? 'disabled' : '',
          state.orientation === 'horizontal' && 'horizontal',
          state.orientation === 'vertical' && 'vertical'
        )}
        width={getWidth()}
        $color={color}
        $multiple={multiple}
        $startPoint={getStartPoint()}
      >
        <Thumb
          index={0}
          state={state}
          trackRef={trackRef}
          orientation={state.orientation}
          displayValueOnThumb={displayValueOnThumb}
        />
        {multiple && (
          <Thumb
            index={1}
            state={state}
            trackRef={trackRef}
            orientation={state.orientation}
            displayValueOnThumb={displayValueOnThumb}
          />
        )}
      </StyledTrack>
    </div>
  );
};

function Thumb({
  ...props
}: {
  state: SliderState;
  trackRef: any;
  index: any;
  orientation: Orientation;
  displayValueOnThumb?: boolean;
}) {
  const { state, trackRef, index, orientation, displayValueOnThumb } = props;
  const inputRef = React.useRef(null);
  const { thumbProps, inputProps, isDragging } = useSliderThumb(
    {
      index,
      trackRef,
      inputRef,
    },
    state
  );

  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <div
      {...thumbProps}
      className={clsx(
        'thumb w-2.5 h-4 rounded bg-white z-[1] flex items-center justify-center',
        displayValueOnThumb && 'w-6 h-5 rounded-md',
        isFocusVisible ? 'bg-primary-light' : '',
        isDragging ? 'bg-secondary' : '',
        orientation === 'vertical' && 'left-1/2',
        orientation === 'horizontal' && 'top-1/2'
      )}
    >
      {displayValueOnThumb && (
        <div className="text-black-100 text-xs font-medium">{state.values}</div>
      )}
      <VisuallyHidden>
        <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
      </VisuallyHidden>
    </div>
  );
}
