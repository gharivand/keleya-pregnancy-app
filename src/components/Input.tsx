import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fonts, images} from '../theme';

interface IProps {
  value: string;
  onChangeText: (str: string) => void;
  placeholder: string;
  isPassword?: boolean;
}

const Input: React.FC<IProps> = props => {
  const [isSecure, setIsSecure] = useState(true);
  const on_change_visibility = () => setIsSecure(state => !state);
  return (
    <View style={styles.container}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.textInput}
        placeholder={props.placeholder}
        placeholderTextColor={colors.WARM_GREY}
        secureTextEntry={props.isPassword && isSecure}
      />
      {props.isPassword && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={on_change_visibility}
          style={styles.visibilityButton}>
          <Image
            source={isSecure ? images.in_visible_icon : images.visible_icon}
            style={styles.visibilityIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.GREYISH_BROWN,
  },
  textInput: {
    ...fonts.textSmall,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  visibilityButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  visibilityIcon: {
    width: 20,
    height: 20,
  },
});

export default Input;
