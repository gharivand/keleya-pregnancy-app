import {StyleSheet} from 'react-native';
import colors from './Colors';

const Layout = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  colSpaceBetween: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  colVCenter: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default Layout;
