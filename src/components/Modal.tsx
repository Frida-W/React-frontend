import React, { JSXElementConstructor, ReactElement } from 'react';
import { ModalType, useModalStore } from '@/store';
import {
  type AriaModalOverlayProps,
  Overlay,
  useModalOverlay,
  useOverlayTrigger,
} from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';
import type { OverlayTriggerProps } from '@react-types/overlays';
import { XMarkIcon } from '@/icons';
import { IconButton } from './IconButton';

type ModalProps = {
  children?: React.ReactNode;
  state: any;
} & AriaModalOverlayProps;
export const Modal = ({
  state, //是modal的状态，从trigger传来，由 useOverlayTriggerState 管理
  children,
  ...props //包含传递给 Modal 组件的所有额外属性
}: ModalProps) => {
  const ref = React.useRef(null); //null 作为初始值明确表示引用在组件首次渲染之前不指向任何 DOM 元素。这有助于在调试和逻辑判断时更清楚地了解引用的状态。
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref); //modalProps, underlayProps是modal和underlay的无障碍属性、样式和事件处理函数
  // 使用 ref 来获取模态框的 DOM 元素，并管理模态框打开时的焦点行为。例如，当模态框打开时，将焦点移动到模态框内部，确保键盘用户能够方便地与模态框交互。
  return (
    <Overlay>
      <div
        className="w-screen h-screen bg-[#151827f0] fixed z-[100] top-0 left-0 right-0 bottom-0 flex items-center justify-center animate-fade-in"
        {...underlayProps} // 是一个对象，包含了模态对话框背景所需的所有属性。这些属性通常包括处理点击背景关闭模态对话框的逻辑。
      >
        <div
          className="bg-[#333f70] w-full max-w-[480px] rounded-xl relative"
          {...modalProps} //是一个对象，包含了模态对话框本身所需的所有属性。这些属性包括 ARIA 属性和事件处理程序
          ref={ref} // ，将 ref 设在展开 modalProps 的地方是最佳实践。modalProps 包含了许多无障碍属性和事件处理逻辑，这些属性和逻辑通常需要访问模态框的实际 DOM 元素。通过 ref 可以在模态框元素上附加事件处理函数，
        >
          {children}
        </div>
      </div>
    </Overlay>
  );
};

type ModalTriggerProps = {
  trigger?: ReactElement<any, string | JSXElementConstructor<any>>;
  id?: ModalType;
  children: any;
  onClose?: () => void;
} & OverlayTriggerProps;
export const ModalTrigger = ({
  trigger,
  id,
  onClose,
  children,
  ...props
}: ModalTriggerProps) => {
  const state = useOverlayTriggerState(props); // 管理覆盖层（例如模态框、弹出菜单等）的状态。
  const { triggerProps, overlayProps } = useOverlayTrigger(
    //生成用于触发覆盖层的属性（props），这些属性确保触发器元素能够正确地与覆盖层交互。
    { type: 'dialog' }, // type: 'dialog' 表示模态对话框的形式，有其他形式，如菜单、提示框等
    state
  );
  const { showModal, setShowModal, clearModal } = useModalStore();

  const triggerWithProps = trigger // 如果有触发器，就克隆触发器并添加点击事件
    ? React.cloneElement(trigger, {
        ...triggerProps,
        onClick: triggerProps.onPress,
      })
    : null;

  React.useEffect(() => {
    if (state.isOpen && id) {
      // 如果模态对话框打开且有 id，就设置模态对话框的 id
      setShowModal(id);
    }
  }, [state.isOpen]);

  const closeButtonRef = React.useRef<HTMLButtonElement>(); // 为关闭按钮添加 ref

  React.useEffect(() => {
    closeButtonRef?.current &&
      closeButtonRef.current.addEventListener(
        //访问到绑定的DOM元素或组件实例。为关闭按钮添加 touchend 事件
        'touchend', // touchend 事件在用户手指触摸屏幕并抬起时触发
        (e: any) => {
          e.preventDefault();
        },
        { passive: false, once: true } //  和e.preventDefault();搭配的最佳时间写法，passive: false 表示不阻止preventDefault行为，once: true 表示只执行一次
      );
  }, [closeButtonRef?.current]);

  return (
    <>
      {triggerWithProps}
      {(id ? showModal === id : state.isOpen) && ( // 在没有特定 id 时简单地依赖 react-aria 的状态，而在处理具有唯一标识的多个模态时，则需要同步到全局状态。
        <Modal state={state}>
          <IconButton
            size="sm"
            className="!absolute right-2 top-2"
            onClick={() => {
              onClose && onClose();
              state.close();
              clearModal();
            }}
            ref={closeButtonRef}
          >
            <XMarkIcon />
          </IconButton>
          {children && React.cloneElement(children(state.close), overlayProps)}{' '}
        </Modal>
      )}
    </>
  );
};
