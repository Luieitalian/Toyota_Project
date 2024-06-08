# `useNFC` Hook Documentation

## Overview

The `useNFC` hook is a custom React hook used in the HızlıPos React Native application to read NFC (Near Field Communication) tags. It utilizes the `react-native-nfc-manager` library to interact with the device's NFC capabilities.

## Dependencies

- `react-native-nfc-manager`

## Hook Definition

```js
import NfcManager, {NfcTech} from 'react-native-nfc-manager';

NfcManager.start();

const useNFC = () => {
  async function readNdef() {
    try {
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
```

## Usage

### Returns

- `readNdef`: A function that initiates the process of reading an NFC tag. It logs the NDEF message of the tag if successful.
