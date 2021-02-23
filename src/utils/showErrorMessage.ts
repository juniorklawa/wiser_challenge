import {showMessage} from 'react-native-flash-message';
import appTheme from '../theme/appTheme';

const showErrorMessage = (description: string) => {
  return showMessage({
    message: 'Ops!',
    description,
    type: 'danger',
    titleStyle: {fontFamily: appTheme.font.semiBold},
    textStyle: {fontFamily: appTheme.font.regular},
  });
};

export default showErrorMessage;
