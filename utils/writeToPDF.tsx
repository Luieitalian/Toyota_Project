import {TFunction} from 'i18next';
import {PermissionsAndroid} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const requestWritePermission = async (
  t: TFunction<'translation', undefined>
) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: t('hizlipos_requires_permission'),
        message: t('hizlipos_requires_write_external_storage_permission'),
        buttonNegative: t('cancel'),
        buttonPositive: t('ok'),
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('WRITE_EXTERNAL_STORAGE permission granted!');
    } else {
      console.log('WRITE_EXTERNAL_STORAGE permission denied!');
    }
  } catch (err) {
    console.warn(err);
  }
};

const writeToPDF = async (receipt_str: string) => {
  let options = {
    html: receipt_str,
    fileName: 'test',
    directory: 'Documents',
  };

  let file = await RNHTMLtoPDF.convert(options);
  console.log(file.filePath);
};

const usePDF = () => {
  return {requestWritePermission, writeToPDF};
};

export default usePDF;
