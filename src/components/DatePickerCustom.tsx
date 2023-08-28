import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import DatePicker from 'react-native-date-picker';
import {colors, fonts} from '../theme';

interface IProps {
  date: Date | null;
  onChangeDate: (value: Date) => void;
}

const now = new Date();

const DatePickerCustom: React.FC<IProps> = props => {
  const {t} = useTranslation(['auth']);
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const date_formatter = () => {
    const {date} = props;
    if (!date) {
      return t('choose_date');
    }
    const month = date.toLocaleString('default', {month: 'short'});
    return `${month} ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.dateButton}
        onPress={() => setOpenDatePicker(true)}>
        <Text style={styles.dateText}>{date_formatter()}</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode={'date'}
        minimumDate={now}
        open={openDatePicker}
        date={props.date || now}
        onConfirm={d => {
          setOpenDatePicker(false);
          props.onChangeDate(d);
        }}
        onCancel={() => {
          setOpenDatePicker(false);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  dateButton: {
    backgroundColor: colors.LIGHT_GRAY,
    padding: 4,
    borderRadius: 6,
  },
  dateText: {
    ...fonts.textSmall,
    color: colors.BLUE,
  },
});

export default DatePickerCustom;
