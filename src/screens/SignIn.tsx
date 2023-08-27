import React, {useContext} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {ApplicationScreenProps} from '../types/navigation';
import {fonts, images, layout} from '../theme';
import {Button} from '../components';
import Input from '../components/Input';
import {StoreContext} from '../context/Store';

interface IValues {
  email: string;
  password: string;
}

const initialValues: IValues = {
  email: '',
  password: '',
};

const SignIn: React.FC<ApplicationScreenProps> = ({navigation}) => {
  const {t} = useTranslation(['auth']);
  const {updateUserData} = useContext(StoreContext);

  const valuesSchemaValidation = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(4).required('Required'),
  });

  const onSubmit = (values: IValues) => {
    if (updateUserData) {
      updateUserData({email: values.email});
      navigation.navigate('NameScreen');
    }
  };

  return (
    <View style={layout.fill}>
      <Image source={images.authentication} style={styles.headerImage} />
      <SafeAreaView style={layout.fill}>
        <Formik
          initialValues={initialValues}
          validationSchema={valuesSchemaValidation}
          onSubmit={onSubmit}>
          {({handleChange, handleSubmit, values, isValid, dirty}) => (
            <View style={layout.colSpaceBetween}>
              <View style={styles.inputContainer}>
                <Text style={styles.title}>{t('welcome_back')}</Text>
                <Input
                  placeholder={t('example_email')}
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                <Input
                  placeholder={t('enter_a_password')}
                  isPassword={true}
                  value={values.password}
                  onChangeText={handleChange('password')}
                />
              </View>
              <View style={styles.buttonsContainer}>
                <Button
                  isLinear
                  isSmallSize
                  title={t('forgot_password')}
                  onPress={handleSubmit}
                  disabled={!(isValid && dirty)}
                />
                <Button
                  title={t('login')}
                  onPress={handleSubmit}
                  disabled={!(isValid && dirty)}
                />
              </View>
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
  },
  inputContainer: {
    marginTop: '-15%',
    gap: 12,
  },
  title: {
    ...fonts.textRegular,
    textAlign: 'center',
    marginTop: 8,
  },
  buttonsContainer: {
    gap: 14,
  },
});

export default SignIn;
