import React, {memo} from 'react';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {
  Camera,
  Code,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import useBarcodeCameraStyle from './styles/useBarcodeCameraStyle';

export type BarcodeCameraProps = {
  closeCamera: () => void;
};

const BarcodeCamera = ({closeCamera}: any) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();

  const {styles} = useBarcodeCameraStyle(theme);

  const onCodeScanned = (codes: Code[]) => {
    console.log(`Scanned ${codes.length} codes!`);
    console.log(codes.at(0)?.value);
    closeCamera();
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13', 'ean-8'],
    onCodeScanned: onCodeScanned,
  });

  if (!hasPermission) requestPermission();
  if (device == null) return <></>;

  return (
    <Camera
      codeScanner={codeScanner}
      style={styles.camera}
      device={device}
      isActive={true}
    />
  );
};

export default memo(BarcodeCamera);
