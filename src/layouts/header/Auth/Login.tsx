import { Button } from '@/components/Button.tsx';
import { Dialog } from '@/components/Dialog.tsx';
import { ModalTrigger } from '@/components/Modal';
import React, { useState } from 'react';
import { GOOGLE_LOGIN_URL } from '@/services';
import { Divider } from '@/components/Divider.tsx';
import TextField from '@/components/TextField.tsx';

const Authorization = () => {
  const googleLogin = () => window.location.assign(GOOGLE_LOGIN_URL);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  return (
    <div>
      <ModalTrigger trigger={<Button>Authorization</Button>} id="login">
        {() => (
          <Dialog title="Welcome back">
            <p>Log in to your account and see what's new.</p>
            <div className="flex flex-col gap-2">
              <Button>Login with steam</Button>
              <Button onClick={googleLogin}>Login with Google</Button>
            </div>

            <Divider>or</Divider>
            <div className="flex items-center">
              <TextField></TextField>
              <Button></Button>
            </div>
          </Dialog>
        )}
      </ModalTrigger>
    </div>
  );
};

export default Authorization;
