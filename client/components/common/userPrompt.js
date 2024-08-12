// promptUtils.js
import { Alert } from 'react-native';

export const showYesNoPrompt = (title, message) => {
  return new Promise((resolve) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: 'No',
          onPress: () => resolve(false),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => resolve(true),
        },
      ],
      { cancelable: false }
    );
  });
};
