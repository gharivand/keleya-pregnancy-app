import {StyleSheet} from 'react-native';

const Layout = StyleSheet.create({
  fill: {
    flex: 1,
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
