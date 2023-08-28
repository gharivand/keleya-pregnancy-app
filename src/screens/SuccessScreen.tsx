import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useTranslation} from 'react-i18next';

import {ApplicationScreenProps} from '../types/navigation';
import {fonts, images, layout} from '../theme';
import {Button} from '../components';

const SuccessScreen: React.FC<ApplicationScreenProps> = () => {
  const {t} = useTranslation(['auth']);

  return (
    <ImageBackground source={images.notifications} style={layout.fill}>
      <SafeAreaView style={layout.colSpaceBetween}>
        <View style={styles.elementWrapper}>
          <Image source={images.bell} style={styles.logo} />
          <Text style={styles.title}>{t('get_notifications_to_boost')}</Text>
        </View>
        <View style={styles.elementWrapper}>
          <Button title={t('skip')} isLinear onPress={() => null} />
          <Button title={t('allow_notifications')} onPress={() => null} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  elementWrapper: {
    gap: 18,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 24,
    alignSelf: 'center',
  },
  title: {
    ...fonts.textRegular,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default SuccessScreen;
