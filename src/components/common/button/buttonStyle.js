import { StyleSheet } from 'react-native';
import { WHITE } from '../../../constants/Colors';
import { widthScreen, heightScreen } from '../dimensions/dimensions';

const styles = StyleSheet.create({
  container: {
    width: widthScreen * 0.75,
    height: heightScreen * 0.075,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: WHITE,
    fontSize: heightScreen * 0.025,
    letterSpacing: 2
  }
});

export default styles;