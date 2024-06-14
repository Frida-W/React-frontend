import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Hat from '@/assets/xmas-hat.png';
import { styled } from 'styled-components';

type LogoProps = {
  to?: LinkProps['to'];
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
  className?: string;
};

const StyledR = styled.div`
  height: 24px;
  width: 24px;
  transform: scale(0.89);
  margin: 1px 8px 0 0;
  clip-path: path(
    'M4.6928,0 L16.5351,0 C17.4487,0 18.3747,0.0295 19.2256,0.3625 C20.7178,0.9464 22.8775,2.4126 22.3527,5.9479 C21.4882,11.772 17.2894,11.4002 17.2894,11.4002 C17.2894,11.4002 18.7196,11.8768 19.1418,12.6394 C19.7593,13.7547 19.7593,15.3656 19.5741,17.1623 C19.3888,18.9591 20.0063,21.6853 20.0063,21.6853 L14.1789,21.6853 C14.1789,21.6853 14.2076,17.3482 14.2076,14.8699 C14.2076,14.0762 13.2487,13.7864 12.4731,13.6307 C10.6206,13.259 7.4097,13.6307 7.4097,13.6307 L5.8043,21.6853 L0,21.6853 L4.6928,0 Z M8.8398,2.9911 L7.4777,8.9733 L14.7421,8.9733 C14.7421,8.9733 17.5167,8.6884 17.9203,5.8398 C18.0643,4.823 17.5914,4.1288 17.0561,3.6805 C16.3239,3.0672 15.3166,2.9911 14.3615,2.9911 L8.8398,2.9911 Z'
  );
  background: linear-gradient(
    45deg,
    #fcbb4d,
    #f45494,
    #3262ce,
    rgba(252, 187, 77, 1) 23%,
    rgba(244, 84, 148, 1) 40%,
    rgba(200, 200, 200, 1) 68%
  );
  background-size: 400% 400%;
  animation: Gradient 8s ease-in infinite 2s;

  @keyframes Gradient {
    0% {
      background-position: 100% 50%;
    }
    50% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;

export const Logo = ({
  to = '',
  size = 'md',
  withText = false,
  className,
}: LogoProps) => {
  const Component = to ? Link : 'div';
  const { t } = useTranslation();
  return (
    <Component
      to={to}
      className={clsx(
        'flex flex-shrink-0 grow-0 items-center justify-center',
        className
      )}
    >
      <StyledR />

      {withText && (
        <div className="-mx-2">
          <svg
            className={clsx([
              size === 'sm' && 'w-12',
              size === 'md' && 'w-[4rem]',
              size === 'lg' && 'w-24',
            ])}
            viewBox="0 0 72 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.751 17.276C4.761 17.276 2.24633 16.3867 0.207 14.608L2.691 11.641C4.33167 12.929 6.072 13.573 7.912 13.573C9.154 13.573 9.775 13.205 9.775 12.469V12.423C9.775 12.0703 9.591 11.7943 9.223 11.595C8.855 11.3803 8.12667 11.135 7.038 10.859C6.05667 10.629 5.25167 10.4067 4.623 10.192C3.99433 9.97733 3.37333 9.686 2.76 9.318C2.14667 8.93467 1.69433 8.45933 1.403 7.892C1.11167 7.30933 0.966 6.61933 0.966 5.822V5.776C0.966 4.24267 1.52567 3.00067 2.645 2.05C3.77967 1.09933 5.29767 0.624 7.199 0.624C9.83633 0.624 12.0443 1.337 13.823 2.763L11.592 5.914C10.1507 4.856 8.648 4.327 7.084 4.327C6.01067 4.327 5.474 4.672 5.474 5.362V5.408C5.474 5.776 5.66567 6.075 6.049 6.305C6.43233 6.51967 7.176 6.742 8.28 6.972C10.2887 7.41667 11.7837 8.01467 12.765 8.766C13.7617 9.502 14.26 10.5753 14.26 11.986V12.032C14.26 13.6573 13.6697 14.9377 12.489 15.873C11.3083 16.8083 9.729 17.276 7.751 17.276ZM16.4299 17V0.899999H20.8919V7.432L26.4349 0.899999H31.7249L25.6299 7.8L31.9319 17H26.5959L22.5249 11.02L20.8919 12.814V17H16.4299ZM33.3457 17V0.899999H37.8077V17H33.3457ZM40.7551 17V0.899999H44.9181L51.5421 9.41V0.899999H55.9581V17H52.0711L45.1711 8.168V17H40.7551ZM65.1387 17.276C62.1487 17.276 59.634 16.3867 57.5947 14.608L60.0787 11.641C61.7194 12.929 63.4597 13.573 65.2997 13.573C66.5417 13.573 67.1627 13.205 67.1627 12.469V12.423C67.1627 12.0703 66.9787 11.7943 66.6107 11.595C66.2427 11.3803 65.5144 11.135 64.4257 10.859C63.4444 10.629 62.6394 10.4067 62.0107 10.192C61.382 9.97733 60.761 9.686 60.1477 9.318C59.5344 8.93467 59.082 8.45933 58.7907 7.892C58.4994 7.30933 58.3537 6.61933 58.3537 5.822V5.776C58.3537 4.24267 58.9134 3.00067 60.0327 2.05C61.1674 1.09933 62.6854 0.624 64.5867 0.624C67.224 0.624 69.432 1.337 71.2107 2.763L68.9797 5.914C67.5384 4.856 66.0357 4.327 64.4717 4.327C63.3984 4.327 62.8617 4.672 62.8617 5.362V5.408C62.8617 5.776 63.0534 6.075 63.4367 6.305C63.82 6.51967 64.5637 6.742 65.6677 6.972C67.6764 7.41667 69.1714 8.01467 70.1527 8.766C71.1494 9.502 71.6477 10.5753 71.6477 11.986V12.032C71.6477 13.6573 71.0574 14.9377 69.8767 15.873C68.696 16.8083 67.1167 17.276 65.1387 17.276Z"
              fill="white"
            />
          </svg>

          {/* <span className="absolute text-2xs right-0 -bottom-[4px] opacity-25">
            {t('logo.beta')}
          </span> */}

          {/* <Image
            src={Hat}
            className="absolute w-[26px] h-[20px] text-2xs -top-[2px] left-[8px] z-50 drop-shadow-[1.5px_1.5px_0px_rgba(18,24,46,0.3)]"
          /> */}
        </div>
      )}
    </Component>
  );
};
