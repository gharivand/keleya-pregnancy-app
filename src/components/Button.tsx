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
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const Button: React.FC<IProps> = props => {
  return (
    <TouchableOpacity
      style={[styles.container, props.isLinear && styles.linear]}>
      <Text style={[styles.title, props.isLinear && styles.linearTitle]}>
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
  title: {
    ...fonts.textRegular,
    color: colors.WHITE,
    fontWeight: '700',
    textAlign: 'center',
  },
  linearTitle: {
    color: colors.GREYISH_BROWN,
  },
});

export default Button;
