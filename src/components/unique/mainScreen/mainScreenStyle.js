import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR } from '../../../constants/Colors';
import { heightScreen } from '../../common/dimensions/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: BACKGROUND_COLOR,
    paddingVertical: heightScreen * 0.1
  }
});

export default styles;