import {StyleSheet} from 'react-native';
import Colors from './Colors';

const FontSize = {
  tiny: 14,
  small: 16,
  regular: 20,
  large: 40,
};

const Fonts = StyleSheet.create({
  textTiny: {
    fontSize: FontSize.tiny,
    color: Colors.GREYISH_BROWN,
  },
  textSmall: {
    fontSize: FontSize.small,
    color: Colors.GREYISH_BROWN,
  },
  textRegular: {
    fontSize: FontSize.regular,
    color: Colors.GREYISH_BROWN,
  },
  textLarge: {
    fontSize: FontSize.large,
    color: Colors.GREYISH_BROWN,
  },
});

export default Fonts;
