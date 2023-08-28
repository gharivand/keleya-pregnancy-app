import React, {useContext, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {ApplicationScreenProps} from '../types/navigation';
import {fonts, images, layout} from '../theme';
import {Button, DatePickerCustom} from '../components';
import {StoreContext} from '../context/Store';

const DateScreen: React.FC<ApplicationScreenProps> = ({navigation}) => {
  const {t} = useTranslation(['auth']);
  const {userData, updateUserData} = useContext(StoreContext);
  const [date, setDate] = useState<Date | null>(null);

  const onSubmit = () => {
    if (updateUserData && date) {
      updateUserData({date});
      navigation.navigate('WorkoutScreen');
    }
  };

  return (
    <View style={layout.fill}>
      <Image source={images.due_date} style={styles.headerImage} />
      <SafeAreaView style={layout.colSpaceBetween}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>
            {t('when_is_your_baby_due').replace('$name', userData?.firstname)}
          </Text>
          <DatePickerCustom date={date} onChangeDate={d => setDate(d)} />
        </View>
        <Button title={t('continue')} onPress={onSubmit} disabled={!date} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
  },
  inputContainer: {
    gap: 24,
    alignItems: 'center',
  },
  title: {
    ...fonts.textRegular,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default DateScreen;
