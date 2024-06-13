import NfcManager, {NfcTech} from 'react-native-nfc-manager';

const useNFC = () => {
  async function readNdef() {
    try {
      if (!(await NfcManager.isSupported())) {
        return;
      }
      NfcManager.start();
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag?.ndefMessage);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }
  return readNdef;
};

export default useNFC;
