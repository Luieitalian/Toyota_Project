import {Vibration} from 'react-native';

export function vibrate(seconds: number) {
  Vibration.vibrate(seconds * 1000, false);
}
