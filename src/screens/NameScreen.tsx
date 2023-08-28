import React, {useContext, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {ApplicationScreenProps} from '../types/navigation';
import {fonts, images, layout} from '../theme';
import {Button, Header} from '../components';
import Input from '../components/Input';
import {StoreContext} from '../context/Store';

const NameScreen: React.FC<ApplicationScreenProps> = ({navigation}) => {
  const {t} = useTranslation(['auth']);
  const {updateUserData} = useContext(StoreContext);
  const [firstname, setFirstname] = useState('');
  const onChangeName = (value: string) => {
    setFirstname(value);
  };

  const onSubmit = () => {
    if (updateUserData) {
      updateUserData({firstname});
      navigation.navigate('DateScreen');
    }
  };

  return (
    <View style={layout.fill}>
      <Image source={images.couch_smile} style={styles.headerImage} />
      <Header />
      <SafeAreaView style={layout.colSpaceBetween}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>{t('its_great_that_you_are_here')}</Text>
          <Input
            isCentralized
            placeholder={t('your_name')}
            value={firstname}
            onChangeText={onChangeName}
          />
        </View>
        <Button
          title={t('continue')}
          onPress={onSubmit}
          disabled={firstname.length < 2}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
  },
  inputContainer: {
    marginTop: '-5%',
    gap: 18,
  },
  title: {
    ...fonts.textRegular,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default NameScreen;
