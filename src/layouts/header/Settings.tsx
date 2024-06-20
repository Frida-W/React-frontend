import { Dialog } from '@/components/Dialog';
import { IconButton } from '@/components/IconButton';
import { ModalTrigger, Modal } from '@/components/Modal';
import { Slider } from '@/components/Slider';
import { Switch } from '@/components/Switch';
import { VolumeHighIcon } from '@/icons';
import { Cog8ToothIcon } from '@heroicons/react/16/solid';
import React from 'react';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import useSound from 'use-sound';
import dotSound from '@/assets/audio/dot.mp3';

const Settings = () => {
  const [volume, setVolume] = React.useState(50);
  const [hideSteamInfo, setHideSteamInfo] = React.useState(false);
  const { t } = useTranslation();
  const [play] = useSound(dotSound, {
    volume,
  });
  return (
    <div>
      <ModalTrigger
        trigger={
          <IconButton>
            <Cog8ToothIcon />
          </IconButton>
        }
        id="settings"
      >
        {() => (
          <Dialog>
            <div className="">
              <div className="mb-2 text-secondary text-[0.7rem] font-medium select-none">
                {t('settings.soundVolume')}
              </div>
              <div className="mt-5 flex gap-3">
                <VolumeHighIcon className="w-6 text-[#939dcf]" />
                <Slider
                  aria-label="Volume"
                  value={volume}
                  defaultValue={50}
                  onChange={(v: any) => {
                    setVolume(v);
                  }}
                  onChangeEnd={(v: any) => {
                    play();
                  }}
                />
              </div>
            </div>

            <div className="">
              <div className="mt-5 mb-2 text-secondary text-[0.7rem] font-medium select-none">
                {t('settings.hideSteamInfo')}
              </div>
              <div className="mt-4">
                <Switch
                  arial-label="hide-steam-info"
                  isSelected={hideSteamInfo}
                  onChange={setHideSteamInfo}
                >
                  {hideSteamInfo ? t('settings.hide') : t('settings.show')}
                </Switch>
              </div>
            </div>
          </Dialog>
        )}
      </ModalTrigger>
    </div>
  );
};

export default Settings;
