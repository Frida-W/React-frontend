import React from 'react';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type ModalType =
  | 'login'
  | 'withdrawal'
  | 'payment'
  | 'settings'
  | 'box-select'
  | 'result-trophy'
  | 'withdraw-referral-balance'
  | 'shop'
  | 'withdraw-shop-balance-modal'
  | 'maintenance'
  | 'set-password'
  | null;

export const useModalStore = create<{
  showModal: ModalType;
  showModalOptions?: {
    [key: string]: any;
  };
  setShowModal: (
    value: ModalType,
    options?: {
      [key: string]: any;
    }
  ) => void;
  clearModal: () => void;
}>()(
  devtools(
    (set) => ({
      showModal: null,
      showModalOptions: undefined,
      setShowModal: (
        value: ModalType,
        options?: {
          [key: string]: any;
        }
      ) => set(() => ({ showModal: value, showModalOptions: options })),
      clearModal: () => set({ showModal: null, showModalOptions: undefined }),
    }),
    {
      name: 'modal-storage',
    }
  )
);

export const useHideSteamInfo = create<{
  hideSteamInfo: boolean;
  setHideSteamInfo: (value: boolean) => void;
}>()(
  devtools(
    persist(
      (set) => ({
        hideSteamInfo: !!localStorage.getItem('hide-s-info'),
        setHideSteamInfo: (value: boolean) => {
          if (value) {
            localStorage.setItem('hide-s-info', '1');
          } else {
            localStorage.removeItem('hide-s-info');
          }
          set(() => ({ hideSteamInfo: value }));
        },
      }),
      {
        name: 'hideSteamInfo-storage',
      }
    )
  )
);
