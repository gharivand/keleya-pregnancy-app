import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {colors, fonts} from '../theme';

interface IProps {
  title: string;
  disabled?: boolean;
  isLinear?: boolean;
  isSmallSize?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const Button: React.FC<IProps> = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onPress}
      style={[
        styles.container,
        props.disabled && styles.disabled,
        props.isLinear && styles.linear,
      ]}>
      <Text
        style={[
          styles.title,
          props.isLinear && styles.linearTitle,
          props.isSmallSize && styles.smallTitle,
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PALE_TEAL,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 40,
  },
  linear: {
    backgroundColor: 'transparent',
  },
  disabled: {
    backgroundColor: colors.WARM_GREY,
  },
  title: {
    ...fonts.textRegular,
    color: colors.WHITE,
    fontWeight: '700',
    textAlign: 'center',
  },
  linearTitle: {
    color: colors.GREYISH_BROWN,
  },
  smallTitle: {
    ...fonts.textSmall,
    fontWeight: '400',
  },
});

export default Button;
