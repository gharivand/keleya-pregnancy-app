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

const InitialScreen: React.FC<ApplicationScreenProps> = ({navigation}) => {
  const {t} = useTranslation(['auth']);

  const navigate_to_signup = () => {
    navigation.navigate('SignUp');
  };

  const navigate_to_signIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ImageBackground source={images.intro} style={layout.fill}>
      <SafeAreaView style={layout.colSpaceBetween}>
        <View>
          <Image source={images.logo} style={styles.logo} />
          <Text style={styles.title}>
            {t('for_a_fit_and_relaxed_pregnancy')}
          </Text>
        </View>
        <View>
          <Button title={t('get_started')} onPress={navigate_to_signIn} />
          <Button title={t('or_login')} isLinear onPress={navigate_to_signup} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 24,
    alignSelf: 'center',
  },
  title: {
    ...fonts.textRegular,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default InitialScreen;
