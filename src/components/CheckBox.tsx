import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../theme';

interface IProps {
  label: string;
  onPress: (value: boolean) => void;
}

const CheckBox: React.FC<IProps> = props => {
  const [isChecked, setIsChecked] = useState(false);
  const onPressCheck = () => {
    setIsChecked(state => !state);
    props.onPress(!isChecked);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={onPressCheck}>
      <>
        <View style={styles.checkWrapper}>
          {isChecked && <View style={styles.checkIcon} />}
        </View>
        <Text style={styles.label}>{props.label}</Text>
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  checkWrapper: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.PALE_TEAL,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIcon: {
    width: 14,
    height: 14,
    borderRadius: 4,
    backgroundColor: colors.PALE_TEAL,
  },
  label: {
    ...fonts.textTiny,
    fontWeight: 'bold',
  },
});

export default CheckBox;
